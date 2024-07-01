/// <reference types="vitest" />
import { resolve } from 'path';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        dts({
            rollupTypes: true,
            insertTypesEntry: true,
        }),
        preserveDirectives(),
    ],
    build: {
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                preserveModules: true,
            },
        },
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: '@safari-next/ui',
            formats: ['es'],
            fileName: format => `index.${format}.js`,
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
    },
});
