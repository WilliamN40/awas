import type { Metadata } from "next";

import "@/styles/globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "AWAS",
  description: "Anti-Kejahatan dan Waspada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
