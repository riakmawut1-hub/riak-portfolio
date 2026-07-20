import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riak Mawut Angui Atem | Software Developer & Cybersecurity Professional in South Sudan",
  description: "Riak Mawut Angui Atem is a professional software developer, web engineer, and cybersecurity specialist based in Juba, South Sudan, building modern web applications with React, Next.js, and secure coding practices.",
  keywords: "Riak Mawut Angui Atem, Software Developer South Sudan, Cybersecurity Professional South Sudan, Web Developer Juba, React Developer South Sudan, Next.js Developer, Full-Stack Engineer South Sudan, Riak Mawut, Supply Chain Professional, Finance Professional, Juba",
  authors: [{ name: "Riak Mawut Angui Atem" }],
  creator: "Riak Mawut Angui Atem",
  publisher: "Riak Mawut Angui Atem",
  metadataBase: new URL('https://riak-portfolio.onrender.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Riak Mawut Angui Atem | Software Developer & Cybersecurity Professional in South Sudan",
    description: "Professional software developer, web engineer, and cybersecurity specialist based in Juba, South Sudan. React, Next.js, and secure coding practices.",
    url: 'https://riak-portfolio.onrender.com',
    siteName: 'Riak Mawut Portfolio',
    type: "website",
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Riak Mawut Angui Atem | Software Developer & Cybersecurity Professional in South Sudan",
    description: "Professional software developer, web engineer, and cybersecurity specialist based in Juba, South Sudan.",
  },
  icons: {
    icon: "/profile-icon.png",
    apple: "/profile-icon.png",
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

