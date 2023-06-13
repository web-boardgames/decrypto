import "@/styles/normalize.css";
import localFont from "next/font/local";

export const metadata = {
  title: "decrypto",
  description: "boardgame decrypto in web",
};

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
      <body>{children}</body>
    </html>
  );
}
