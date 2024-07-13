'use client';

import './styles.css';
import { usePageTitle } from '@/locales';

export default function Location() {
    const title = usePageTitle();
    return <div className="AppBar-navigation-Location">{title}</div>;
}
