"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./components/nav/TopNav";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { SessionYearProvider } from "@/context/session";

const inter = Inter({ subsets: ["latin"] });

import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
      <SessionYearProvider>
      <body className={inter.className}>
          <TopNav />
          <Toaster />

          {children}
          <Footer />
        </body>
      </SessionYearProvider>
        
      </SessionProvider>
    </html>
  );
}
