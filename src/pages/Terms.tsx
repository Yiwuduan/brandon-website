
import Reveal from '../components/anim/Reveal';
import MaskReveal from '../components/anim/MaskReveal';

const TermsPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
          <MaskReveal as="h1" className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center">
            Terms & Conditions
          </MaskReveal>
        </Reveal>
        
        <div className="prose prose-invert max-w-none">
          <Reveal delay={0.1}>
            <p className="text-[var(--muted)] text-lg mb-8 text-center">
              Last updated: October 17, 2025
            </p>
          </Reveal>
          
          <div className="space-y-6">
            <Reveal delay={0.2}>
              <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
              <p className="text-[var(--muted)]">
                These Terms and Conditions ("Terms", "Terms and Conditions") govern your 
                relationship with MrManager website (the "Service") operated by MrManager ("us", 
                "we", or "our").
              </p>
              <p className="text-[var(--muted)] mt-3">
                Your access to and use of the Service is conditioned on your acceptance of and 
                compliance with these Terms. These Terms apply to all visitors, users and others 
                who access or use the Service.
              </p>
            </Reveal>
            
            <Reveal delay={0.3}>
              <h2 className="text-2xl font-bold mt-8 mb-4">Use License</h2>
              <p className="text-[var(--muted)]">
                Unless otherwise stated, MrManager and/or its licensors own the intellectual 
                property rights for all material on MrManager. All intellectual property rights 
                are reserved. You may access this from MrManager for your own personal use 
                subjected to restrictions set in these terms and conditions.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">You must not:</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-[var(--muted)]">
                <li>Republish material from MrManager</li>
                <li>Sell, rent or sub-license material from MrManager</li>
                <li>Reproduce, duplicate or copy material from MrManager</li>
                <li>Redistribute content from MrManager</li>
              </ul>
            </Reveal>
            
            <Reveal delay={0.4}>
              <h2 className="text-2xl font-bold mt-8 mb-4">User Representations</h2>
              <p className="text-[var(--muted)]">
                By using the Service, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-[var(--muted)]">
                <li>All registration information you submit will be true, accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information</li>
                <li>You are not a minor in the jurisdiction in which you reside</li>
                <li>Your use of our Service will be in accordance with the Terms</li>
              </ul>
            </Reveal>
            
            <Reveal delay={0.5}>
              <h2 className="text-2xl font-bold mt-8 mb-4">Prohibited Activities</h2>
              <p className="text-[var(--muted)]">
                You may not access or use the Service for any purpose other than that for which 
                we make the Service available. The Service may not be used in connection with 
                any commercial endeavors except those that are specifically endorsed or approved 
                by us.
              </p>
              <p className="text-[var(--muted)] mt-3">
                As a user of the Service, you agree not to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-[var(--muted)]">
                <li>Systematically retrieve data or other content from the Service to create or compile</li>
                <li>Trick, defraud, or mislead us and other users</li>
                <li>Engage in any automated use of the system</li>
                <li>Use the Service as part of any effort to compete with us</li>
              </ul>
            </Reveal>
            
            <Reveal delay={0.6}>
              <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-[var(--muted)]">
                In no event shall MrManager, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, 
                consequential or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses, resulting from your access to 
                or use of the Service.
              </p>
            </Reveal>
            
            <Reveal delay={0.7}>
              <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
              <p className="text-[var(--muted)]">
                These Terms shall be governed and construed in accordance with the laws of Canada, 
                which governing law applies to agreement without regard to its conflict of law 
                provisions.
              </p>
              <p className="text-[var(--muted)] mt-3">
                Our failure to enforce any right or provision of these Terms will not be considered 
                a waiver of those rights. If any provision of these Terms is held to be invalid 
                or unenforceable by a court, the remaining provisions of these Terms will remain 
                in effect. These Terms constitute the entire agreement between us regarding our 
                Service, and supersede and replace any prior agreements we might have between us 
                regarding the Service.
              </p>
            </Reveal>
            
            <Reveal delay={0.8}>
              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Service</h2>
              <p className="text-[var(--muted)]">
                We reserve the right to withdraw or amend our Service, and any service or material 
                we provide via the Service, in our sole discretion without notice. We will not be 
                liable if for any reason all or any part of the Service is unavailable at any time 
                or for any period.
              </p>
            </Reveal>
            
            <Reveal delay={0.9}>
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-[var(--muted)]">
                If you have any questions about these Terms, please contact us:
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

export default TermsPage;