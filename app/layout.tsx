import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riak Mawut | Supply Chain Professional & Web Developer",
  description: "Cybersecurity student at University of Juba. Building secure, responsive websites and web applications. Available for freelance work.",
  keywords: "Riak Mawut, Supply Chain, Cybersecurity, Web Developer, South Sudan, Next.js, React",
  authors: [{ name: "Riak Mawut Angui Atem" }],
  creator: "Riak Mawut Angui Atem",
  openGraph: {
    title: "Riak Mawut - Portfolio",
    description: "Supply Chain Professional & Cybersecurity Student",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

