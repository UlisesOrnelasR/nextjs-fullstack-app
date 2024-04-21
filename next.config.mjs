/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: [
            {
                hostname: "tailwindui.com",
            },
            {
                hostname: 'images.unsplash.com'
            }
        ],
    },
    // typescript: {
    //     ignoreBuildErrors: true,
    // },
};;

export default nextConfig;
