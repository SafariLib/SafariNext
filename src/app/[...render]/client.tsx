'use client';

import  { Render, type Data } from '@measured/puck';
import { config } from '@digital-lib/react-digital-puck/library';

export function Client(props: { data: Data }) {
    return <Render {...props} config={config}/>;
}
