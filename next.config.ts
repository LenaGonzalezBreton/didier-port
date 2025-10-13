import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',                 // génère /out pour self-host
    images: { unoptimized: true },    // <Image/> sans serveur d’optimisation
    trailingSlash: true,
}

export default nextConfig
