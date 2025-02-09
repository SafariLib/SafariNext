/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'standalone',
    webpack: config => {
        config.module.rules.push({
            test: /packages\\digital-lib\\packages\/.*/,
            loader: 'ignore-loader',
        });
        return config;
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        // TODO: find a way to ignore specific folders
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
