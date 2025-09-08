"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Why Us', href: '#why-us' },
  { name: 'Services', href: '/services' },
  // { name: 'Projects', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      setIsOpen(false);
      // For page navigations, let Next.js handle it.
      return;
    }
    e.preventDefault();
    // For anchor links, we need to be on the home page.
    if (window.location.pathname !== '/') {
      window.location.href = `/${href}`;
      setIsOpen(false);
      return;
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className="absolute top-0 z-50 w-full bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline italic text-primary">
              <img
                src="/images/QV Logo-02.png"
                alt="Quantum Visuals Logo"
                className="w-24"
              />
            </Link>
            
            <div className="flex items-center">
              <nav className="hidden md:flex items-center space-x-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="px-4 py-2 text-white/80 hover:text-primary transition-colors duration-300 font-medium rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
                  <Menu className="h-6 w-6 text-white" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/80 backdrop-blur-lg md:hidden transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between h-20">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-2xl font-bold font-headline italic text-primary">
              <img
                src="/images/QV Logo-02.png"
                alt="Quantum Visuals Logo"
                className="w-24"
              />
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6 text-white" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex-grow flex flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-3xl font-semibold text-white/90 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}