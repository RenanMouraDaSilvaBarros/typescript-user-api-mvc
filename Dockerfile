FROM node:16.18.1-alpine

WORKDIR /app/user-management

COPY ["package.json", "package-lock.json*", "./"]
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

RUN npm run generate
    command:  tail -f /dev/null && npx prisma migrate dev


CMD [ "npm", "run","tables","&&","npm", "start"  ]

EXPOSE 3000