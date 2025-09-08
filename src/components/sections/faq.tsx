import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the typical timeline for a project?",
    answer: "The timeline for a project varies depending on its scope and complexity. We work closely with our clients to establish a realistic timeline and ensure timely delivery. A typical small project might take 4-6 weeks, while larger projects can take several months.",
  },
  {
    question: "How do you ensure the quality of your work?",
    answer: "We follow a rigorous development process that includes comprehensive testing, code reviews, and continuous integration. Our team of experienced professionals is dedicated to delivering high-quality, bug-free products.",
  },
  {
    question: "Do you provide support after the project is completed?",
    answer: "Yes, we offer various support and maintenance packages to ensure your application remains up-to-date and runs smoothly after launch. We are committed to long-term partnerships with our clients.",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely. We are flexible and can seamlessly integrate with your existing team to provide additional expertise and support wherever needed. We value collaboration and open communication.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-headline text-foreground">Frequently Asked{" "}<span className="quantum-italic">Questions</span></h2>
          <p className="mt-4 text-lg text-foreground">Have questions? We have answers.</p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
