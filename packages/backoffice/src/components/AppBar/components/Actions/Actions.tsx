import type { PropsWithChildren } from 'react';
import User from './User';
import Settings from './Settings';
import Theme from './Theme';
import './styles.css';

export interface ActionsProps extends PropsWithChildren {}

function Actions({ children }: ActionsProps) {
    return <div className={'AppBar-actions'}>{children}</div>;
}

export default Object.assign(Actions, { Settings: Settings, User: User, Theme: Theme });
