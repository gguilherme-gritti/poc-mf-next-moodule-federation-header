const { NextFederationPlugin } = require('@module-federation/nextjs-mf');


/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    webpack(config, { isServer }) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'remote',
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    // specify exposed pages and components
                    './Default': './src/app/page.tsx',
                },
                shared: {
                    // specify shared dependencies 
                    // read more in Shared Dependencies section
                },
            })
        );

        return config;
    },
}