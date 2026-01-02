import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riak Mawut Angui Atem | Supply Chain Professional & Web Developer",
  description: "Riak Mawut Angui Atem - Supply Chain & Administration Officer with 5+ years experience. Cybersecurity student at University of Juba. Freelance web developer specializing in Next.js, React, and MongoDB. Based in Juba, South Sudan.",
  keywords: "Riak Mawut Angui Atem, Riak Mawut, Supply Chain Professional, Cybersecurity Student, Web Developer, South Sudan, Juba, Next.js, React, MongoDB, Freelance Developer, Supply Chain Officer, Administration Officer",
  authors: [{ name: "Riak Mawut Angui Atem" }],
  creator: "Riak Mawut Angui Atem",
  publisher: "Riak Mawut Angui Atem",
  metadataBase: new URL('https://riak-portfolio.onrender.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Riak Mawut Angui Atem - Portfolio",
    description: "Supply Chain & Administration Professional | Cybersecurity Student | Web Developer",
    url: 'https://riak-portfolio.onrender.com',
    siteName: 'Riak Mawut Portfolio',
    type: "website",
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Riak Mawut Angui Atem - Portfolio",
    description: "Supply Chain Professional & Cybersecurity Student | Web Developer",
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

