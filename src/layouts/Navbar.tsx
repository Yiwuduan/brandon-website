import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MagneticButton from '../components/anim/MagneticButton';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? 'backdrop-blur-md bg-[var(--bg-surface)]/70 border-b border-[var(--border-hairline)] py-4' : 'py-5'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1200px] lg:max-w-[1280px]">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-[var(--text-primary)]" aria-label="MrManager Home">
            <span className="text-[var(--accent)]">MR</span>MANAGER
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex" aria-label="Main navigation">
            <ul className="flex space-x-8">
              {['/', '/about', '/services', '/contact'].map((path) => {
                const pageName = path === '/' ? 'Home' : path.slice(1);
                const isActive = location.pathname === path;
                
                return (
                  <li key={path}>
                    <Link 
                      to={path}
                      className={`transition-colors duration-200 ${
                        isActive ? 'text-[var(--accent)] underline underline-offset-4 decoration-[0.8px] decoration-[var(--accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline underline-offset-4 decoration-[0.8px] decoration-white/40 hover:decoration-white/70'
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {pageName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <MagneticButton 
              className="px-6 py-2 bg-[var(--accent)] text-[var(--bg-surface)] rounded-full font-medium hover:opacity-90 transition-opacity"
              ariaLabel="Book a consultation"
            >
              Book a Consultation
            </MagneticButton>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2"
              style={{ color: 'var(--text-primary)' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <span className="text-xl">✕</span>
              ) : (
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav 
            id="mobile-menu"
            className="md:hidden py-4 backdrop-blur-md bg-[var(--bg-surface)]/70 border-t border-[var(--border-hairline)]"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-4 px-6">
              {['/', '/about', '/services', '/contact'].map((path) => {
                const pageName = path === '/' ? 'Home' : path.slice(1);
                const isActive = location.pathname === path;
                
                return (
                  <li key={path}>
                    <Link 
                      to={path}
                      className={`block py-2 transition-colors duration-200 ${
                        isActive ? 'text-[var(--accent)] underline underline-offset-4 decoration-[0.8px] decoration-[var(--accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline underline-offset-4 decoration-[0.8px] decoration-white/40 hover:decoration-white/70'
                      }`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {pageName}
                    </Link>
                  </li>
                );
              })}
              <li>
                <MagneticButton 
                  className="w-full px-6 py-3 bg-[var(--accent)] text-[var(--bg-surface)] rounded-full font-medium hover:opacity-90 transition-opacity"
                  ariaLabel="Book a consultation"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book a Consultation
                </MagneticButton>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;