
import Reveal from '../components/anim/Reveal';
import ShimmerCard from '../components/anim/ShimmerCard';
import MagneticButton from '../components/anim/MagneticButton';
import MaskReveal from '../components/anim/MaskReveal';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Meet the Founder Section */}
          <section className="mb-20">
            <Reveal>
              <MaskReveal as="h1" className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
                Meet the Founder & CEO — ABOUT MR. MANAGER
              </MaskReveal>
            </Reveal>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-2/5">
                <Reveal>
                  <ShimmerCard className="p-1">
                    <div className="aspect-square bg-[var(--bg-2)] rounded-[var(--radius)] flex items-center justify-center">
                      <span className="text-[var(--muted)]">Founder Portrait</span>
                    </div>
                  </ShimmerCard>
                </Reveal>
              </div>
              
              <div className="md:w-3/5">
                <Reveal delay={0.2}>
                  <p className="text-lg text-[var(--muted)] mb-6 leading-relaxed">
                    Welcome! My name is Brandon To, who runs a DJ Service & Management company who works along side leaders in the music industry. My passion is helping talented DJs and electronic music artists navigate the ever-evolving world of live performances, bookings, branding, career and personal growth.
                  </p>
                  
                  <p className="text-lg text-[var(--muted)] mb-6 leading-relaxed">
                    I work closely with my clients to manage their schedules, negotiate contracts, and build long-lasting relationships with promoters, venues, and other key players in the industry. With a keen eye for talent and a deep understanding of the business side of things, I ensure that each DJ I manage and service is positioned for success both on and off the stage.
                  </p>
                  
                  <p className="text-lg text-[var(--muted)] mb-6 leading-relaxed">
                    In addition, I work with vendors to ensure their needs are met for the vibes they are trying to set. The goal is to help vendors increase business and brand awareness, changing the dynamic of their business model.
                  </p>
                  
                  <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed">
                    Having worked with local Toronto pubs, financial institutions (RBC Wealth Management), we understand the importance of excellent customer service and long lasting relationships. I've developed a reputation for my meticulous attention to detail, personalized approach, and commitment to elevating the careers of my clients. Whether it's booking international tours, securing high-profile residencies, or strategizing my artists next move in the music world, I'm here to make it happen.
                  </p>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-[var(--muted)]">
                      Let's create something unforgettable together.
                    </p>
                    <p className="text-lg text-[var(--muted)]">
                      I look forward to a long-lasting relationship and journey of personal growth.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <Reveal>
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Excellence", description: "We maintain the highest standards in everything we do." },
                { title: "Integrity", description: "Honesty and transparency form the foundation of our relationships." },
                { title: "Innovation", description: "We embrace creativity and new approaches to drive success." }
              ].map((value, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <ShimmerCard className="p-6 text-center h-full">
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-[var(--muted)]">{value.description}</p>
                  </ShimmerCard>
                </Reveal>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to elevate your career?</h2>
              <div className="max-w-md mx-auto">
                <MagneticButton className="px-8 py-4 bg-[var(--accent)] text-[var(--bg)] rounded-full font-medium hover:opacity-90 transition-opacity text-lg">
                  Book a Consultation
                </MagneticButton>
              </div>
            </Reveal>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;