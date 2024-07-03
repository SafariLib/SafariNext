export default {
    stories: ['../src/**/story.@(tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
};
