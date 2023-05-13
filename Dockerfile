FROM node:16-alpine
WORKDIR /app/
COPY . .



RUN npm install

ARG GORAKU_API_URL
ENV GORAKU_API_URL ${GORAKU_API_URL}

RUN echo ${GORAKU_API_URL}>/app/.env

ARG WHATAP_LICENSE
ENV WHATAP_LICENSE ${WHATAP_LICENSE}

RUN echo ${WHATAP_LICENSE}>/app/whatap.conf

RUN npm run build

FROM node:16-alpine
WORKDIR /deploy/
COPY --from=0 /app/.next /deploy/.next
COPY --from=0 /app/package.json /deploy/package.json
COPY --from=0 /app/node_modules /deploy/node_modules
COPY --from=0 /app/whatap.conf /deploy/whatap.conf

ENTRYPOINT ["npm", "run", "start"]


