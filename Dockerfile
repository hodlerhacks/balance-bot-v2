FROM node:16.13.2-alpine3.15

LABEL maintainer="@hodlerhacks"

WORKDIR /var/opt/balance-bot-v2
COPY package*.json .
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "node", "bb.js" ]