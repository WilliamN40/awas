/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            }
        ]
    },
    experimental: {
        esmExternals: "loose",
        serverComponentsExternalPackages: ["mongoose"]
    },
    webpack: (config) => {
        config.experiments = {
            layers: true,
            topLevelAwait: true
        };
        return config;
    },
}

export default nextConfig;
