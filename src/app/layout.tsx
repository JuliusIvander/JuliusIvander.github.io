import type { Metadata } from "next";
import { Bitter, Raleway } from "next/font/google";
import '@/styles/globals.css';

const bitter = Bitter({
  variable: "--font-heading",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  variable: "--font-body",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
        className={`${bitter.variable} ${raleway.variable} antialiased bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
