import type { EErrorMessage } from './EErrorMessage';

export const logError = (error: Error | EErrorMessage | string, severity?: 'error' | 'warn') =>
    console[severity ?? 'error'](error);
