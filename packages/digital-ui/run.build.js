import { Process } from '@digital/common';

(async () => {
    try {
        console.log('Compiling TypeScript...');
        await Process.exec('tsc --project tsconfig.json');
        console.log('Running Vite build...');
        await Process.exec('vite build');
        console.log('Copying stylesheets...');
        Process.copyFiles('./stylesheets', './dist');
        console.log('Done!');
    } catch (error) {
        console.error('Build process failed:', error);
    }
})();
