import React from 'react';
import { Box, CGUDialog, Grid, Heading, Hero, Page, PaperBox, Paragraph, Scroller } from '../components';
import { homePageContent } from './page.content';
import './styles.theme.light.css';
import './styles.globals.css';
import './styles.page.css';

export default function Home() {
    return (
        <React.Fragment>
            <Page
                background="/safaridigital.fr.img.1917052874-5.jpg"
                nav={[
                    { link: '#Home', name: 'accueil' },
                    { link: '#About', name: 'à propos' },
                    { link: '#Offerings', name: 'prestations' },
                    { link: 'mailto:safari.digital.web@gmail.com', name: 'contact' },
                ]}>
                <div id="Home" />
                <section className="Home-Hero">
                    <Box mt={4} mb={4}>
                        <Hero variant="primary">
                            <Box className="Home-Hero-Wrapper" direction="row" align="center">
                                <Box gap={2} fullWidth align="start">
                                    <Heading variant="h2">{homePageContent.home.heading}</Heading>
                                    <img {...homePageContent.home.images.mobile[0]} />
                                    <Box className="Home-Hero-Paragraph" direction="column" gap={1}>
                                        {homePageContent.home.paragraphs.map((paragraph, index) => (
                                            <Paragraph key={index}>{paragraph.content}</Paragraph>
                                        ))}
                                    </Box>
                                </Box>
                                <Box
                                    className="Home-Hero-Images"
                                    direction="row"
                                    gap={2}
                                    align="center"
                                    fullWidth>
                                    {homePageContent.home.images.desktop.map((image, index) => (
                                        <img key={index} {...image} />
                                    ))}
                                </Box>
                            </Box>
                        </Hero>
                    </Box>
                    <Scroller />
                </section>
                <Hero variant="primary" id="About">
                    <Box
                        className="About-Hero"
                        direction="row"
                        align="center"
                        justify="center"
                        gap={3}
                        fullWidth>
                        <Box className="About-Hero-Portrait" flex={1}>
                            <img {...homePageContent.about.image} />
                        </Box>
                        <Box className="About-Hero-Content" gap={2} flex={2} align="end">
                            <Heading variant="h2">{homePageContent.about.heading}</Heading>
                            {homePageContent.about.paragraphs.map((paragraph, index) => (
                                <Paragraph key={index}>{paragraph.content}</Paragraph>
                            ))}
                        </Box>
                    </Box>
                </Hero>
                <Hero variant="secondary" id="Offerings">
                    <Box gap={3} align="center" fullWidth>
                        <Heading variant="h2">{homePageContent.offerings.heading}</Heading>
                        <Grid gap={2}>
                            {homePageContent.offerings.items.map(({ content, ...itemProps }, i) => (
                                <React.Fragment key={i}>
                                    <PaperBox {...itemProps}>{content}</PaperBox>
                                </React.Fragment>
                            ))}
                        </Grid>
                    </Box>
                </Hero>
            </Page>
            <CGUDialog />
        </React.Fragment>
    );
}
