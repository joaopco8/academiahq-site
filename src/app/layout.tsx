import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Academia HQ",
  description: "Academia de Quadrinhos e Ilustração",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground relative`}>
        {/* Background com tons azuis */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-70 z-0"
          style={{
            background: "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 70%), radial-gradient(circle at 80% 60%, rgba(29, 78, 216, 0.1) 0%, transparent 60%), radial-gradient(circle at 50% 80%, rgba(37, 99, 235, 0.12) 0%, transparent 50%)",
          }}
        ></div>
        
        <div className="flex flex-col min-h-screen relative z-10">
          <Navbar />
          <div className="flex-grow pt-16">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
