import CookieIcon from './CookieIcon';
import './CookieAction.styles.css';

export interface CookieActionProps {
    onClick: () => void;
}

export default function CookieAction({ onClick }: CookieActionProps) {
    return (
        <button onClick={onClick} className="Sdui-CookieAction">
            <CookieIcon />
        </button>
    );
}
