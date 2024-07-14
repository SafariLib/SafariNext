import type { PropsWithChildren } from 'react';
import React from 'react';
import './styles.css';

export function Page({ children }: PropsWithChildren) {
    return <main className="SdPage">{children}</main>;
}
