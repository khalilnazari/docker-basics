# More information: https://docs.docker.com/go/dockerfile-reference/

ARG NODE_VERSION=22.16.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
