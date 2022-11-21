FROM node:16.18.1-alpine

WORKDIR /app/user-management

COPY ["package.json", "package-lock.json*", "./"]
ENTRYPOINT ["tail", "-f", "/dev/null"]
RUN npm install

COPY . .

RUN npm run build

RUN npm run generate


CMD [ "npm", "run","tables","&&","npm", "start"  ]

EXPOSE 3000