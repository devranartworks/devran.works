module.exports = {
    reactStrictMode: false,
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                    {
                        key: "Set-Cookie",
                        value: "name=value; SameSite=None; Secure",
                    },
                    {
                        key: "Content-Security-Policy",
                        value: "default-src 'self'; img-src 'self' data: https:; media-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline'; connect-src 'self' wss://localhost https:; frame-src 'self' https://www.google.com https://www.googletagmanager.com https://td.doubleclick.net; frame-ancestors 'none';"
                    },
                    {
                        key: "Permissions-Policy",
                        value: ""
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "X-Powered-By",
                        value: "yilmazev.dev"
                    },
                ],
            },
            {
                source: "/_next/static/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable"
                    }
                ]
            }
        ]
    }
}