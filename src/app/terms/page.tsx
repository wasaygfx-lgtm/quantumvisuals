
'use client';

import Header from '@/components/layout/header';
import Starfield from '@/components/ui/starfield';

export default function TermsPage() {
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
                Terms & <span className="font-kepler quantum">Conditions</span>
              </h1>
            </div>
            <div className="mt-16 max-w-3xl mx-auto text-left space-y-6 text-muted-foreground">
              <p>Welcome to Quantum Visuals. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Quantum Visuals's relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p>
              
              <h2 className="text-2xl font-bold text-foreground pt-4">1. The use of this website is subject to the following terms of use:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
                <li>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, personal information may be stored by us for use by third parties.</li>
                <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground pt-4">2. Disclaimer</h2>
              <p>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</p>

              <h2 className="text-2xl font-bold text-foreground pt-4">3. Copyright</h2>
              <p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
