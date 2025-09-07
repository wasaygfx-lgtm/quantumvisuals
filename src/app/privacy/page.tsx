
'use client';

import Header from '@/components/layout/header';
import Starfield from '@/components/ui/starfield';
import Footer from '@/components/layout/footer';

export default function PrivacyPage() {
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
                Privacy <span className="font-kepler quantum">Policy</span>
              </h1>
            </div>
            <div className="mt-16 max-w-3xl mx-auto text-left space-y-6 text-muted-foreground">
                <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.</p>

                <h2 className="text-2xl font-bold text-foreground pt-4">Personal Information We Collect</h2>
                <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”</p>

                <h2 className="text-2xl font-bold text-foreground pt-4">How Do We Use Your Personal Information?</h2>
                <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to: communicate with you; screen our orders for potential risk or fraud; and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</p>

                <h2 className="text-2xl font-bold text-foreground pt-4">Sharing Your Personal Information</h2>
                <p>We share your Personal Information with third parties to help us use your Personal Information, as described above. We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
