'use client';

import { Editor } from '@/components';
import { viewConfig } from '@safaridigital/common';

const fakeData = {
    content: [],
    root: { props: { title: 'Test page' } },
    zones: {},
};

export default function Views() {
    return <Editor data={fakeData} config={viewConfig} />;
}