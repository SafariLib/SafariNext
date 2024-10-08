import './LogoNeon.styles.css';
import Image from 'next/image';
import { Box } from '../../../Box';

export default function LogoNeon() {
    return (
        <Box align="end" justify="space-between" className="sdui-logo" fullWidth>
            <Image
                className="sdui-logo-neon-img"
                src="/safaridigital.fr.logo.neon.png"
                alt="Logo de l'application"
                width={455}
                height={258}
            />
        </Box>
    );
}
