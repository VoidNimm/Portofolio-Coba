import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SkipToContent } from "@/components/skip-to-content";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jules - Creative Developer & Designer",
  description: "Personal portfolio of Jules, a creative developer and designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SkipToContent />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
