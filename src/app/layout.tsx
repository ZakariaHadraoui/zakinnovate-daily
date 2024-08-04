import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import { Providers } from "@/components/providers";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zakinnovate daily",
  description: "read and explore dev blog posts written by zakaria hadraoui",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={'dark:bg-[#020817] max-w-7xl mx-auto'}>
        <Providers>
        <Navbar/>

            {children}
            <Footer/>
        </Providers>
      </body>
    </html>
  );
}
