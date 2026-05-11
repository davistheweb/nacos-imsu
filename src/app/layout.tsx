import type { Metadata } from "next";

import { Navbar } from "@/components/navbar";
import { QuickContact } from "@/components/ui/QuickContact";
import { poppinsFont } from "@/lib/font";
import "./globals.css";

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
      className={`${poppinsFont.className} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col">
        <QuickContact />
        <Navbar />
        {
         children
        }
      </body>
    </html>
  );
}
