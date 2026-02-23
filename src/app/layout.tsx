import type { Metadata } from "next";
import { Quicksand } from "next/font/google"; 
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand", 
});

export const metadata: Metadata = {
  title: "Salwa | Portfolio",
  description:
    "Computer Science Graduate from Universitas Negeri Jakarta | Frontend Developer & Data Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} antialiased`}>{children}</body>
    </html>
  );
}
