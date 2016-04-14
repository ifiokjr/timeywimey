FROM node:5.10.1

RUN apt-get update && apt-get install -y build-essential
RUN apt-get install -y ruby
RUN gem install sass

RUN mkdir -p /src/app

WORKDIR /src/app
COPY ./package.json /src/app/package.json

# RUN npm install

EXPOSE 3000
