From node:lts-alpine

WORKDIR /app

COPY package.json ./
RUN yarn 
COPY ./ ./
# EXPOSE 4005
CMD ["yarn", "start"]

#docker build -t microservice/event-bus .
# docker run  -d  -p 4005:4005  --name posts-service microservice/event-bus