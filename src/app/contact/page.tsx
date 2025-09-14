
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone } from 'lucide-react';
import Header from '@/components/layout/header';
import Starfield from '@/components/ui/starfield';

export default function ContactPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Starfield />
      <div className="relative flex-grow">
        <video
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          src="/videos/final.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        
        <Header />
        
        <main className="relative z-10 flex items-center justify-center min-h-screen">
          <section className="py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl font-bold font-headline text-foreground">
                  Get In Touch<br/><span className="quantum-italic">Contact Us</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  We'd love to hear from you.
                </p>
              </div>
              <div className="mt-16 flex justify-center">
                <div className="bg-black/20 p-8 rounded-lg space-y-8 text-center">
                  <div>
                    <h2 className="text-2xl font-bold font-headline">Get in Touch</h2>
                    <p className="mt-2 text-muted-foreground">
                      Have a project in mind? Reach out to us.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-4">
                        <Phone className="w-6 h-6 text-primary" />
                        <a href="tel:+923101108202" className="text-lg hover:text-primary transition-colors">
                          +92 310 1108202
                        </a>
                      </div>
                      <div className="flex items-center justify-center gap-4">
                        <Phone className="w-6 h-6 text-primary" />
                        <a href="tel:+923132943460" className="text-lg hover:text-primary transition-colors">
                          +92 313 2943460
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <Mail className="w-6 h-6 text-primary" />
                      <a href="mailto:quantumtechnology00@gmail.com" className="text-lg hover:text-primary transition-colors">
                      quantumtechnology00@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
    </div>
  );
}
