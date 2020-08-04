FROM node

RUN mkdir -p /node

WORKDIR /node

COPY package*.json ./

RUN npm install

COPY ./app ./app


CMD [ "npm", "run" , "dev" ]