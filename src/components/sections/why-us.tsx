import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, ShieldCheck, Rocket, Users } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-10 h-10 text-foreground" />,
    title: 'Client-Centric Approach',
    description: 'We prioritize your needs and goals, ensuring that our solutions are perfectly aligned with your vision and objectives.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-foreground" />,
    title: 'Uncompromising Quality',
    description: 'Our commitment to excellence means we deliver reliable, high-performance applications that you can depend on.',
  },
  {
    icon: <Rocket className="w-10 h-10 text-foreground" />,
    title: 'Innovative Solutions',
    description: 'We leverage the latest technologies to create cutting-edge web applications that give you a competitive edge.',
  },
  {
    icon: <Users className="w-10 h-10 text-foreground" />,
    title: 'Collaborative Partnership',
    description: 'We believe in building strong, long-term relationships, working with you as a true partner in your success.',
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-headline text-foreground">Why Choose{" "}<span className="quantum-italic">Quantum Visuals?</span></h2>
          <p className="mt-4 text-lg text-muted-foreground">We are more than just a software house. We are your dedicated partners in innovation.</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{'--index': index} as React.CSSProperties}>
              <Card className="h-full text-center bg-card/50 hover:bg-card/80 hover:scale-105 transition-all duration-300">
                <CardHeader className="items-center">
                  <div className="p-4 bg-background rounded-full">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-headline pt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
