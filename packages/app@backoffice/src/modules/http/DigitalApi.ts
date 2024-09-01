import type { DigitalApiRequest } from './types/DigitalApiRequest';
import { handleResponse } from './utils';

export default class DigitalApi {
    private static apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    private static apiBaseHeaders = { 'Content-Type': 'application/json' };

    public static async get<T>(path: string, options?: Omit<DigitalApiRequest, 'body'>) {
        const response = await fetch(`${this.apiBaseUrl}${path}`, {
            method: 'GET',
            headers: this.apiBaseHeaders,
            ...options,
        });
        return handleResponse<T>(response);
    }

    public static async post<T>(path: string, { body, ...payload }: DigitalApiRequest) {
        const response = await fetch(`${this.apiBaseUrl}${path}`, {
            method: 'POST',
            headers: this.apiBaseHeaders,
            body: JSON.stringify(body ?? {}),
            ...payload,
        });
        return handleResponse<T>(response);
    }
}
