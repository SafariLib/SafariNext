import { copyFiles, execCommand } from '@digital/common';

(async () => {
    try {
        console.log('Compiling TypeScript...');
        await execCommand('tsc --project tsconfig.json');
        console.log('Running Vite build...');
        await execCommand('vite build');
        console.log('Copying stylesheets...');
        copyFiles('./stylesheets', './dist');
        console.log('Done!');
    } catch (error) {
        console.error('Build process failed:', error);
    }
})();
