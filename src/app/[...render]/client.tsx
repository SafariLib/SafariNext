'use client';

import type { Data } from '@measured/puck';
import { Render } from '@measured/puck';

export function Client({ config, ...props }: { data: Data, config: string }) {
    return <Render {...props} config={eval(config)} />;
}
