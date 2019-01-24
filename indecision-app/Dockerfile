# base image
FROM node:9.6.1

# clone repository
RUN mkdir /opt/docker-react
RUN cd /opt/docker-react
RUN git clone -c http.sslVerify=false https://github.wdf.sap.corp/i850487/react-Sample-app.git /opt/docker-react

# set the working directory
WORKDIR /opt/docker-react/indecision-app

# install and cache app dependencies
RUN yarn 
RUN yarn build

