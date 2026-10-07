import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mercy",
  description: "L'assistente interno per il CRM di Mercury ERP.",
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0F172B",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className="dark">
      <body className="min-h-full bg-primary text-foreground">{children}</body>
    </html>
  );
}
