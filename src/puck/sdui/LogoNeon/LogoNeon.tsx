import { FlexContainer } from '../Container/Container';
import './LogoNeon.styles.css';
import Image from 'next/image';

export default function LogoNeon() {
    return (
        <FlexContainer align="end" justify="spaced" className="sdui-logo" fullWidth>
            <Image
                className="sdui-logo-neon-img"
                src="/safaridigital.fr.logo.neon.png"
                alt="Logo de l'application"
                width={455}
                height={258}
            />
        </FlexContainer>
    );
}
