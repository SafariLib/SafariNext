import './styles.css';
import { EUserRole } from '@/models';
import UserMenu from '@components/AppBar/components/UserMenu';
import SettingsAction from '@components/AppBar/components/SettingsAction';
import type { PropsWithChildren } from 'react';

const fakeUser = {
    id: '1',
    username: 'John Doe',
    email: 'lol',
    role: EUserRole.User,
    isActive: true,
};

function AppBar(props: PropsWithChildren) {
    return <header className="AppBar">{props.children}</header>;
}

function Title() {
    return <div>safaridigital.backoffice.fr</div>;
}

function Actions() {
    return (
        <div className={'AppBar-actions'}>
            <UserMenu {...fakeUser} />
            <SettingsAction />
        </div>
    );
}

export default Object.assign(AppBar, { Title, Actions });
