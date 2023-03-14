FROM ubuntu/postgres
RUN apt update -y
RUN apt upgrade -y
RUN apt install apache2 -y
EXPOSE 80
CMD ["apache2ctl", "-D", "FOREGROUND"]