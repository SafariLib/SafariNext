import local from 'next/font/local';

import '@fontsource/roboto-mono/300-italic.css';
import '@fontsource/roboto-mono/300.css';
import '@fontsource/roboto-mono/400-italic.css';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/500-italic.css';
import '@fontsource/roboto-mono/500.css';
import '@fontsource/roboto-mono/700-italic.css';
import '@fontsource/roboto-mono/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const neoneon = local({
    src: [{ path: './neoneon.otf', weight: '400', style: 'normal' }],
    variable: '--sd-font-heading',
});