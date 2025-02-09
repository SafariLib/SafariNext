import vm from 'vm';

export interface CjsSandbox {
    module?: {
        exports?: any;
    };
}

export default class JsInterpreter {
    public static readCjs<T = any>(content: string | undefined): T | undefined {
        if (!content) {
            console.log('JsInterpreter: Content is undefined');
            return;
        }
        try {
            const sandbox: CjsSandbox = { module: { exports: {} } };
            vm.createContext(sandbox);
            vm.runInContext(content, sandbox);
            return sandbox.module?.exports;
        } catch (e) {
            console.log(`JsInterpreter: ${e}`);
        }
    }
}
