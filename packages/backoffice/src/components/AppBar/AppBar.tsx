import './styles.css';
import type { PropsWithChildren } from 'react';
import { Location } from './components/Location';
import { Actions } from './components/Actions';

function AppBar(props: PropsWithChildren) {
    return <header className="AppBar">{props.children}</header>;
}

export default Object.assign(AppBar, { Location, Actions });
