import { Geist, Geist_Mono } from "next/font/google";
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
  title: "BackendRescue — Backend Refactoring & Debugging",
  description:
    "BackendRescue helps teams untangle complex backend systems, reduce technical debt, and stabilize fragile codebases.",
  metadataBase: new URL("https://backendrescue.dev"),

  openGraph: {
    title: "BackendRescue — Backend Refactoring & Debugging",
    description:
      "Helping teams clean up complex backend systems and make them reliable again.",
    url: "https://backendrescue.dev",
    siteName: "BackendRescue",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BackendRescue",
    description:
      "Backend refactoring, debugging, and system stabilization.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}