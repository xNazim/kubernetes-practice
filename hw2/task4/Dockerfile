FROM ubuntu:22.04
RUN apt update -y && apt install nginx -y
COPY  default /etc/nginx/sites-available/default
COPY index.html /var/www/html
RUN service nginx stop
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]