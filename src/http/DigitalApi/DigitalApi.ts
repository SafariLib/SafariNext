import { ViewPublicModel } from '@digital-lib/dto';
import { Config } from '@measured/puck';
import { JsInterpreter } from '../../files';
import { digitalApiInstance } from './instance';

export default class DigitalApi {
    public static async getView(path: string) {
        const result = await digitalApiInstance.get<ViewPublicModel>(`view/public/${path}`);
        return result?.status === 200 ? result?.data?.data : undefined;
    }

    public static async getViewConfig(): Promise<Config | undefined> {
        const endpoint = process.env.PUCK_CONFIG_ENDPOINT ?? '';
        const result = await digitalApiInstance.get(endpoint, {
            headers: {
                Accept: 'application/javascript',
            },
        });
        const config = JsInterpreter.readCjs<Config>(result?.data);

        if (result?.status !== 200 || !config) {
            console.log(`Could not get Puck config from: ${endpoint}`);
        }

        return config;
    }
}
