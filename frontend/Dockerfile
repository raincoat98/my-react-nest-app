# 1. Node.js를 위한 공식 이미지 사용
FROM node:18-alpine

# 2. 작업 디렉터리 설정
WORKDIR /app

# 3. package.json과 package-lock.json을 복사하여 종속성 설치
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. 애플리케이션 소스 코드 복사
COPY . .

# 6. 개발 서버 실행 (Vite)
CMD ["npm", "run", "dev"]

# 7. 포트 열기
EXPOSE 5173