FROM  node:14.16.0-alpine3.13

RUN apk add --no-cache bash

RUN touch /root/.bashrc | echo "PS1='\w\$ '" >> /root/.bashrc

RUN npm install -g nodemon
RUN npm install -g @loopback/cli

RUN mkdir -p /home/node/app

WORKDIR /home/node/app
