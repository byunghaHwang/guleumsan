import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // dev/prod 자동 분기
  withCredentials: true,                      // 세션/쿠키 쓰면 유지
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
