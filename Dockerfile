FROM --platform=linux/amd64 node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .