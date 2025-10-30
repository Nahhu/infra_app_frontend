FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY ./views/index ./ 
EXPOSE 80
