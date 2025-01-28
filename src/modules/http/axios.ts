import { CreateAxiosDefaults } from 'axios';

export const axiosBaseConfig: CreateAxiosDefaults = {
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
};
