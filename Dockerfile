FROM node:16-alpine
WORKDIR /app/
COPY . .

RUN npm install

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

RUN echo "NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}" > /app/.env

RUN npm run build

FROM node:16-alpine
WORKDIR /deploy/
COPY --from=0 /app/.next /deploy/.next
COPY --from=0 /app/package.json /deploy/package.json
COPY --from=0 /app/node_modules /deploy/node_modules
COPY --from=0 /app/public /deploy/public

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]


