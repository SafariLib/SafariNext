'use client';

import React from 'react';
import CookieAction from './components/CookieAction';
import CookieDialog from './components/CookieDialog';
import { consent } from './consent';

export default function Analytics() {
    const [showModal, setShowModal] = React.useState(false);

    React.useLayoutEffect(() => {
        const consent = localStorage.getItem('ga_consent');
        if (consent === null) {
            setShowModal(true);
        }
    }, []);

    return (
        <React.Fragment>
            {!showModal ? <CookieAction onClick={() => setShowModal(!showModal)} /> : null}
            <CookieDialog
                open={showModal}
                onAccept={() => {
                    consent(true);
                    setShowModal(false);
                }}
                onDecline={() => {
                    consent(false);
                    setShowModal(false);
                }}
            />
        </React.Fragment>
    );
}
