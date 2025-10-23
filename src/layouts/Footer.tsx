import LiquidUnderline from '../components/anim/LiquidUnderline';

const Footer = () => {
  return (
    <footer className="py-20 md:py-24 lg:py-32 border-t border-[0.5px] border-[var(--border-hairline)]" role="contentinfo">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1200px] lg:max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">
              <span className="text-[var(--accent)]">MR</span>MANAGER
            </h3>
            <p className="text-[var(--text-secondary)]">
              Elevating careers, igniting brands, and crafting unforgettable events.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--text-primary)]" id="navigation-heading">Navigation</h4>
            <ul 
              className="space-y-2"
              aria-labelledby="navigation-heading"
            >
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <LiquidUnderline href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}>
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </LiquidUnderline>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--text-primary)]" id="contact-heading">Contact</h4>
            <ul 
              className="space-y-2"
              aria-labelledby="contact-heading"
            >
              <li>
                <a 
                  href="mailto:hello@mrmanager.ca"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  hello@mrmanager.ca
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--text-primary)]" id="legal-heading">Legal</h4>
            <ul 
              className="space-y-2"
              aria-labelledby="legal-heading"
            >
              <li>
                <LiquidUnderline href="/privacy">
                  <span className="text-[var(--text-secondary)]">Privacy Policy</span>
                </LiquidUnderline>
              </li>
              <li>
                <LiquidUnderline href="/terms">
                  <span className="text-[var(--text-secondary)]">Terms & Conditions</span>
                </LiquidUnderline>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[0.5px] border-[var(--border-hairline)] mt-8 pt-8 text-center text-[var(--text-secondary)]">
          <p>© {new Date().getFullYear()} MrManager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;