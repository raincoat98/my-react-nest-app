import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // CORS credentials 활성화
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // 요청 보내기 전 수행할 작업
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    // 응답 데이터 가공
    return response;
  },
  (error) => {
    // 에러 처리
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
