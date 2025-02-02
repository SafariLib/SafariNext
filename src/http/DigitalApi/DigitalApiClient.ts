import { digitalApiPublicInstance } from './instance';
import { ViewPublicModel } from '@digital-lib/core';

export default class DigitalApiClient {
    public static async getView(path: string) {
        const { data, status } = await digitalApiPublicInstance.get<ViewPublicModel>(`view/public/${path}`);
        return status === 200 ? data.data : undefined;
    }
}