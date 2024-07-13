'use client';

import './styles.css';

interface DrawerBackgroundProps {
    open: boolean;
    onClose: () => void;
}

export default function DrawerBackground(props: DrawerBackgroundProps) {
    return props.open ? <div className="Drawer-background" onClick={props.onClose} /> : null;
}
