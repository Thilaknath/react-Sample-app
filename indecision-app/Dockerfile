# base image
FROM node:9.6.1

# clone repository
RUN mkdir /opt/docker-react
RUN cd /opt/docker-react
RUN git clone https://github.com/Thilaknath/react-Sample-app.git /opt/docker-react

# set the working directory
WORKDIR /opt/docker-react/indecision-app

# install and cache app dependencies
RUN yarn 
RUN yarn build:prod

ENV PORT 8080

CMD [ "yarn", "dev-server"]
EXPOSE 8080

