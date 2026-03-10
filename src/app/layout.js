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
    "BackendRescue helps teams untangle complex backend systems, reduce technical debt, and stabilize fragile codebases.",
  keywords: [
    "backend developer",
    "backend refactoring",
    "backend debugging",
    "technical debt",
    "node.js developer",
    "next.js developer",
    "api debugging",
    "system stabilization",
  ],
  applicationName: "BackendRescue",
  authors: [{ name: "Curtis Fawcett" }],
  creator: "Curtis Fawcett",
  publisher: "BackendRescue",
  alternates: {
    canonical: "https://backendrescue.dev",
  },
  openGraph: {
    title: "BackendRescue — Backend Refactoring & Debugging",
    description:
      "Helping teams clean up complex backend systems and make them reliable again.",
    url: "https://backendrescue.dev",
    siteName: "BackendRescue",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BackendRescue — Backend Refactoring & Debugging",
    description:
      "Backend refactoring, debugging, and system stabilization.",
  },
  icons: {
    icon: "/favicon.ico",
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