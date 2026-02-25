import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LouEnterprises",
  description: "Editorial portfolio showcasing creative work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
