
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '@/components/layout/header';
import Starfield from '@/components/ui/starfield';
import { ArrowRight, Bot, Code, Megaphone, Palette, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, Facebook, Linkedin } from 'lucide-react';
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    fill="currentColor"
    {...props}
  >
      <path d="M20.317 4.3698C18.882 3.6538 17.349 3.1258 15.727 2.8228C15.428 3.2458 15.154 3.7388 14.945 4.2838C13.259 3.9938 11.536 3.9938 9.851 4.2838C9.642 3.7388 9.368 3.2458 9.069 2.8228C7.447 3.1258 5.914 3.6538 4.479 4.3698C1.657 8.2488 0.813 12.2888 1.225 16.2418C2.943 17.6338 4.78 18.6708 6.634 19.3498C7.086 18.7818 7.495 18.1698 7.848 17.5148C7.213 17.1598 6.602 16.7628 6.033 16.3328C6.142 16.2418 6.25 16.1498 6.357 16.0528C9.444 17.6338 12.986 17.6338 16.051 16.0528C16.158 16.1498 16.266 16.2418 16.375 16.3328C15.806 16.7628 15.195 17.1598 14.56 17.5148C14.913 18.1698 15.322 18.7818 15.774 19.3498C17.628 18.6708 19.466 17.6338 21.184 16.2418C21.733 11.3728 20.317 7.4588 20.317 4.3698ZM8.02 13.9878C7.031 13.9878 6.223 13.1598 6.223 12.1488C6.223 11.1378 7.017 10.3098 8.02 10.3098C9.023 10.3098 9.831 11.1378 9.817 12.1488C9.817 13.1598 9.023 13.9878 8.02 13.9878ZM14.399 13.9878C13.41 13.9878 12.602 13.1598 12.602 12.1488C12.602 11.1378 13.396 10.3098 14.399 10.3098C15.402 10.3098 16.21 11.1378 16.196 12.1488C16.196 13.1598 15.402 13.9878 14.399 13.9878Z"/>
  </svg>
);
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const services = [
  {
    icon: <PenTool className="w-8 h-8 text-white" />,
    title: "UI/UX Design",
    description: "Crafting intuitive and beautiful user interfaces.",
    imageUrl: "/services/1.jpg",
    imageAlt: "UI/UX Design",
    href: "/services/ui-ux-designing",
  },
  {
    icon: <Palette className="w-8 h-8 text-white" />,
    title: "Graphic Designing",
    description: "Creating stunning visuals that communicate your brand's message.",
    imageUrl: "/services/2.jpg",
    imageAlt: "Graphic Designing",
    href: "/services/graphic-designing",
  },
  {
    icon: <Code className="w-8 h-8 text-white" />,
    title: "Web Development",
    description: "Building fast, scalable, and secure web applications.",
    imageUrl: "/services/3.jpg",
    imageAlt: "Web Development",
    href: "/services/web-development",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-white" />,
    title: "Digital Marketing",
    description: "Helping you reach your target audience and grow your business.",
    imageUrl: "/services/4.jpg",
    imageAlt: "Digital Marketing",
    href: "/services/digital-marketing",
  },
  {
    icon: <Bot className="w-8 h-8 text-white" />,
    title: "AI Agents",
    description: "Intelligent automation solutions that work around the clock.",
    imageUrl: "/services/ai.jpg",
    imageAlt: "AI Agents",
    href: "/services/ai-agents",
  },
];


