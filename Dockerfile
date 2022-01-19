FROM node:16.13.2-alpine3.15

LABEL maintainer="@hodlerhacks"

RUN apk update && \
    apk upgrade && \
    apk add git

WORKDIR /var/opt/balance-bot-v2
COPY package*.json .
RUN npm install
COPY . .

RUN addgroup app && adduser -S -G app app
USER app

EXPOSE 3000

CMD [ "node", "bb.js" ]