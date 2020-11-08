From node:lts-alpine

WORKDIR /app

COPY package.json ./
RUN yarn 
COPY ./ ./
# EXPOSE 4002
CMD ["yarn", "start"]

#docker build -t microservice/query .
# docker run  -d  -p 4002:4002  --name posts-service microservice/query

# docker build -t guerrerocristian/query:development . 
# docker push  guerrerocristian/query:development 