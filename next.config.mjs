/** @type {import('next').NextConfig} */

['DIGITAL_API_URL', 'PUCK_CONFIG_ENDPOINT'].forEach(env => {
    if (!process.env[env] || process.env[env] === '') {
        throw new Error(`Mandatory variable ${env} is not set.`);
    }
});

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
