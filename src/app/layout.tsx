"use client";

import "@/styles/normalize.css";
import localFont from "next/font/local";
import { RecoilRoot } from "recoil";

const neodgm = localFont({
  src: "./neodgm.woff2",
  fallback: ["sans-serif"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={neodgm.className}>
      <RecoilRoot>
        <body>{children}</body>
      </RecoilRoot>
    </html>
  );
}
