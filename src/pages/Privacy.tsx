
import Reveal from '../components/anim/Reveal';
import MaskReveal from '../components/anim/MaskReveal';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
          <MaskReveal as="h1" className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center">
            Privacy Policy
          </MaskReveal>
        </Reveal>
        
        <div className="prose prose-invert max-w-none">
          <Reveal delay={0.1}>
            <p className="text-[var(--muted)] text-lg mb-8 text-center">
              Effective Date: April 15, 2025
            </p>
          </Reveal>
          
          <div className="space-y-6">
            <Reveal delay={0.2}>
              <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
              <p className="text-[var(--muted)]">
                MrManager ("us", "we", or "our") operates the MrManager website (the "Service"). 
                This page informs you of our policies regarding the collection, use, and disclosure 
                of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </Reveal>
            
            <Reveal delay={0.3}>
              <h2 className="text-2xl font-bold mt-8 mb-4">Information Collection and Use</h2>
              <p className="text-[var(--muted)]">
                We collect several different types of information for various purposes to provide 
                and improve our Service to you.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Types of Data Collected</h3>
              <h4 className="text-lg font-medium mt-4 mb-2">Personal Data</h4>
              <p className="text-[var(--muted)]">
                While using our Service, we may ask you to provide us with certain personally 
                identifiable information that can be used to contact or identify you ("Personal Data").
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2">Usage Data</h4>
              <p className="text-[var(--muted)]">
                We may also collect information that your browser sends whenever you visit our Service 
                or when you access the Service by or through a mobile device ("Usage Data").
              </p>
            </Reveal>
            
            <Reveal delay={0.4}>
              <h2 className="text-2xl font-bold mt-8 mb-4">Use of Data</h2>
              <p className="text-[var(--muted)]">
                MrManager uses the collected data for various purposes:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-[var(--muted)]">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </Reveal>
            
            <Reveal delay={0.5}>
              <h2 className="text-2xl font-bold mt-8 mb-4">Security of Data</h2>
              <p className="text-[var(--muted)]">
                The security of your data is important to us but remember that no method of 
                transmission over the Internet or method of electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your Personal Data, 
                we cannot guarantee its absolute security.
              </p>
            </Reveal>
            
            <Reveal delay={0.6}>
              <h2 className="text-2xl font-bold mt-8 mb-4">Service Providers</h2>
              <p className="text-[var(--muted)]">
                We may employ third party companies and individuals to facilitate our Service 
                ("Service Providers"), provide the Service on our behalf, perform Service-related 
                services or assist us in analyzing how our Service is used.
              </p>
            </Reveal>
            
            <Reveal delay={0.7}>
              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-[var(--muted)]">
                We may update our Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page.
              </p>
              <p className="text-[var(--muted)] mt-3">
                We will let you know via email and/or a prominent notice on our Service, prior 
                to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
              </p>
            </Reveal>
            
            <Reveal delay={0.8}>
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-[var(--muted)]">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 mt-3 text-[var(--muted)]">
                <li>By email: hello@mrmanager.ca</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;