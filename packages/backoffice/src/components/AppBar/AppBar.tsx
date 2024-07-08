import './styles.css';
import type { PropsWithChildren } from 'react';
import { Actions } from './components/Actions';
import { Location } from './components/Location';
import { Navigation } from './components/Navigation';

function AppBar(props: PropsWithChildren) {
    return <header className="AppBar">{props.children}</header>;
}

export default Object.assign(AppBar, { Navigation, Location, Actions });
