/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // fix shiki can't be resolved
        serverComponentsExternalPackages: ["vscode-oniguruma", "shiki"],
    },
};

module.exports = nextConfig;
