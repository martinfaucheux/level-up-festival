import type { Metadata } from "next";
import { Providers } from './providers'

export const metadata: Metadata = {
  title: "Level Up Festival",
  description: "Votre plus grand festival pour 2025 !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>);
}
