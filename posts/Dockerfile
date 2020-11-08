From node:lts-alpine

WORKDIR /app

COPY package.json ./
RUN yarn 
COPY ./ ./
# EXPOSE 4000
CMD ["yarn", "start"]

#docker build -t microservice/posts .
# docker run  -d  -p 4000:4000  --name posts-service microservice/posts