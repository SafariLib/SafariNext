export function middleware() {
    ['DIGITAL_API_URL', 'PUCK_CONFIG_ENDPOINT', 'META_TITLE', 'META_DESC', 'META_URL'].forEach(env => {
        if (!process.env[env] || process.env[env] === '') {
            throw new Error(`Mandatory variable ${env} is not set.`);
        }
    });
}

export const config = {
    matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};
