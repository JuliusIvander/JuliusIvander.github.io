import type { Metadata } from "next";
import {BITTER_FONT, RALEWAY_FONT} from '@/styles/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: "Julius's Portofolio",
  description: "Hi! Welcome to my portofolio sites!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${BITTER_FONT.variable} ${RALEWAY_FONT.variable} 
          antialiased bg-primary 
          container mx-auto px-8 md:px-32
        `}
      >
        {children}
      </body>
    </html>
  );
}
