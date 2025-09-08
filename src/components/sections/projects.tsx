
"use client";

import { Card, CardContent } from "@/components/ui/card";
// import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Forward } from "lucide-react";

const projects = [
  {
    title: "UI/ UX Designing",
    imageUrl: "./services/1.jpg",
    href: "/services/ui-ux-designing",
    links: [],
  },
  {
    title: "Graphic Designing",
    imageUrl: "./services/2.jpg",
    href: "/services/graphic-designing",
    links: [],
  },
  {
    title: "Web Development",
    imageUrl: "./services/3.jpg",
    href: "/services/web-development",
    links: [],
  },
  {
    title: "Digital Marketing",
    imageUrl: "./services/4.jpg",
    href: "/services/digital-marketing",
    links: [],
  },
  {
    title: "AI Agents",
    imageUrl: "./services/ai.jpg",
    href: "/services/ai-agents",
    links: [],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold font-headline text-foreground">Our{" "}<span className="quantum-italic">Showcase</span></h2>
          <p className="mt-4 text-lg text-muted-foreground">
          We offer a wide range of services to bring your vision to life.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} href={project.href}>
              <Card className="relative overflow-hidden group bg-transparent border-border/50 rounded-[10px]">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <CardContent className="absolute bottom-0 left-0 p-6 ">
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  {project.links.length > 0 && (
                    <div className="mt-4 flex flex-col items-start gap-2">
                      {project.links.map((link, linkIndex) => (
                        <Button key={linkIndex} variant="outline" className="bg-white/90 hover:bg-white text-black text-xs font-semibold" asChild>
                          <Link href="#">
                            {/* @ts-ignore */}
                            {link.icon}
                            {/* @ts-ignore */}
                            {link.text}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
