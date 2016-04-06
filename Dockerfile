FROM node:5

RUN apt-get update --qq && apt-get install -y build-essential
RUN apt-get install -y ruby
RUN gem install sass

RUN mkdir /src

WORKDIR /src
COPY ./package.json /src/package.json

RUN npm i

EXPOSE 3000
