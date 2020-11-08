From node:lts-alpine

WORKDIR /app

COPY package.json ./
RUN yarn 
COPY ./ ./
# EXPOSE 4003
CMD ["yarn", "start"]

#docker build -t microservice/moderation .
# docker run  -d  -p 4003:4003  --name posts-service microservice/moderation

# docker build -t guerrerocristian/moderation:development . 
# docker push  guerrerocristian/moderation:development 