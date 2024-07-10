'use client';

import './styles.css';
import { usePathname } from 'next/navigation';

export default function Location() {
    const pathname = usePathname();
    return <div className="AppBar-navigation-Location">{pathname}</div>;
}
