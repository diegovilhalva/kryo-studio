import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const font = Rubik({
  weight:["300","400","500","600","700","800","900"],
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Kryo Studio | High-Performance Digital Agency",
  description:
    "Kryo Studio is a modern digital agency focused on building fast, scalable, and conversion-driven websites using cutting-edge web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
