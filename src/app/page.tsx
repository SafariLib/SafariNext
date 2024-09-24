'use client';

import React from 'react';
import { About, Home as HomeHero, Offerings, Page } from '../components';
import { API_URL } from '../config';
import { Sdui } from '../puck/sdui';
import './styles.css';

export default function Home() {
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <Page
                setOpen={setOpen}
                background={`${API_URL}safaridigital.fr.img.1917052874-5.jpg`}
                nav={[
                    { link: '#Home', name: 'accueil' },
                    { link: '#About', name: 'à propos' },
                    { link: '#Offerings', name: 'prestations' },
                    { link: 'mailto:safari.digital.web@gmail.com', name: 'contact' },
                ]}>
                <HomeHero />
                <About />
                <Offerings />
            </Page>
            <div
                className={`sdui-dial-cgu-back${open ? ' sdui-dial-cgu-back-open' : ''}`}
                onClick={() => setOpen(false)}
            />
            <dialog open={open} className="sdui-dial-cgu">
                <div className="sdui-dial-cgu-content">
                    <Sdui.Heading variant="h4">En vigueur au 22/09/2024</Sdui.Heading>
                    <Sdui.Heading variant="h4">Article 1 : Les mentions légales</Sdui.Heading>
                    <Sdui.Paragraph>
                        L’édition et la direction de la publication du site safaridigital.fr est assurée par
                        Camille MICHALAK, domicilié 23 rue ds Cigognes 67540 Ostwald. Numéro de téléphone est
                        0784992519 Adresse e-mail safari.digital.web@gmail.com. La personne est assujetie au
                        RCS avec le numéro d&apos;inscription _______________ et son numéro de TVA
                        intracommunautaire est le _______________ L&apos;hébergeur du site safaridigital.fr
                        est la société OVH, dont le siège social est situé au 2 rue Kellermann 59100 Roubaix,
                        avec le numéro de téléphone : _______________.
                    </Sdui.Paragraph>
                    <Sdui.Heading variant="h4">ARTICLE 2 : Accès au site</Sdui.Heading>
                    <Sdui.Paragraph>
                        Le site safaridigital.fr permet à l&apos;Utilisateur un accès gratuit aux services
                        suivants : Le site internet propose les services suivants : présenter l’expérience
                        professionnelle de Safari Digital. Le site permet également à l’utilisateur un accès
                        gratuit aux informations sur les services marketing digital et les activités de
                        l&apos;entreprise individuelle Safari Digital. Le site est accessible gratuitement en
                        tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par
                        l&apos;Utilisateur pour accéder au service (matériel informatique, logiciels,
                        connexion Internet, etc.) sont à sa charge.
                    </Sdui.Paragraph>
                    <Sdui.Heading variant="h4">ARTICLE 3 : Collecte des données</Sdui.Heading>
                    <Sdui.Paragraph>
                        Le site assure à l&apos;Utilisateur une collecte et un traitement d&apos;informations
                        personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6
                        janvier 1978 relative à l&apos;informatique, aux fichiers et aux libertés. En vertu de
                        la loi Informatique et Libertés, en date du 6 janvier 1978, l&apos;Utilisateur dispose
                        d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition de
                        ses données personnelles. L&apos;Utilisateur exerce ce droit : · par mail à
                        l&apos;adresse email safari.digital.web@gmail.com · via un formulaire de contact ;
                    </Sdui.Paragraph>
                    <Sdui.Heading variant="h4">ARTICLE 4 : Propriété intellectuelle</Sdui.Heading>
                    <Sdui.Paragraph>
                        Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…)
                        font l&apos;objet d&apos;une protection par le Code de la propriété intellectuelle et
                        plus particulièrement par le droit d&apos;auteur. La marque Safari Digital est une
                        marque déposée par Camille MICHALAK.Toute représentation et/ou reproduction et/ou
                        exploitation partielle ou totale de cette marque, de quelque nature que ce soit, est
                        totalement prohibée. L&apos;Utilisateur doit solliciter l&apos;autorisation préalable
                        du site pour toute reproduction, publication, copie des différents contenus. Il
                        s&apos;engage à une utilisation des contenus du site dans un cadre strictement privé,
                        toute utilisation à des fins commerciales et publicitaires est strictement interdite.
                        Toute représentation totale ou partielle de ce site par quelque procédé que ce soit,
                        sans l’autorisation expresse de l’exploitant du site Internet constituerait une
                        contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété
                        intellectuelle. Il est rappelé conformément à l’article L122-5 du Code de propriété
                        intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé
                        doit citer l’auteur et sa source.
                    </Sdui.Paragraph>
                    <Sdui.Heading variant="h4">ARTICLE 5 : Responsabilité</Sdui.Heading>
                    <Sdui.Paragraph>
                        Les sources des informations diffusées sur le site safaridigital.fr sont réputées
                        fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou
                        d’omissions. Les informations communiquées sont présentées à titre indicatif et
                        général sans valeur contractuelle. Malgré des mises à jour régulières, le site
                        safaridigital.fr ne peut être tenu responsable de la modification des dispositions
                        administratives et juridiques survenant après la publication. De même, le site ne peut
                        être tenue responsable de l’utilisation et de l’interprétation de l’information
                        contenue dans ce site. Le site safaridigital.fr ne peut être tenu pour responsable
                        d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique
                        de l’Internaute, suite à une utilisation, à l’accès, ou au téléchargement provenant de
                        ce site. La responsabilité du site ne peut être engagée en cas de force majeure ou du
                        fait imprévisible et insurmontable d&apos;un tiers.
                    </Sdui.Paragraph>
                    <Sdui.Heading variant="h4">ARTICLE 6 : Liens hypertextes</Sdui.Heading>
                    <Sdui.Paragraph>
                        Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé
                        qu’en cliquant sur ces liens, il sortira du site safaridigital.fr. Ce dernier n’a pas
                        de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en
                        aucun cas, être responsable de leur contenu.
                    </Sdui.Paragraph>
                    <Sdui.Heading variant="h4">ARTICLE 7 : Cookies</Sdui.Heading>
                    <Sdui.Paragraph>
                        L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut
                        s’installer automatiquement sur son logiciel de navigation. Les cookies sont de petits
                        fichiers stockés temporairement sur le disque dur de l’ordinateur de l’Utilisateur par
                        votre navigateur et qui sont nécessaires à l’utilisation du site safaridigital.fr. Les
                        cookies ne contiennent pas d’information personnelle et ne peuvent pas être utilisés
                        pour identifier quelqu’un. Un cookie contient un identifiant unique, généré
                        aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de
                        l’Utilisateur, d’autres restent. L’information contenue dans les cookies est utilisée
                        pour améliorer le site safaridigital.fr. En naviguant sur le site, L’Utilisateur les
                        accepte. L’Utilisateur doit toutefois donner son consentement quant à l’utilisation de
                        certains cookies. A défaut d’acceptation, l’Utilisateur est informé que certaines
                        fonctionnalités ou pages risquent de lui être refusées. L’Utilisateur pourra
                        désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son
                        logiciel de navigation.
                    </Sdui.Paragraph>
                    <Sdui.Heading variant="h4">
                        ARTICLE 8 : Droit applicable et juridiction compétente
                    </Sdui.Heading>
                    <Sdui.Paragraph>
                        La législation française s&apos;applique au présent contrat. En cas d&apos;absence de
                        résolution amiable d&apos;un litige né entre les parties, les tribunaux français
                        seront seuls compétents pour en connaître. Pour toute question relative à
                        l’application des présentes CGU, vous pouvez joindre l’éditeur aux coordonnées
                        inscrites à l’ARTICLE 1.
                    </Sdui.Paragraph>
                    <Sdui.Paragraph>CGU réalisées sur http://legalplace.fr/</Sdui.Paragraph>
                </div>
            </dialog>
        </React.Fragment>
    );
}
