import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Action School — Sport Flying Academy in Kerala",
  description: "Kerala's premier sport flying academy. From paramotors to ultra-light aircraft, experience the thrill of flight with world-class safety standards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
