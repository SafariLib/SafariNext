'use client';

import { ThemeProvider } from '@safaridigital/common';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
