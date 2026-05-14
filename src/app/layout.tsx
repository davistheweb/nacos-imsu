import type { Metadata } from "next";

import { Navbar } from "@/components/navbar";
import { QuickContact } from "@/components/ui/QuickContact";
import { poppinsFont } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Nacos Imsu Chapter",
  description: "Nacos Imsu Chapter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        poppinsFont.className,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="relative flex w-full max-w-506 flex-col items-center justify-center overflow-x-hidden">
        <QuickContact />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
