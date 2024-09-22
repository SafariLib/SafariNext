import React from 'react';
import { About, Offerings, Page } from '@/components';
import { API_URL } from '@/config';
import './styles.css';

export default async function Home() {
    return (
        <Page
            background={`${API_URL}safaridigital.fr.img.1917052874.png`}
            nav={[
                { link: '/', name: 'accueil' },
                { link: '/about', name: 'à propos' },
                { link: '/offerings', name: 'prestations' },
                { link: '/contact', name: 'contact' },
            ]}>
            <About />
            <Offerings />
        </Page>
    );
}
