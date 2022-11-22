/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true
    }

    // ,images: {
    //     loader: 'imgix',
    //     path: '',
    // },
    // exportPathMap: async function (
    //     defaultPathMap,
    //     {dev, dir, outDir, distDir, buildId}
    // ) {
    //     return {
    //         '/': {page: '/'},
    //     }
    // }
};

module.exports = nextConfig;
