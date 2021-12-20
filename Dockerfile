FROM node:latest

WORKDIR /app

RUN apt-get install -y git
RUN git clone https://github.com/hodlerhacks/balance-bot-v2.git .

EXPOSE 3000
CMD ["node", "bb"]