import axios from 'axios';
const BASE_URL = 'http://localhost:8080/api/quote/';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Authorization': 'application/json' },
    success: true
});