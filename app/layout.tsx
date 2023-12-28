import localFont from "next/font/local"
import "./styles/globals.css"

const appleColorEmoji = localFont({
    src: [
        {
            path: "./assets/fonts/apple-color-emoji/5ab304ade0d4f62d027d12464ca69443.ttf",
            weight: "normal",
            style: "normal",
        },
        {
            path: "./assets/fonts/apple-color-emoji/5ab304ade0d4f62d027d12464ca69443.woff",
            weight: "normal",
            style: "normal",
        },
        {
            path: "./assets/fonts/apple-color-emoji/5ab304ade0d4f62d027d12464ca69443.woff2",
            weight: "normal",
            style: "normal",
        }
    ],
    variable: "--font-apple-color-emoji",
    display: "swap"
})

const sfPro = localFont({
    src: [
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-LightItalic.otf",
            weight: "300",
            style: "italic",
        },
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-RegularItalic.otf",
            weight: "400",
            style: "italic",
        },
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-MediumItalic.otf",
            weight: "500",
            style: "italic",
        },
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./assets/fonts/sf-pro/SF-Pro-Display-SemiboldItalic.otf",
            weight: "700",
            style: "italic",
        }
    ],
    variable: "--font-sf-pro",
    display: "swap"
})

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="tr">
            <body className={`${sfPro.className} ${appleColorEmoji.variable}`}>{children}</body>
        </html>
    )
}
