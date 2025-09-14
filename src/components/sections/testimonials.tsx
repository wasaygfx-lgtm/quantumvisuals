
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const testimonials = [
  {
    quote: "Quantum Visuals's blend of flexibility and deep expertise has been invaluable. Their ability to adapt to our evolving needs while delivering exceptional design has made them an essential partner.",
    name: "Annie",
    title: "Creative Lead",
    avatar: "/reviews/annie.jpeg",
  },
  {
    quote: "Quantum Visuals brought our brand vision to life with their exceptional design skills and innovative approach. Their creative solutions helped us stand out in a crowded market.",
    name: "Bella Dorma",
    title: "Brand Strategist",
    avatar: "/reviews/bella dorma.jpeg",
  },
  {
    quote: "Working with Quantum Visuals was a game-changer for our brand. Their design team delivered creative solutions that perfectly captured our vision. 🙌",
    name: "Ben",
    title: "Marketing Director",
    avatar: "/reviews/ben.jpeg",
  },
  {
    quote: "The team at Quantum Visuals consistently exceeded our expectations with high-quality designs and timely delivery. Their work has significantly enhanced our product. 🔥",
    name: "Eden",
    title: "Product Manager",
    avatar: "/reviews/eden.jpeg",
  },
  {
    quote: "The creative designs from Quantum Visuals brought our event to life. Their ability to capture our theme and deliver on time made them a fantastic partner for our project.",
    name: "Evee",
    title: "Event Coordinator",
    avatar: "/reviews/evee.jpeg",
  },
  {
    quote: "Quantum Visuals's designs perfectly captured our brand's essence, reflecting its core values. Their professionalism made the entire process both smooth and enjoyable. ✨",
    name: "Erany",
    title: "Creative Director",
    avatar: "/reviews/erany.jpeg",
  },
  {
    quote: "The team at Quantum Visuals not only met but far exceeded all our expectations with their stunning designs and highly efficient service. Their innovative approach and attention to detail played a crucial role.",
    name: "David Clark",
    title: "Julian",
    avatar: "/reviews/julien.jpeg",
  },
  {
    quote: "Quantum Visuals's innovative design solutions significantly improved our digital campaigns. Their expertise and attention to detail were key to our campaign's success.👏",
    name: "Laura Wilson",
    title: "Zaki",
    avatar: "/reviews/zaki.jpeg",
  },
];

const testimonialsRow1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
const testimonialsRow2 = [...testimonials.slice(4, 8), ...testimonials.slice(4, 8)];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-headline text-foreground">What Our {" "}<span className="quantum-italic">Clients Say</span></h2>
          <p className="mt-4 text-lg text-muted-foreground">We are proud to have worked with amazing clients.</p>
        </div>
      </div>
      {/* Desktop: Scrolling Marquee */}
      <div className="hidden sm:flex mt-16 relative w-full overflow-hidden flex-col gap-8">
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-scroll">
          {testimonialsRow1.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 flex flex-col justify-between p-6 mx-4 w-[350px] shrink-0">
              <CardContent className="p-0 flex-grow">
                <p className="text-foreground/80">{testimonial.quote}</p>
              </CardContent>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border/20">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex animate-scroll-right">
          {testimonialsRow2.map((testimonial, index) => (
             <Card key={index} className="bg-card/50 flex flex-col justify-between p-6 mx-4 w-[350px] shrink-0">
              <CardContent className="p-0 flex-grow">
                <p className="text-foreground/80">{testimonial.quote}</p>
              </CardContent>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border/20">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Mobile: Small Scrolling Animation */}
      <div className="sm:hidden mt-12 relative w-full overflow-hidden flex-col gap-6">
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-scroll">
          {testimonialsRow1.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 flex flex-col justify-between p-4 mx-2 w-[280px] shrink-0">
              <CardContent className="p-0 flex-grow">
                <p className="text-sm text-foreground/80">{testimonial.quote}</p>
              </CardContent>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/20">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex animate-scroll-right mt-6">
          {testimonialsRow2.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 flex flex-col justify-between p-4 mx-2 w-[280px] shrink-0">
              <CardContent className="p-0 flex-grow">
                <p className="text-sm text-foreground/80">{testimonial.quote}</p>
              </CardContent>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/20">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
