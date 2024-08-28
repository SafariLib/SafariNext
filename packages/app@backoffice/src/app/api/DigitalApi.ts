export interface DigitalApiResponse<T> {
    data: T;
    status: number;
    headers: Headers;
    ok: boolean;
    unauthorized: boolean;
}

export interface DigitalApiRequest {
    headers?: Record<string, any>;
    body?: Record<string, any>;
}

export class DigitalApi {
    private static apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    private static apiBaseHeaders = { 'Content-Type': 'application/json' };

    private static async handleResponse<T>(response: Response) {
        return {
            ...response,
            data: await response.json(),
            unauthorized: response.status === 401,
        } as DigitalApiResponse<T>;
    }

    public static async get<T>(path: string, options?: Omit<DigitalApiRequest, 'body'>) {
        const response = await fetch(`${this.apiBaseUrl}${path}`, {
            method: 'GET',
            headers: this.apiBaseHeaders,
            ...options,
        });
        return this.handleResponse<T>(response);
    }

    public static async post<T>(path: string, { body, ...payload }: DigitalApiRequest) {
        const response = await fetch(`${this.apiBaseUrl}${path}`, {
            method: 'POST',
            headers: this.apiBaseHeaders,
            body: JSON.stringify(body ?? {}),
            ...payload,
        });
        return this.handleResponse<T>(response);
    }
}