export default function ServicesPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Starfield />
      <video
        className="fixed inset-0 w-full h-full object-cover z-[-1]"
        src="/videos/final.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative flex-grow flex flex-col">
        <Header />
        
        <main className="relative z-10 py-20 sm:py-32 flex-grow">
          <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold font-headline text-foreground">
                Creativity that
                <br />
                <span className="quantum-italic text-foreground">Converts Marketing</span>
              </h1>
            </div>
            
            <div className="space-y-8">
              {services.map((service, index) => (
                <Link key={index} href={service.href} className="group/service block">
                  {/* Mobile Layout */}
                  <div className="md:hidden w-full">
                      <Card className="relative overflow-hidden group bg-black/30 backdrop-blur-sm border-primary/30 rounded-2xl shadow-lg shadow-primary/20 transition-all duration-300 group-hover/service:shadow-primary/40 group-hover/service:border-primary/50 group-hover/service:scale-105">
                        <img
                          src={service.imageUrl}
                          alt={service.imageAlt}
                          data-ai-hint="abstract technology"
                          className="w-full h-40 object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: 'linear-gradient(to top, hsla(var(--background), 1) 0%, transparent 70%)',
                          }}
                        />
                        <CardHeader className="absolute bottom-0 left-0 w-full p-4">
                          <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                          <p className="text-sm text-muted-foreground pt-1">{service.description}</p>
                        </CardHeader>
                      </Card>
                    </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center gap-8 group-hover/service:bg-black/20 p-4 rounded-2xl transition-colors duration-300">
                    <img
                        src={service.imageUrl}
                        alt={service.imageAlt}
                        data-ai-hint="abstract technology"
                        className="rounded-2xl shadow-lg shadow-primary/20 w-1/4 h-full object-cover transition-transform duration-300 group-hover/service:scale-105"
                    />
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-background border-2 border-primary flex items-center justify-center transition-all duration-300 group-hover/service:scale-110 group-hover/service:shadow-[0_0_25px_hsl(var(--primary))]" style={{ boxShadow: '0 0 15px hsl(var(--primary))'}}>
                      {service.icon}
                    </div>
                    <div className="flex-grow">
                      <Card className="relative h-full overflow-hidden group bg-transparent border-none shadow-none">
                        <CardHeader className="p-0">
                            <CardTitle className="text-2xl font-bold text-white">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 pt-2">
                            <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
      <section>
       <footer className="relative flex items-end justify-center min-h-screen pb-8 pt-16" >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end h-full">
        <div className="flex-grow flex items-center justify-center text-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="mt-5">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline text-foreground mb-4">
                Unlock Your Brand’s Full Potential With 
                <span className="quantum-italic">{" "}Quantum Visuals</span>
              </h2>
              <p className="mt-3 mb-8 text-lg text-muted-foreground max-w-3xl mx-auto">
                  Ready to elevate your brand?
              </p>
              <div className="mt-8 mb-12">
                <div className="mt-8 mb-12">
                  <Link href="/contact">
                    <Button className="shiny-button px-8 py-6 text-lg">
                      Hire Us
                    </Button>
                  </Link>
                </div>
              </div>


              <div className="flex justify-center items-center gap-4 hidden md:flex">
                <Button variant="ghost" size="icon" className="bg-transparent hover:bg-transparent rounded-full" asChild>
                  <Link href="#" aria-label="Instagram">
                    <Instagram className="h-6 w-6 text-foreground transition-colors hover:text-primary" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="bg-transparent hover:bg-transparent rounded-full" asChild>
                  <Link href="#" aria-label="Facebook">
                    <Facebook className="h-6 w-6 text-foreground transition-colors hover:text-primary" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="bg-transparent hover:bg-transparent rounded-full" asChild>
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6 text-foreground transition-colors hover:text-primary" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="bg-transparent hover:bg-transparent rounded-full" asChild>
                  <Link href="#" aria-label="X">
                    <XIcon className="h-6 w-6 text-foreground transition-colors hover:text-primary" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="bg-transparent hover:bg-transparent rounded-full" asChild>
                  <Link href="#" aria-label="Discord">
                    <DiscordIcon className="h-6 w-6 text-foreground transition-colors hover:text-primary" />
                  </Link>
                </Button>
              </div>
            </div>
        </div>
        <div className="w-full flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col gap-4">
            <Link href="/" className="self-start">
              <img
                src="/images/QV Logo-01.png"
                alt="Quantum Visuals Logo"
                className="w-35 h-10"
              />
            </Link>
            
            <div className="md:hidden">
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="bg-transparent hover:bg-transparent rounded-full p-2" asChild>
                  <Link href="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5 text-white/60 transition-colors hover:text-primary" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="bg-transparent hover:bg-transparent rounded-full p-2" asChild>
                  <Link href="#" aria-label="X">
                    <XIcon className="h-5 w-5 text-white/60 transition-colors hover:text-primary" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="bg-transparent hover:bg-transparent rounded-full p-2" asChild>
                  <Link href="#" aria-label="Instagram">
                    <Instagram className="h-5 w-5 text-white/60 transition-colors hover:text-primary" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="bg-transparent hover:bg-transparent rounded-full p-2" asChild>
                  <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-white/60 transition-colors hover:text-primary" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="bg-transparent hover:bg-transparent rounded-full p-2" asChild>
                  <Link href="#" aria-label="Discord">
                    <DiscordIcon className="h-5 w-5 text-white/60 transition-colors hover:text-primary" />
                  </Link>
                </Button>
              </div>
              <hr className="border-white/20 mt-4" />
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-4">
            <div className="flex flex-col gap-3 text-sm text-white/60 md:flex-row md:gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link href="/refund" className="hover:text-primary transition-colors">Refund Policy</Link>
            </div>
            
            <p className="text-sm text-white/60 md:text-right">
              &copy; Copyright {new Date().getFullYear()-1} - {new Date().getFullYear() } Quantum Visuals. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
      </section>
    </div>
    
)}

    