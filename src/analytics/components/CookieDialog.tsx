'use client';

import React from 'react';
import './CookieDialog.styles.css';
import { Box, Heading, Paragraph } from '../../components';
import CookieIcon from './CookieIcon';

export interface AnalyticsProps {
    open: boolean;
    onAccept: () => void;
    onDecline: () => void;
}

export default function Analytics(props: AnalyticsProps) {
    return (
        <dialog className="Sdui-AnalyticsDialog" {...props}>
            <Box className="Sdui-AnalyticsDialog-Content">
                <Box direction="row" gap={1} align="center" className="Sdui-AnalyticsDialog-Title">
                    <CookieIcon />
                    <Heading variant="h2">Collecte de données</Heading>
                </Box>
                <Paragraph>
                    Nous utilisons des cookies pour collecter et communiquer des informations de manière
                    anonyme et comprendre comment nos visiteurs interagissent avec notre site web.
                </Paragraph>
            </Box>
            <div className="Sdui-AnalyticsDialog-Actions">
                <button onClick={props.onDecline}>Refuser</button>
                <button onClick={props.onAccept}>Accepter</button>
            </div>
        </dialog>
    );
}
