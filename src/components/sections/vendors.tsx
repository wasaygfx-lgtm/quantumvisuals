import { Code, Cloud, Wind, Bolt, Type, Mountain, ShoppingCart } from 'lucide-react';

const AdobeIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="w-6 h-6 flex items-center justify-center">
        {children}
    </div>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width="24" 
      height="24" 
      fill="currentColor"
      {...props}
    >
        <path d="M20.317 4.3698C18.882 3.6538 17.349 3.1258 15.727 2.8228C15.428 3.2458 15.154 3.7388 14.945 4.2838C13.259 3.9938 11.536 3.9938 9.851 4.2838C9.642 3.7388 9.368 3.2458 9.069 2.8228C7.447 3.1258 5.914 3.6538 4.479 4.3698C1.657 8.2488 0.813 12.2888 1.225 16.2418C2.943 17.6338 4.78 18.6708 6.634 19.3498C7.086 18.7818 7.495 18.1698 7.848 17.5148C7.213 17.1598 6.602 16.7628 6.033 16.3328C6.142 16.2418 6.25 16.1498 6.357 16.0528C9.444 17.6338 12.986 17.6338 16.051 16.0528C16.158 16.1498 16.266 16.2418 16.375 16.3328C15.806 16.7628 15.195 17.1598 14.56 17.5148C14.913 18.1698 15.322 18.7818 15.774 19.3498C17.628 18.6708 19.466 17.6338 21.184 16.2418C21.733 11.3728 20.317 7.4588 20.317 4.3698ZM8.02 13.9878C7.031 13.9878 6.223 13.1598 6.223 12.1488C6.223 11.1378 7.017 10.3098 8.02 10.3098C9.023 10.3098 9.831 11.1378 9.817 12.1488C9.817 13.1598 9.023 13.9878 8.02 13.9878ZM14.399 13.9878C13.41 13.9878 12.602 13.1598 12.602 12.1488C12.602 11.1378 13.396 10.3098 14.399 10.3098C15.402 10.3098 16.21 11.1378 16.196 12.1488C16.196 13.1598 15.402 13.9878 14.399 13.9878Z"/>
    </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);


const vendors = [
  { name: 'Next.js', icon: <Code /> },
  { name: 'React JS', icon: <Code /> },
  { name: 'Google Cloud', icon: <Cloud /> },
  { name: 'Tailwind CSS', icon: <Wind /> },
  { name: 'TypeScript', icon: <Type /> },
  { name: 'Shopify', icon: <ShoppingCart /> },
  { name: 'Photoshop', icon: <AdobeIcon>Ps</AdobeIcon> },
  { name: 'Illustrator', icon: <AdobeIcon>Ai</AdobeIcon> },
  { name: 'Adobe XD', icon: <AdobeIcon>Xd</AdobeIcon> },
  { name: 'GoDaddy', icon: <Mountain /> },
  { name: 'Discord', icon: <DiscordIcon /> },
  { name: 'X', icon: <XIcon /> },
];

export default function VendorsSection() {
  const allVendors = [...vendors, ...vendors]; // Duplicate for seamless scroll

  return (
    <div className="relative w-full overflow-hidden py-8 z-10">
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent z-20" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent z-20" />
      <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold font-headline text-foreground">Working on these <span className='quantum-italic'>Technologies</span></h2>
      </div>
      <div className="flex animate-scroll [animation-duration:_40s]">
        {allVendors.map((vendor, index) => (
          <div key={index} className="flex-shrink-0 mx-8 flex items-center gap-2 text-xl font-semibold text-foreground/80">
            {vendor.icon}
            <span>{vendor.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
