import axios from 'axios';
import { axiosBaseConfig } from '../../axios';

export const digitalApiInstance = axios.create({
    ...axiosBaseConfig,
    baseURL: process.env.DIGITAL_API_URL,
});

digitalApiInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.resolve(error.response),
);