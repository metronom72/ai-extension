const {override, addBabelPlugin} = require('customize-cra');

module.exports = override(
    addBabelPlugin('babel-plugin-styled-components'),
    (config) => {
        config.mode = 'development'
        config.entry = {
            main: './src/popup.tsx',
            background: './src/background.ts',
            content: './src/content.tsx',
        };

        config.output = {
            ...config.output,
            filename: 'static/js/[name].js',
        };

        config.optimization = {
            ...config.optimization,
            minimize: false,
            minimizer: []
        }

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    }
);

