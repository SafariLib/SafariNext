'use client';

import { ThemeProvider } from '@digital/ui';
import type { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
