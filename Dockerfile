FROM node:16.18.1-alpine

WORKDIR /app/user-management

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

RUN npm run generate

RUN npm run build

CMD [ "npm", "start" ]
CMD [ "npm", "run", "tables" ]


EXPOSE 3000