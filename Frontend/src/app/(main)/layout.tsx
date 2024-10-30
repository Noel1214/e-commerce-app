import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SlideBar from "@/components/SlideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce-app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex">
          <div className="fixed">
            <SlideBar />
          </div>
          <div className="ml-[5rem] p-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
