import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    imageUrl: './projects/kamran.jpg',
    title: 'Kamran Academy',
    description: 'Collaborated with us for great designing services',
  },
  {
    imageUrl: './projects/rao.jpg',
    title: 'Rao Constructions',
    description: 'Collaborated with us for great designing & marketing experiences',
  },
  {
    imageUrl: './projects/rbd.jpg',
    title: 'RBD',
    description: 'Collaborated with us for great designing services and socail medis handeling.',
  },
  {
    imageUrl: './projects/slay.jpg',
    title: 'Slay Organics',
    description: 'Collaborated with us for great designing services and development',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-headline text-foreground">Our Latest<br/><span className="quantum-italic">Creative Projects</span></h2>
          <p className="mt-4 text-lg text-muted-foreground">See how our unique blend of flexibility, expertise, and innovation transforms each project into a standout success.</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{'--index': index} as React.CSSProperties}>
              <Card className="h-full text-center bg-card/50 hover:bg-card/80 transition-all duration-300 overflow-hidden group">
                <CardHeader className="p-0">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl mb-2 purple-glow-hover">{service.title}</CardTitle>
                  <p className="text-muted-foreground purple-glow-hover">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
