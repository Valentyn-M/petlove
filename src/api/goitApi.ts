import { API_BASE_URL } from '@/api/apiConfig';
import axios from 'axios';

// The axios.create function is used to create a configured Axios instance
export const goitApi = axios.create({
  baseURL: API_BASE_URL,
});
