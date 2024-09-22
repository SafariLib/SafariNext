import { API_URL } from '@/config';
import { FlexContainer } from '../Container/Container';
import './LogoNeon.styles.css';

export default function LogoNeon() {
    return (
        <FlexContainer align="end" justify="spaced" className="sdui-logo" fullWidth>
            <img className="sdui-logo-neon-img" src={`${API_URL}safaridigital.fr.logo.neon.png`} />
        </FlexContainer>
    );
}
