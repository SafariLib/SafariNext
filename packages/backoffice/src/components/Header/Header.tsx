import './styles.css';
import type { PropsWithChildren } from 'react';
import { Location } from './components/Location';
import { Actions } from './components/Actions';

function Header(props: PropsWithChildren) {
    return <header className="Header">{props.children}</header>;
}

export default Object.assign(Header, { Location, Actions });
