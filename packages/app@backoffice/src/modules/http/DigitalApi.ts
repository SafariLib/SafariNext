import { handleResponse } from './utils';

interface DigitalRequest {
    headers?: Record<string, any>;
    body?: Record<string, any>;
}

export default class DigitalApi {
    private static apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    private static apiBaseHeaders = { 'Content-Type': 'application/json' };

    public static async get<T>(path: string, options?: Omit<DigitalRequest, 'body'>) {
        const response = await fetch(`${DigitalApi.apiBaseUrl}${path}`, {
            method: 'GET',
            ...options,
            headers: {
                ...this.apiBaseHeaders,
                ...options?.headers,
            },
        });
        return handleResponse<T>(response);
    }

    public static async post<T>(path: string, { body, headers, ...payload }: DigitalRequest) {
        const response = await fetch(`${DigitalApi.apiBaseUrl}${path}`, {
            method: 'POST',
            headers: {
                ...this.apiBaseHeaders,
                ...headers,
            },
            body: JSON.stringify(body ?? {}),
            ...payload,
        });
        return handleResponse<T>(response);
    }
}
