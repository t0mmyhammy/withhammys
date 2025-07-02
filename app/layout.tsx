import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hammy's - We handle your home so you don't have to",
  description: "Premium home management services for Metro Detroit homeowners",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/gotham" rel="stylesheet" />
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="preload" href="/logos/hammys-primary-logo.svg" as="image" />
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className} style={{ fontFamily: "DM Sans, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
