'use client';

import { usePageTitle } from '@locales';

export default function Location() {
    const title = usePageTitle();
    return <div className="Layout-location">{title}</div>;
}
