import "@/app/globals.css";
import { Toaster } from "@/components/ui/Toaster";
import { GeistSans } from "geist/font";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Florian Blaschke",
  description: "FullStack WebDevelopment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <main className="pt-20 bg-black min-h-screen min-w-screen">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
