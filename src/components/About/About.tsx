import { Sdui } from '@/puck/sdui';
import { API_URL } from '@/config';
import './About.styles.css';

export default function About() {
    return (
        <Sdui.Hero>
            <Sdui.FlexContainer
                direction="row"
                align="center"
                justify="spaced"
                fullWidth
                className="about-hero">
                <Sdui.FlexContainer flex={1} className="about-portrait">
                    <Sdui.Image
                        src={`${API_URL}16333472852681.jpg`}
                        alt="Portrait de l'auteur"
                        variant="secondary"
                        rounded
                    />
                </Sdui.FlexContainer>
                <Sdui.FlexContainer spacing="medium" align="end" flex={2} className="about-text">
                    <Sdui.Heading variant="h2">qui sommes-nous ?</Sdui.Heading>
                    <Sdui.Paragraph align="right">
                        Safari Digital est une agence de marketing digital dédiée à renforcer votre présence
                        en ligne. Elle est dirigée par Camille MICHALAK, diplômée en Marketing et
                        Communication avec 8 ans d&apos;expérience dans la communication web et passionnée par
                        le numérique. Nous accompagnons les TPE, PME et artisans dans la création de
                        stratégies digitales efficaces. Contactez-nous pour élaborer une stratégie sur mesure
                        et développer votre activité 2.0 !
                    </Sdui.Paragraph>
                </Sdui.FlexContainer>
            </Sdui.FlexContainer>
        </Sdui.Hero>
    );
}
