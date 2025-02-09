/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'standalone',
    env: {
        DIGITAL_API_URL: process.env.DIGITAL_API_URL,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /packages\\digital-lib\\packages\/.*/,
            loader: 'ignore-loader',
        });
        return config;
    }
};

export default nextConfig;
