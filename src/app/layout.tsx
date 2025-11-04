import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from 'next/script';

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Academia HQ",
  description: "Academia de Harmonização Quântica - Tecnologia Espiritual e Conexão Astral",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      {/* Meta Pixel Code */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1227385201728303');
          fbq('track', 'PageView');
        `}
      </Script>
      {/* End Meta Pixel Code */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground relative`}>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1227385201728303&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
