import type { DigitalApiResponse } from '@modules/http/types/DigitalApiResponse';

export async function handleResponse<T>(response: Response) {
    return {
        ...response,
        data: await response.json(),
        unauthorized: response.status === 401,
    } as DigitalApiResponse<T>;
}
