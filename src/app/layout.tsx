export const metadata = {
  title: "decrypto",
  description: "boardgame decrypto in web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
