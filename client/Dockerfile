From node:lts-alpine

WORKDIR /app

COPY package.json ./
RUN yarn 
COPY ./ ./
# EXPOSE 4001
CMD ["yarn", "start"]

#docker build -t microservice/client .
# docker run  -d  -p 4001:4001  --name posts-service microservice/client

# docker build -t guerrerocristian/client:development . 
# docker push  guerrerocristian/client:development 