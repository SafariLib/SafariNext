'use client';

import { ThemeProvider } from '@safaridigital/common';
import type { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
