FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sl https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

RUN apt install -y mongod
RUN service mongod restart


COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.js index.js
COPY database/connection.js database/connection.js
COPY routes/route.js routes/route.js
COPY controllers/shoesdata.js controllers/shoesdata.js
COPY models/shoesmodel.js models/shoesmodel.js
COPY initdata/shoes.js initdata/shoes.js
COPY .env .env
RUN npm install
ENTRYPOINT [ "node","index.js" ]