FROM node:16-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
RUN yarn global add serve
EXPOSE 3000
CMD [ "serve", "-S" , "build"]
