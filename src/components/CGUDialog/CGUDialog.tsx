'use client';

import React from 'react';
import { cguContent } from './content';
import { Heading, Paragraph } from '../Text';
import './CGUDialog.styles.css';

export const setCGUDialogOpen = (open: boolean) => {
    const dialog = document.getElementById('cgu-dialog') as HTMLDialogElement;
    const back = document.getElementById('cgu-back') as HTMLDivElement;
    if (!dialog || !back) return;

    console.log('setCGUDialogOpen', open);
    dialog.open = open;
    open ? back.classList.add('cgu-back-open') : back.classList.remove('cgu-back-open');
};

export default function CGUDialog() {
    return (
        <React.Fragment>
            <div id="cgu-back" onClick={() => setCGUDialogOpen(false)} />
            <dialog open={false} id="cgu-dialog">
                <div id="cgu-dialog-content">
                    {cguContent.map((content, index) => (
                        <React.Fragment key={index}>
                            {content.heading ? <Heading variant="h4">{content.heading}</Heading> : null}
                            {content.paragraph ? <Paragraph>{content.paragraph}</Paragraph> : null}
                        </React.Fragment>
                    ))}
                </div>
            </dialog>
        </React.Fragment>
    );
}
