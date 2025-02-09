import { type Metadata } from "next";
import { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      {/*<head>*/}
      {/*    <link rel="icon" href="safaridigital.fr.favicon.ico" sizes="any" />*/}
      {/*    <meta property="og:type" content="website" />*/}
      {/*    <meta property="og:title" content="safaridigital.fr" />*/}
      {/*    <meta property="og:description" content="Votre boussole dans la jungle du numérique." />*/}
      {/*    <meta property="og:url" content="https://safaridigital.fr/" />*/}
      {/*    <meta property="og:image" content="https://safaridigital.fr/opengraph.jpg" />*/}
      {/*</head>*/}
      <body>{children}</body>
    </html>
  );
}
