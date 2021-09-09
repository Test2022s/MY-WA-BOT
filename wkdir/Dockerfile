FROM fusuf/whatsasena:latest

RUN git clone https://github.com/agentmax123/4.0 /root/4.0
WORKDIR /root/4.0/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/farhan-dqz/media

CMD ["node", "bot.js"]
