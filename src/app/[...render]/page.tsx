import { Render, type Data } from '@measured/puck';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DigitalApi } from '../../http';

interface RenderParams {
    params: Promise<{ render: string[] }>;
}

async function getView(params: RenderParams['params']): Promise<Data | undefined> {
    const { render = [] } = await params;
    const path = `${render.join('/')}`;
    const result = await DigitalApi.getView(path);
    return result ? JSON.parse(result) : undefined;
}

export async function generateMetadata({ params }: RenderParams): Promise<Metadata> {
    const data = await getView(params);
    return { title: data?.root?.props?.title };
}

export default async function Page({ params }: RenderParams) {
    const data = await getView(params);
    const config = await DigitalApi.getViewConfig();
    return data && config ? <Render data={data} config={config} /> : notFound();
}

export const dynamic = 'force-static';
