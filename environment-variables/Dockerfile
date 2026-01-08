FROM node:22-alpine

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

ENV PORT=6000
ENV APP_NAME="My Awesome Application"

CMD ["node", "src/index.ts"]