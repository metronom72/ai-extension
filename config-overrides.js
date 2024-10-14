const { override, addBabelPlugin } = require('customize-cra');
const path = require('path');

module.exports = override(
    addBabelPlugin('babel-plugin-styled-components'),
    (config) => {
        config.entry = {
            main: './src/popup.tsx',
            background: './src/background.ts',
            content: './src/content.tsx',
        };

        config.output = {
            ...config.output,
            filename: 'static/js/[name].js',
        };

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    }
);
