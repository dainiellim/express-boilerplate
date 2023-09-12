FROM node:16.15.0 as build

ARG BUILD_ENV=prod

WORKDIR /app

COPY ./project/package.json /app/package.json
COPY ./project/package-lock.json /app/package-lock.json

RUN npm cache clean --force
RUN npm install
RUN npm install -g ts-node --save

COPY ./project .

CMD ["ts-node", "./project/src/app.ts"]