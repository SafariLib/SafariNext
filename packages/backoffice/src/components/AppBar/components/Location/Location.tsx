'use client';

import './styles.css';
import { APP_DOMAIN } from '@/config';

export default function Location() {
    return (
        <div className="AppBar-navigation-Location">{window.document.title.split(`${APP_DOMAIN}/`)[1]}</div>
    );
}
