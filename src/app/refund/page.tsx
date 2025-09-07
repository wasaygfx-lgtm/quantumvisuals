
'use client';

import Header from '@/components/layout/header';
import Starfield from '@/components/ui/starfield';
import Footer from '@/components/layout/footer';

export default function RefundPage() {
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
        
        <main className="relative z-10 py-20 sm:py-32">
          <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold font-headline text-foreground">
                Refund <span className="font-kepler quantum">Policy</span>
              </h1>
            </div>
            <div className="mt-16 max-w-3xl mx-auto text-left space-y-6 text-muted-foreground">
                <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</p>

                <h2 className="text-2xl font-bold text-foreground pt-4">Refunds (if applicable)</h2>
                <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
                <p>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>

                <h2 className="text-2xl font-bold text-foreground pt-4">Late or missing refunds (if applicable)</h2>
                <p>If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted. Next contact your bank. There is often some processing time before a refund is posted. If you’ve done all of this and you still have not received your refund yet, please contact us.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
