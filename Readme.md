# Docker Compose 개발 가이드

## 사전 요구사항

- Docker 및 Docker Compose 설치
- Node.js 및 npm (로컬 개발용)

## 환경 설정

1. `frontend`와 `backend` 디렉터리에 `.env.development` 파일 생성
2. 샘플 파일을 참고하여 환경 변수 구성

## 개발 빌드

개발 환경을 시작하려면:

1. 프로젝트 루트 디렉터리에서 다음 명령어 실행:

   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

2. 서비스 접속:

   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:8000](http://localhost:8000)
   - Database: `localhost:5432`

3. 개발 중 변경사항 확인:

   - Frontend와 Backend 코드 변경 시 자동으로 재시작됩니다.
   - 컨테이너 로그는 실시간으로 확인 가능합니다.

4. 개발 환경 종료:
   ```bash
   docker-compose -f docker-compose.dev.yml down
   ```

## 실행 스크립트 사용

다음 명령어로 실행 권한을 부여한 후 개발 환경을 실행할 수 있습니다:

```bash
chmod +x start-dev.sh
./start-dev.sh
```
