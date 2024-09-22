import Navigation from './Navigation/Navigation';
import LogoNeon from './LogoNeon/LogoNeon';
import Link from './Text/Link';
import Paragraph from './Text/Paragraph';
import { Container, FlexContainer } from './Container/Container';
import Networks from './Networks/Networks';
import Hero from './Hero/Hero';
import Heading from './Text/Heading';
import Image from './Image/Image';

export const Sdui = Object.assign(
    {},
    {
        Image,
        Hero,
        Networks,
        Paragraph,
        Heading,
        Link,
        LogoNeon: LogoNeon,
        Container,
        FlexContainer,
        Nav: Navigation,
    },
);
