import React, { useState } from 'react';
import Reveal from '../components/anim/Reveal';
import MaskReveal from '../components/anim/MaskReveal';
import MagneticButton from '../components/anim/MagneticButton';
import ConfettiMicroPop from '../components/anim/ConfettiMicroPop';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setShowConfetti(true);
    
    // Reset form after submission (in a real app, you might want to clear only after successful submission)
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        consent: false
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <ConfettiMicroPop 
          active={showConfetti} 
          onComplete={() => setShowConfetti(false)} 
        />
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Reveal>
              <div className="glass rounded-[var(--radius)] p-12">
                <div className="text-5xl mb-6">🎉</div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h1>
                <p className="text-[var(--muted)] text-lg mb-8">
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
                <MagneticButton 
                  className="px-6 py-3 bg-[var(--accent)] text-[var(--bg)] rounded-full font-medium hover:opacity-90 transition-opacity"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      message: '',
                      consent: false
                    });
                  }}
                >
                  Send Another Message
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Contact Header */}
          <section className="text-center mb-20">
            <Reveal>
              <MaskReveal as="h1" className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Send me a message
              </MaskReveal>
              <p className="text-xl text-[var(--muted)]">
                Have questions or ready to get started? Reach out to us below.
              </p>
            </Reveal>
          </section>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Reveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--bg-2)] border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                    placeholder="Let me know what you need!"
                    aria-describedby="message-help"
                  ></textarea>
                  <p id="message-help" className="mt-1 text-sm text-[var(--muted)]">
                    Describe your project or inquiry in detail
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="w-4 h-4 text-[var(--accent)] bg-[var(--bg-2)] border-[var(--line)] rounded focus:ring-[var(--accent)]"
                      aria-describedby="consent-description"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="consent" className="text-[var(--muted)]">
                      I agree to receive SMS messages
                    </label>
                    <p id="consent-description" className="text-xs text-[var(--muted)] mt-1">
                      You can opt out at any time
                    </p>
                  </div>
                </div>
                
                <div>
                  <MagneticButton 
                    type="submit" 
                    className="w-full py-4 bg-[var(--accent)] text-[var(--bg)] rounded-full font-medium hover:opacity-90 transition-opacity text-lg"
                    ariaLabel="Submit contact form"
                  >
                    Submit
                  </MagneticButton>
                </div>
              </form>
            </Reveal>

            {/* Contact Information */}
            <div>
              <Reveal delay={0.2}>
                <div className="glass rounded-[var(--radius)] p-8 h-full">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Get in Touch</h3>
                      <p className="text-[var(--muted)]">
                        We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.
                      </p>
                    </div>
                    
                    <div className="pt-4 space-y-4">
                      <div>
                        <h4 className="font-medium text-[var(--accent)] mb-1">Email</h4>
                        <a 
                          href="mailto:hello@mrmanager.ca" 
                          className="text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
                        >
                          hello@mrmanager.ca
                        </a>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[var(--accent)] mb-1">Phone</h4>
                        <p className="text-[var(--fg)]">Available upon request</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[var(--accent)] mb-1">Office</h4>
                        <p className="text-[var(--fg)]">Toronto, Canada</p>
                      </div>
                    </div>
                    
                    <div className="pt-6">
                      <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                      <ul className="space-y-2 text-[var(--muted)]">
                        <li className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Saturday</span>
                          <span>10:00 AM - 4:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sunday</span>
                          <span>Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Additional Contact Options */}
          <div className="mt-20 text-center">
            <Reveal delay={0.4}>
              <h2 className="text-2xl font-bold mb-6">Prefer to reach out directly?</h2>
              <div className="max-w-md mx-auto">
                <MagneticButton 
                  className="px-8 py-4 bg-[var(--accent)] text-[var(--bg)] rounded-full font-medium hover:opacity-90 transition-opacity text-lg"
                  onClick={() => window.location.href = 'mailto:hello@mrmanager.ca'}
                >
                  Email Us
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;