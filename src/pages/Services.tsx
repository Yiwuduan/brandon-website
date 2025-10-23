import { useState } from 'react';
import Reveal from '../components/anim/Reveal';
import ShimmerCard from '../components/anim/ShimmerCard';
import MagneticButton from '../components/anim/MagneticButton';
import MaskReveal from '../components/anim/MaskReveal';
import NumberTicker from '../components/anim/NumberTicker';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState<'djs' | 'vendors'>('djs');

  // Services data for DJs
  const djServices = [
    {
      title: "Artist and music management",
      description: "Professional management services to help you focus on your music while we handle the business."
    },
    {
      title: "Social media consulting",
      description: "Build and maintain your online presence with our expert social media strategies."
    },
    {
      title: "DJ lessons",
      description: "Personalized lessons to improve your skills and grow as a DJ."
    },
    {
      title: "Ghost producing",
      description: "Professional production services to help create your next hit track."
    },
    {
      title: "Mastery of tracks",
      description: "Professional mixing and mastering to make your tracks radio-ready."
    },
    {
      title: "Organic stream growth",
      description: "Strategies to grow your streaming numbers organically."
    }
  ];

  // Services data for Vendors
  const vendorServices = [
    {
      title: "Professional and experienced DJs",
      description: "Access to our network of professional DJs for your events."
    },
    {
      title: "Professional and experienced artists photography and videography",
      description: "High-quality visual content for your events and marketing."
    },
    {
      title: "Stage set up (including sound engineers)",
      description: "Complete event setup including sound and lighting."
    },
    {
      title: "Live visual artists",
      description: "Enhance your event with live visual artistry."
    },
    {
      title: "Legal affairs",
      description: "Professional legal support for your music business."
    },
    {
      title: "Collaboration with musical professionals",
      description: "Connect with industry professionals to elevate your events."
    }
  ];

  // Artists and music management details
  const managementDetails = [
    "Strategic day to day management",
    "Weekly check -ins",
    "Career planning",
    "A&Rs",
    "Sourcing collaborations",
    "Tailored plans",
    "Develop and enhancing social media presence"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <section className="text-center mb-20">
            <Reveal>
              <MaskReveal as="h1" className="text-4xl md:text-5xl font-serif font-bold mb-6">
                What We Offer?
              </MaskReveal>
              <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto">
                Comprehensive services tailored to the needs of DJs and vendors in the music industry
              </p>
            </Reveal>
          </section>

          {/* Tabs for DJs and Vendors */}
          <section className="mb-16">
            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1 glass rounded-lg">
                <button
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === 'djs' 
                      ? 'bg-[var(--accent)] text-[var(--bg)]' 
                      : 'text-[var(--muted)] hover:text-[var(--fg)]'
                  }`}
                  onClick={() => setActiveTab('djs')}
                >
                  For DJs
                </button>
                <button
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === 'vendors' 
                      ? 'bg-[var(--accent)] text-[var(--bg)]' 
                      : 'text-[var(--muted)] hover:text-[var(--fg)]'
                  }`}
                  onClick={() => setActiveTab('vendors')}
                >
                  For Vendors
                </button>
              </div>
            </div>

            {/* Services for DJs */}
            {activeTab === 'djs' && (
              <div>
                <Reveal>
                  <h2 className="text-3xl font-bold mb-12 text-center">DJ SERVICES</h2>
                  <p className="text-center text-[var(--muted)] mb-12 max-w-2xl mx-auto">
                    Level up your skills with personalized lessons from experienced DJs and producers from within our pro roster.
                  </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  {djServices.map((service, index) => (
                    <Reveal key={index} delay={index * 0.1}>
                      <ShimmerCard className="p-6 h-full">
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-[var(--muted)]">{service.description}</p>
                      </ShimmerCard>
                    </Reveal>
                  ))}
                </div>

                {/* Mr. Manager's DJ Database */}
                <Reveal>
                  <div className="glass rounded-[var(--radius)] p-8 mb-20 text-center">
                    <h2 className="text-2xl font-bold mb-4">MR. MANAGER'S DJ DATABASE</h2>
                    <p className="text-[var(--muted)] mb-6 max-w-3xl mx-auto">
                      Looking for gigs? We match talented DJs with weddings, corporate events, birthdays and private parties. We have a diversified vendor list who are always looking for DJs. Through the connections we have built, we are always adding new vendors to the list. Apply now to find out more on how you can join Mr. Manager's database.
                    </p>
                    <MagneticButton className="px-6 py-3 bg-[var(--accent)] text-[var(--bg)] rounded-full font-medium hover:opacity-90 transition-opacity">
                      Apply Now
                    </MagneticButton>
                  </div>
                </Reveal>

                {/* Creative Partnerships */}
                <Reveal>
                  <h2 className="text-3xl font-bold mb-12 text-center">Creative Partnerships</h2>
                  <p className="text-center text-[var(--muted)] mb-12 max-w-2xl mx-auto">
                    Streamline your business with creatives in the industry
                  </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  {vendorServices.slice(0, 3).map((service, index) => (
                    <Reveal key={index} delay={index * 0.1}>
                      <ShimmerCard className="p-6 h-full">
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-[var(--muted)]">{service.description}</p>
                      </ShimmerCard>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {/* Services for Vendors */}
            {activeTab === 'vendors' && (
              <div>
                <Reveal>
                  <h2 className="text-3xl font-bold mb-12 text-center">Services for Vendors</h2>
                  <p className="text-[var(--muted)] mb-12 text-center max-w-2xl mx-auto">
                    Comprehensive solutions for venues, event spaces, and other music industry businesses
                  </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  {vendorServices.map((service, index) => (
                    <Reveal key={index} delay={index * 0.1}>
                      <ShimmerCard className="p-6 h-full">
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-[var(--muted)]">{service.description}</p>
                      </ShimmerCard>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Artists and Music Management */}
          <section className="mb-20">
            <Reveal>
              <h2 className="text-3xl font-bold mb-6 text-center">Artists and Music Management</h2>
              <p className="text-center text-[var(--muted)] mb-12 max-w-2xl mx-auto">
                Align your music journey by working with Mr. Manager
              </p>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Reveal>
                  <ul className="space-y-4">
                    {managementDetails.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[var(--accent)] mr-3 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              
              <div>
                <Reveal delay={0.2}>
                  <div className="bg-[var(--glass)] border border-[var(--line)] rounded-[var(--radius)] p-8">
                    <div className="aspect-video bg-[var(--bg)] rounded-lg flex items-center justify-center">
                      <span className="text-[var(--muted)]">Artist Management Visual</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <Reveal>
                <div className="glass p-8 rounded-[var(--radius)]">
                  <div className="text-4xl font-bold text-[var(--accent)] mb-2">
                    <NumberTicker value={500} suffix="+" />
                  </div>
                  <p className="text-[var(--muted)]">Artists Managed</p>
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <div className="glass p-8 rounded-[var(--radius)]">
                  <div className="text-4xl font-bold text-[var(--accent)] mb-2">
                    <NumberTicker value={1000} suffix="+" />
                  </div>
                  <p className="text-[var(--muted)]">Events Coordinated</p>
                </div>
              </Reveal>
              
              <Reveal delay={0.2}>
                <div className="glass p-8 rounded-[var(--radius)]">
                  <div className="text-4xl font-bold text-[var(--accent)] mb-2">
                    <NumberTicker value={50} suffix="+" />
                  </div>
                  <p className="text-[var(--muted)]">Industry Partners</p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to grow your music career?</h2>
              <p className="text-[var(--muted)] mb-8 max-w-2xl mx-auto">
                Contact us today to learn how our services can help you reach the next level.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <MagneticButton className="px-8 py-4 bg-[var(--accent)] text-[var(--bg)] rounded-full font-medium hover:opacity-90 transition-opacity text-lg">
                  Book a Consultation
                </MagneticButton>
                <MagneticButton className="px-8 py-4 border border-[var(--line)] rounded-full font-medium hover:bg-[var(--bg-2)] transition-colors text-lg">
                  Contact Us
                </MagneticButton>
              </div>
            </Reveal>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;