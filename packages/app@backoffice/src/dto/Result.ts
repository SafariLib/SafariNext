import type { ResultMessage } from '@/dto/ResultMessage';

export interface Result<T> {
    value: T;
    hasError: boolean;
    errors: ResultMessage[];
    infos: ResultMessage[];
}
