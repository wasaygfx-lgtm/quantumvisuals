
"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const handleScrollToServices = (
  e: React.MouseEvent<HTMLButtonElement>
) => {
  e.preventDefault();
  document
    .querySelector("#services")
    ?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        src="./videos/final.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* 🔹 Foreground Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-headline tracking-tight text-white">
              Elevate Your Brand With<br/>
              <span className="quantum-italic">Quantum Visuals Services</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              We create stunning visuals and seamless web experiences that
              captivate your audience.
            </p>
            <div className="mt-10 flex justify-center items-center">
              <Button
                className="shiny-button px-8 py-6 text-lg"
                onClick={handleScrollToServices}
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent backdrop-blur-sm" />
    </section>
  );
};

export default Hero;
