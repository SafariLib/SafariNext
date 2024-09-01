export interface DigitalApiResponse<T> {
    data: T;
    status: number;
    headers: Headers;
    ok: boolean;
    unauthorized: boolean;
}
