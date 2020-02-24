FROM node:slim

COPY package.json package-lock.json ./
RUN npm install

COPY . .
ADD .env.production .env

CMD ["npm", "run", "start"]
