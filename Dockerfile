FROM node:16-alpine
WORKDIR /app/
COPY . .
RUN npm install
RUN echo '$GORAKU_API_URL'>.env
RUN npm run build

FROM node:16-alpine
WORKDIR /deploy/
COPY --from=0 /app/.next /deploy/.next
COPY --from=0 /app/package.json /deploy/package.json
COPY --from=0 /app/node_modules /deploy/node_modules
COPY --from=0 /app/node_modules/whatap/whatap.conf /deploy/whatap.conf

RUN echo 'license=$LICENSE\n\
          whatap.server.host=13.124.11.223/13.209.172.35\n\
          whatap_micro_enabled=true' >> /deploy/whatap.conf


