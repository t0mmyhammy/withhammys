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
        <style>{`
          @font-face {
            font-family: 'DM Sans';
            src: url('/fonts/DMSans-Regular.woff2') format('woff2');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'DM Sans';
            src: url('/fonts/DMSans-Italic.woff2') format('woff2');
            font-weight: 400;
            font-style: italic;
            font-display: swap;
          }
          @font-face {
            font-family: 'Discount Black';
            src: url('/fonts/Discount-Black.otf') format('opentype');
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Discount Heavy';
            src: url('/fonts/Discount-Heavy.otf') format('opentype');
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Discount Bold Slant';
            src: url('/fonts/Discount-BoldSlant.otf') format('opentype');
            font-weight: 700;
            font-style: italic;
            font-display: swap;
          }
          @font-face {
            font-family: 'Discount Medium';
            src: url('/fonts/Discount-Medium.otf') format('opentype');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Discount Regular Slant';
            src: url('/fonts/Discount-RegularSlant.otf') format('opentype');
            font-weight: 400;
            font-style: italic;
            font-display: swap;
          }
          @font-face {
            font-family: 'Discount Light';
            src: url('/fonts/Discount-Light.otf') format('opentype');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
          :root {
            --background: 0 0% 100%;
            --foreground: 0 0% 3.9%;
          }
          body {
            font-family: 'DM Sans', Arial, Helvetica, sans-serif;
            font-weight: 400;
            font-style: normal;
            background: hsl(var(--background));
            color: hsl(var(--foreground));
          }
          h1 {
            font-family: 'Discount Heavy', sans-serif;
            font-weight: 900;
            font-style: normal;
          }
          h2 {
            font-family: 'Discount Bold Slant', sans-serif;
            font-weight: 700;
            font-style: italic;
          }
          h3, .nav-menu {
            font-family: 'Discount Medium', sans-serif;
            font-weight: 500;
            font-style: normal;
          }
          h4, .quote, .pullout {
            font-family: 'Discount Regular Slant', sans-serif;
            font-weight: 400;
            font-style: italic;
          }
          h5, .meta, .caption {
            font-family: 'Discount Light', sans-serif;
            font-weight: 300;
            font-style: normal;
          }
        `}</style>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="preload" href="/logos/hammys-primary-logo.svg" as="image" />
        {/* Gotham font link commented out; Gotham is no longer used in the codebase. */}
        {/* <link href="https://fonts.cdnfonts.com/css/gotham" rel="stylesheet" /> */}
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            var isOldIE = /*@cc_on!@*/false || !!document.documentMode;
            var isOldEdge = /Edge\/[0-9]{1,2}\./.test(navigator.userAgent);
            if (isOldIE || isOldEdge) {
              var div = document.createElement('div');
              div.style.position = 'fixed';
              div.style.top = 0;
              div.style.left = 0;
              div.style.width = '100vw';
              div.style.height = '100vh';
              div.style.background = '#fff';
              div.style.color = '#032b53';
              div.style.zIndex = 99999;
              div.style.display = 'flex';
              div.style.flexDirection = 'column';
              div.style.justifyContent = 'center';
              div.style.alignItems = 'center';
              div.style.fontSize = '1.5rem';
              div.innerHTML = '<b>Your browser is not supported.</b><br/>Please use a modern browser like Chrome, Firefox, Safari, or Edge.';
              document.body.appendChild(div);
            }
          })();
        `}} />
      </head>
      <body className={inter.className} style={{ fontFamily: "DM Sans, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
