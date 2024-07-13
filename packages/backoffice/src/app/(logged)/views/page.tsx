'use client';

import { Editor } from '@/components';
import { viewConfig } from '@safaridigital/common';

const fakeData = {
    content: [
        { type: 'Logo', props: {} },
        { type: 'Button', props: { children: 'Primary' } },
    ],
    root: { props: { title: 'Test page' } },
    zones: {},
};

export default function Views() {
    // @ts-ignore
    return <Editor data={fakeData} config={viewConfig} />;
}