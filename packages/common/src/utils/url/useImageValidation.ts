import React from 'react';
import { EErrorMessage, logError } from '../error';

export default function useImageValidation(src: string | undefined) {
    const [isValid, setIsValid] = React.useState(true);

    React.useEffect(() => {
        if (!src) return setIsValid(false);
        const image = new Image();
        image.src = src;
        image.onload = () => setIsValid(true);
        image.onerror = () => {
            setIsValid(false);
            logError(EErrorMessage.IMAGE_URL_INVALID + src, 'warn');
        };
    }, [src]);

    return isValid;
}
