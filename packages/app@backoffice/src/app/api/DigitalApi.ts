import axios from 'axios';

export class SafariDigitalApi {
    private static apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

    public static async get(path: string) {
        const response = await axios.get(`${this.apiBaseUrl}${path}`);
        return response;
    }

    public static async post<T>(path: string, payload: Record<string, any> | undefined) {
        const response = await fetch(`${this.apiBaseUrl}${path}`, {
            method: 'POST',
            body: JSON.stringify(payload),
        });
        return response;
    }
}
