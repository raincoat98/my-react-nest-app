# 1. Node.js 이미지를 기반으로 설정
FROM node:16 AS build

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json과 package-lock.json 복사
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. React 애플리케이션 빌드
COPY . .
RUN npm run build

# 6. nginx를 사용하여 정적 파일을 서빙
FROM nginx:alpine

# 7. 빌드한 React 앱을 nginx의 기본 디렉토리로 복사
COPY --from=build /app/build /usr/share/nginx/html

# 8. 컨테이너 포트 80으로 설정
EXPOSE 80

# 9. nginx 실행
CMD ["nginx", "-g", "daemon off;"]