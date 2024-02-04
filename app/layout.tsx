import type { Metadata } from "next";
import { Inter, Lato, Lora } from "next/font/google";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] }); // Adjust weights as needed

export const metadata: Metadata = {
  title: "PortFolio",
  description: "Hi, Im Shawn Savage. Come get to know me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} `}>{children}</body>
    </html>
  );
}
