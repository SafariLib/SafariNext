import { type ViewPublicModel } from './dto';
import { digitalApiInstance } from './instance';

export default class DigitalApiClient {
    public static async getView(path: string) {
        const { data, status } = await digitalApiInstance.get<ViewPublicModel>(`view/public/${path}`);
        return status === 200 ? data.data : undefined;
    }

    public static async getRawConfig(): Promise<string | undefined> {
        const { data, status } = await digitalApiInstance.get<string>('test', {
            method: 'GET',
            headers: { 'Content-Type': 'text/javascript' },
        });
        console.log(data);
        return status !== 200 ? undefined : data;
    }
}