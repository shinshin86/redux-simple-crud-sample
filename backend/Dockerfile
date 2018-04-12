FROM node:9

WORKDIR /app
ADD ./package.json /app/package.json
RUN npm install

ADD . /app

EXPOSE 3001

CMD ["node", "server.js"]
