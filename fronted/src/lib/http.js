import axios from 'axios';
const http = axios.create({
  baseURL: 'https://funfactory.dev', // 임시 하드코딩
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});
export default http;
