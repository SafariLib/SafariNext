import { createContext, runInContext } from 'node:vm';

export default class JsUmdInterpreter {
    public static getDefaultExport<T = any>(data: string): T {
        const sandbox = { module: {}, exports: {}, require: require };
        const context = createContext(sandbox);
        runInContext(data, context);
        return (sandbox.module as { exports: T }).exports;
    }
}