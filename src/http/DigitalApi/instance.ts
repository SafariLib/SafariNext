import axios from 'axios';

export const digitalApiInstance = axios.create({
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    baseURL: process.env.DIGITAL_API_URL,
});

digitalApiInstance.interceptors.response.use(
    response => response,
    error => Promise.resolve(error.response)
);
