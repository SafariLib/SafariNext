import { type Metadata } from 'next';
import { Data } from '@measured/puck';
import { Client } from './client';
import { notFound } from 'next/navigation';
import { DigitalApiClient } from '../../modules';

interface RenderParams {
    params: Promise<{ render: string[] }>;
}

async function getView(params: RenderParams['params']): Promise<Data | undefined> {
    const { render = [] } = await params;
    const path = `${render.join('/')}`;
    const result = await DigitalApiClient.getView(path);
    return result ? JSON.parse(result) : undefined;
}

export async function generateMetadata({ params }: RenderParams): Promise<Metadata> {
    const data = await getView(params);
    return { title: data?.root?.props?.title };
}

export default async function Page({ params }: RenderParams) {
    const data = await getView(params);
    const config = await DigitalApiClient.getRawConfig();
    console.log(data, config);
    return (data && config) ? <Client data={data} config={config} /> : notFound();
}

// Force Next.js to produce static pages: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// Delete this if you need dynamic rendering, such as access to headers or cookies
export const dynamic = 'force-static';