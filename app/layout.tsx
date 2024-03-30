import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/notion.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lập trình Python - BoringPpl by Daphne",
  description: "Chương trình học Lập trình Python và Ứng dụng xử lý dữ liệu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5633074621800077"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
