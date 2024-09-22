import Navigation from './Navigation/Navigation';
import LogoNeon from './LogoNeon/LogoNeon';
import Link from './Text/Link';
import Paragraph from './Text/Paragraph';
import { Container, FlexContainer } from './Container/Container';
import Networks from './Networks/Networks';

export const Sdui = Object.assign(
    {},
    {
        Networks,
        Paragraph,
        Link,
        LogoNeon: LogoNeon,
        Container: Container,
        FlexContainer: FlexContainer,
        Nav: Navigation,
    },
);
