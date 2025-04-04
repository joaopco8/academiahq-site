'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/cursos', label: 'Cursos' },
  { href: '/atendimentos', label: 'Atendimentos' },
  { href: '/loja', label: 'Loja' },
  { href: '/agenda', label: 'Agenda' },
];

// URL do WhatsApp
const whatsappUrl = 'https://api.whatsapp.com/send/?phone=5514998525760&text=Ol%C3%A1%2C+gostaria+de+esclarecer+uma+d%C3%BAvida+sobre+a+Academia+HQ&type=phone_number&app_absent=0';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Detectar scroll para ajustar a opacidade do menu
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const textClass = cn(
    "text-foreground hover:text-primary transition-colors duration-200 font-medium",
    !scrolled && "text-shadow-sm"
  );
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/70 backdrop-blur-md border-slate-800/30' 
          : 'bg-transparent backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/logo.png" 
                  alt="Academia HQ Logo" 
                  width={190} 
                  height={40} 
                  className="h-8 w-auto"
                  priority
                />
              </Link>
            </div>
          </div>
          
          {/* Menu para desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={textClass}
              >
                {link.label}
              </Link>
            ))}
            {/* Link de Contato separado direcionado para WhatsApp */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={textClass}
            >
              Contato
            </a>
          </nav>
          
          {/* Menu para mobile */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] backdrop-blur-xl bg-slate-900/80 border-slate-800/50">
                <div className="mb-8 flex justify-center">
                  <Image 
                    src="/images/logo.png" 
                    alt="Academia HQ Logo" 
                    width={190}
                    height={40}
                    className="h-auto w-auto max-h-10" 
                  />
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-foreground hover:text-primary transition-colors duration-200 py-2 px-4 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  {/* Link de Contato separado direcionado para WhatsApp */}
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors duration-200 py-2 px-4 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Contato
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
} 