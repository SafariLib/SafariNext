import React from 'react';
import { Sdui } from '@/puck/sdui';
import { API_URL } from '@/config';
import './Home.styles.css';

export default function Home() {
    return (
        <React.Fragment>
            <div id="Home" />
            <section className="sdui-Home">
                <div className="sdui-Home-hero">
                    <Sdui.Hero variant="primary">
                        <Sdui.FlexContainer className="sdui-Home-wrapper" direction="row" align="center">
                            <Sdui.FlexContainer spacing="medium" fullWidth align="start">
                                <Sdui.Heading variant="h2">
                                    Votre boussole dans la jungle du numérique
                                </Sdui.Heading>
                                <img
                                    className="sdui-Home-img-mobile"
                                    src={`${API_URL}218717111.jpg`}
                                    alt="Illustration de personnes travaillant sur des écrans d'ordinateurs"
                                />
                                <div className="sdui-Home-par">
                                    <Sdui.Paragraph>
                                        Vous cherchez à développer votre activité sur le web, mais vous êtes
                                        perdu face à tous les outils disponibles ? Safari Digital vous
                                        accompagne dans cette nouvelle aventure.
                                    </Sdui.Paragraph>
                                    <Sdui.Paragraph>
                                        Stratégie marketing, création de contenus, emailing, Comunity
                                        management, SEO, Google Ads... Nous mettons notre expertise au profit
                                        de votre projet.
                                    </Sdui.Paragraph>
                                    <Sdui.Paragraph>
                                        Embarquez pour un voyage palpitant au coeur du marketing digital et
                                        suivez le guide !
                                    </Sdui.Paragraph>
                                </div>
                            </Sdui.FlexContainer>
                            <Sdui.FlexContainer
                                className="sdui-Home-img"
                                direction="row"
                                spacing="medium"
                                align="center"
                                fullWidth>
                                <img
                                    src={`${API_URL}43488012.jpg`}
                                    alt="Illustration de personnes travaillant sur des écrans d'ordinateurs"
                                />
                                <img
                                    className="sdui-Home-img-large"
                                    src={`${API_URL}43484011.jpg`}
                                    alt="Illustration de personnes travaillant sur des écrans d'ordinateurs"
                                />
                                <img
                                    src={`${API_URL}218717111.jpg`}
                                    alt="Illustration de personnes travaillant sur des écrans d'ordinateurs"
                                />
                            </Sdui.FlexContainer>
                        </Sdui.FlexContainer>
                    </Sdui.Hero>
                </div>
                <div className="sdui-page-scroll">
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M48 24C48 30.3652 45.4714 36.4697 40.9706 40.9706C36.4697 45.4714 30.3652 48 24 48C17.6348 48 11.5303 45.4714 7.02943 40.9706C2.52856 36.4697 0 30.3652 0 24C0 17.6348 2.52856 11.5303 7.02943 7.02944C11.5303 2.52856 17.6348 0 24 0C30.3652 0 36.4697 2.52856 40.9706 7.02944C45.4714 11.5303 48 17.6348 48 24ZM25.5 13.5C25.5 13.1022 25.342 12.7206 25.0607 12.4393C24.7794 12.158 24.3978 12 24 12C23.6022 12 23.2206 12.158 22.9393 12.4393C22.658 12.7206 22.5 13.1022 22.5 13.5L22.5 30.879L16.062 24.438C15.9225 24.2985 15.757 24.1879 15.5748 24.1124C15.3925 24.037 15.1972 23.9981 15 23.9981C14.8028 23.9981 14.6075 24.037 14.4252 24.1124C14.243 24.1879 14.0775 24.2985 13.938 24.438C13.7985 24.5775 13.6879 24.743 13.6124 24.9252C13.537 25.1075 13.4981 25.3028 13.4981 25.5C13.4981 25.6972 13.537 25.8925 13.6124 26.0748C13.6879 26.257 13.7985 26.4225 13.938 26.562L22.938 35.562C23.0773 35.7017 23.2429 35.8125 23.4251 35.8881C23.6073 35.9638 23.8027 36.0027 24 36.0027C24.1973 36.0027 24.3927 35.9638 24.5749 35.8881C24.7571 35.8125 24.9227 35.7017 25.062 35.562L34.062 26.562C34.2015 26.4225 34.3121 26.257 34.3876 26.0748C34.463 25.8925 34.5019 25.6972 34.5019 25.5C34.5019 25.3028 34.463 25.1075 34.3876 24.9252C34.3121 24.743 34.2015 24.5775 34.062 24.438C33.9225 24.2985 33.757 24.1879 33.5748 24.1124C33.3925 24.037 33.1972 23.9981 33 23.9981C32.8028 23.9981 32.6075 24.037 32.4252 24.1124C32.243 24.1879 32.0775 24.2985 31.938 24.438L25.5 30.879L25.5 13.5Z"
                            fill="#FACC0E"
                        />
                    </svg>
                </div>
            </section>
        </React.Fragment>
    );
}
