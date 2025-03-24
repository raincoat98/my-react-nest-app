#!/bin/sh

# .env.production 파일에서 NGINX_HOST 값을 읽어옴
NGINX_HOST_VALUE=$(grep NGINX_HOST /app/.env.production | cut -d '=' -f2)

# NGINX_HOST 값이 비어있으면 localhost를 기본값으로 사용
export SERVER_NAME=${NGINX_HOST_VALUE:-localhost}

# 환경변수로 nginx.conf 템플릿 처리
envsubst '${SERVER_NAME}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Nginx 실행
nginx -g 'daemon off;' 