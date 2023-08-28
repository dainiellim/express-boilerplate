FROM node:12.18.2 as build

ARG BUILD_ENV=prod

WORKDIR /app

COPY ./project/package.json /app/package.json
COPY ./project/package-lock.json /app/package-lock.json

RUN npm install

COPY ./project .