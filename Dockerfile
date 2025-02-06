FROM python:3.11
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 80
CMD [ "npm", "start", "pytest", "-s", "-v" ]
