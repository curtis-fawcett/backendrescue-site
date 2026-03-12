import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://backendrescue.dev"),

  title: {
    default: "BackendRescue — Backend Refactoring & Debugging",
    template: "%s | BackendRescue",
  },

  description:
    "BackendRescue helps teams untangle complex backend systems, reduce technical debt, and stabilize fragile codebases. Specializing in backend refactoring, debugging, and system reliability.",

  openGraph: {
    title: "BackendRescue — Backend Refactoring & Debugging",
    description:
      "BackendRescue helps teams clean up complex backend systems and make them easier to maintain, debug, and scale.",
    url: "/",
    siteName: "BackendRescue",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BackendRescue social preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BackendRescue — Backend Refactoring & Debugging",
    description:
      "Backend refactoring, debugging, and system stabilization.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}