'use client';

import React, { type PropsWithChildren } from 'react';
import './styles.css';

export interface SdHeaderProps extends PropsWithChildren {}

export default function SdHeader({ children }: SdHeaderProps) {
    return <header className="SdHeader">{children}</header>;
}
