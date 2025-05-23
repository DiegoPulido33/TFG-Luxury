import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientThemeProvider from "@/components/ClientThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxury Motors",
  description: "Luxury Motors - Tu concesionario de coches de lujo",
  keywords:
    "coches de lujo, concesionario, coches deportivos, coches de alta gama",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientThemeProvider>
          <div className="flex min-h-screen flex-col">{children}</div>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
