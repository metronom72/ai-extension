const { override, addBabelPlugin } = require('customize-cra');
const webpack = require('webpack'); // Import webpack
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

        // Force development mode and environment
        config.mode = 'development';
        config.optimization = {
            ...config.optimization,
            minimize: false,
        };
        config.devtool = 'cheap-module-source-map';

        // Set NODE_ENV to 'development' explicitly for React
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development'),
            })
        );

        // Remove TerserPlugin if present
        if (config.optimization && config.optimization.minimizer) {
            config.optimization.minimizer = config.optimization.minimizer.filter(
                (plugin) => plugin.constructor.name !== 'TerserPlugin'
            );
        }

        return config;
    }
);
