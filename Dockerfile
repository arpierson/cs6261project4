FROM node:12.6.0

LABEL "maintainer"="apierso2@my.westga.edu"

WORKDIR /calculator

COPY . /calculator

RUN npm install -g @angular/cli@7.3.5
RUN npm install -g http-server

#RUN chmod +x build.sh

CMD ["./build.sh"]