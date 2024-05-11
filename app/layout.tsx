import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next"
import localFont from "next/font/local"
import "./styles/globals.css"

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

export const metadata: Metadata = {
    title: "Devran Düzgün | Designer",
    description: "I am 20 years old and reside in Istanbul. I have accumulated extensive experience in graphic design and advertising, particularly focusing on UI & UX, over a considerable period. Throughout my career, I have provided my services to numerous companies and individuals in this field.",
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={sfPro.className}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
