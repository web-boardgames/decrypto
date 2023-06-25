"use client";

import { UserGuard } from "@/components/common/UserGuard";
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
        <UserGuard>
          <body>{children}</body>
        </UserGuard>
      </RecoilRoot>
    </html>
  );
}
