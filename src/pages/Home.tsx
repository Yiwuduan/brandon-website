
import Reveal from '../components/anim/Reveal';
import MaskReveal from '../components/anim/MaskReveal';
import MagneticButton from '../components/anim/MagneticButton';
import ShimmerCard from '../components/anim/ShimmerCard';
import MarqueeRow from '../components/anim/MarqueeRow';
import SpotlightCard from '../components/anim/SpotlightCard';
import TextPressure from '../components/anim/TextPressure';
import GradualBlur from '../components/anim/GradualBlur';
import LogoLoop from '../components/anim/LogoLoop';
import MagicBento from '../components/anim/MagicBento';
import MetaBalls from '../components/anim/MetaBalls';
import InfiniteScroll from '../components/anim/InfiniteScroll';

const HomePage = () => {
  const partners = [
    { node: <div className="text-3xl text-[var(--text-primary)]">🎵</div>, title: "Partner 1" },
    { node: <div className="text-3xl text-[var(--text-primary)]">🎵</div>, title: "Partner 2" },
    { node: <div className="text-3xl text-[var(--text-primary)]">🎵</div>, title: "Partner 3" },
    { node: <div className="text-3xl text-[var(--text-primary)]">🎵</div>, title: "Partner 4" },
    { node: <div className="text-3xl text-[var(--text-primary)]">🎵</div>, title: "Partner 5" },
    { node: <div className="text-3xl text-[var(--text-primary)]">🎵</div>, title: "Partner 6" },
  ];
  // Services data for the home page
  const services = [
    {
      title: "Artists Management",
      description: "We specialize in identifying opportunities for growth, whether it's through advanced training, skill development, or networking strategies.",
      icon: "🎵" // Placeholder - would be replaced with actual icon
    },
    {
      title: "Weddings and Private Parties",
      description: "Let's success side by side. Your event awaits, and we can't wait to bring it to life.",
      icon: "🎉"
    },
    {
      title: "Corporate Events",
      description: "It's time to revolutionize the way you celebrate success and milestones within your company. Contact us today and let's start planning an epic corporate event.",
      icon: "👔"
    },
    {
      title: "Venues, Bars, and Restaurants",
      description: "Whether you manage bar, a restaurant, or an event space, we understand that the right talent can transform an ordinary experience into something truly unforgettable.",
      icon: "🍸"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      text: "What truly stands out is their reliability. Arrived early, used top-tier equipment, and handled last minute adjustments with ease. Affordable pricing and transparent communication make them a trustworthy partner. If you want a DJ service that blends talent, professionalism, and heart, Brandon's team is unmatched. Highly recommend for any event.",
      author: "M. Z."
    },
    {
      text: "Brandon is an amazing manager. He is very knowledgeable in the music industry and knows how to make any artist boom. He's very generous in relevant advices for anyone connecting with him. His Industry Nights for the community are already an institution in Toronto! Highly recommend !",
      author: "Isabelle Sheva"
    },
    {
      text: "I met Brandon, THE Mr Manager a year ago while DJing a small music festival. Since the I've been following his journey, and I'm fully supportive and invested in his mission. Brandon is breaking down the wall of competitiveness in the industry and connecting artists of all kinds in his networking ventures. Come to one of his Industry Nights and see what it's all about. On top of that he has a podcast for artists in the city of Toronto AND he's a booking manager for some select individuals and that list is growing.",
      author: "D Loader"
    },
    {
      text: "Working with Mr. Manager has been an incredible experience. He's consistently put me on great events some of the most successful I've played to date alongside some of the top DJs in the city of Toronto. He offers a wide range of gigs, from private and business events to club nights and holiday parties, always matching DJs with the right vibe and crowd. His fees are fair, and more importantly, he genuinely works to help build your name and get you seen. Highly recommend his services 5/5. If you're looking to elevate your DJ career, this is the guy to work with.",
      author: "Brandon Charles"
    },
    {
      text: "What sets Mr. Manager apart is his deep commitment to growing the music scene across Toronto and Canada. He actively uses his platform and social channels to promote local talent and bring attention to the artistry happening right here in the city. His vision, professionalism, and energy make him someone you want to work with and someone the scene truly needs. Follow his socials and catch an Industry Night event you won't be disappointed!",
      author: "Ronin Clan"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Are initial consultations free?",
      answer: "The initial appointment is free discovery call to see how we elevate your DJ career."
    },
    {
      question: "Why choose us?",
      answer: "We work with the top service DJs who not only deliver the best sounds but top notch customer service."
    }
  ];

  return (
    <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
                      <div className="absolute inset-0 bg-black/20 z-0">
                                  <MetaBalls
                                    color="#B8860B"
                                    cursorBallColor="#B8860B"                          cursorBallSize={2}
                          ballCount={15}
                          animationSize={10}
                          enableMouseInteraction={true}
                          enableTransparency={true}
                          hoverSmoothness={0.05}
                          clumpFactor={1}
                          speed={0.3}
                          style={{ opacity: 0.1 }}
                        />
                        {/* Kinetic Gradient Background - simplified version */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--bg-elevated)_0%,_var(--bg-surface)_70%)] opacity-80 mix-blend-screen" />
                        {/* Text scrim for improved readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-transparent" />              </div>
              <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1200px] lg:max-w-[1280px] relative z-10 text-center">
                <div style={{position: 'relative', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <TextPressure
                    text="We Move Artists Forward"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="var(--text-onImage)"
                    strokeColor="#ff0000" // You can change this color if needed
                    minFontSize={window.innerWidth < 768 ? 60 : 120} // Adjust for mobile and desktop
                  />
                </div>
                <Reveal delay={0.2}>
                  <p className="text-xl leading-8 md:text-2xl md:leading-9 max-w-[65ch] mx-auto mb-10 text-[var(--text-onImage)] space-y-6 md:space-y-8">
                    Unlock Your Potential With Our Dynamic Team, Specializing In Management, Brand Evolution, And Digital Expansion For DJs And Innovators. Elevating Careers, Igniting Brands, And Crafting Unforgettable Events. We're The Powerhouse At Your Side.
                  </p>
                </Reveal>
                          <Reveal delay={0.3}>
                            <MagneticButton className="block mx-auto h-14 px-6 md:px-7 py-3.5 bg-[var(--accent)] text-[var(--bg-surface)] rounded-full font-medium hover:opacity-90 transition-opacity relative overflow-hidden group">
                                <span className="relative z-10 text-[var(--bg-surface)]">Book a Consultation</span>
                                <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></span>
                              </MagneticButton>
                                    </Reveal>              </div>
            </section>
      {/* Partners Strip */}
      <section className="py-20 md:py-24 lg:py-32 bg-[var(--bg-surface)]">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1200px] lg:max-w-[1280px]">
          <Reveal>
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6 text-[var(--text-primary)]">In Partnership With:</h2>
            <p className="text-center text-[var(--text-secondary)] mb-10 max-w-[65ch] mx-auto space-y-6 md:space-y-8">
              We proudly collaborate using top-tier music production tools that you can benefit from
            </p>
          </Reveal>
          
          <div className="overflow-x-hidden">
            <LogoLoop
              logos={partners}
              speed={60}
              direction="left"
              logoHeight={64}
              gap={100}
              pauseOnHover
              scaleOnHover
              fadeOut={false}
              fadeOutColor="var(--bg-surface)"
              ariaLabel="Technology partners"
              className="mx-[-1.5rem] md:mx-[-2rem] lg:mx-[-3rem]"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1200px] lg:max-w-[1280px]">
          <Reveal>
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-[var(--text-primary)]">Our Services</h2>
          </Reveal>
          
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="255, 215, 0"
            cardData={services.map(service => ({
              color: 'var(--bg-elevated)',
              title: service.title,
              description: service.description,
              label: service.icon
            }))}
          />
        </div>
      </section>

      {/* Specialized Services - Plain Text */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--bg-surface)] text-[var(--text-primary)] py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1200px] lg:max-w-[1280px] text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-[var(--text-primary)]">Specialized Services</h2>
          <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-[65ch] mx-auto">
            Explore our comprehensive offerings designed to elevate your craft.
          </p>
        </div>

        {/* Scrollable content with plain text */}
        <div style={{ height: '100vh', position: 'relative', outline: 'none', border: 'none', background: 'var(--bg-surface)' }} className="mt-8">
          <InfiniteScroll
            items={[
              {
                content: (
                  <div className="h-full w-full flex items-center" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                    <div className="w-full" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                      <h3 className="text-6xl font-bold text-left pl-8" style={{ outline: 'none', border: 'none', color: 'var(--text-primary)' }}>Mixing and Mastering</h3>
                    </div>
                  </div>
                ),
              },
              {
                content: (
                  <div className="h-full w-full flex items-center" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                    <div className="w-full" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                      <p className="text-2xl text-left pl-8 text-[var(--text-secondary)]" style={{ outline: 'none', border: 'none', color: 'var(--text-secondary)' }}>
                        Elevate your sound with professional mixing and mastering tailored to make your tracks release-ready. The focus will be on balancing every element of your production, enhancing clarity, and ensuring your music translates flawlessly across all platforms and devices. Whether you're polishing a single or completing an album, I'll help bring out the best in your sound while preserving your unique artistic vision.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                content: (
                  <div className="h-full w-full flex items-center" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                    <div className="w-full" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                      <h3 className="text-6xl font-bold text-left pl-8" style={{ outline: 'none', border: 'none', color: 'var(--text-primary)' }}>DJ Lessons</h3>
                    </div>
                  </div>
                ),
              },
              {
                content: (
                  <div className="h-full w-full flex items-center" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                    <div className="w-full" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                      <p className="text-2xl text-left pl-8 text-[var(--text-secondary)]" style={{ outline: 'none', border: 'none', color: 'var(--text-secondary)' }}>
                        Unlock your potential behind the decks with personalized DJ lessons. From beginner basics to advanced mixing techniques, I offer tailored instruction to help you master the art of DJing. Learn everything from beatmatching and scratching to set construction and crowd reading, all designed to elevate your performance and confidence.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                content: (
                  <div className="h-full w-full flex items-center" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                    <div className="w-full" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                      <h3 className="text-6xl font-bold text-left pl-8" style={{ outline: 'none', border: 'none', color: 'var(--text-primary)' }}>Live Performance</h3>
                    </div>
                  </div>
                ),
              },
              {
                content: (
                  <div className="h-full w-full flex items-center" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                    <div className="w-full" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                      <p className="text-2xl text-left pl-8 text-[var(--text-secondary)]" style={{ outline: 'none', border: 'none', color: 'var(--text-secondary)' }}>
                        Professional live performance services that captivate audiences and create memorable experiences. Our experienced performers bring energy and skill to any event, ensuring your audience stays engaged from start to finish.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                content: (
                  <div className="h-full w-full flex items-center" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                    <div className="w-full" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                      <h3 className="text-6xl font-bold text-left pl-8" style={{ outline: 'none', border: 'none', color: 'var(--text-primary)' }}>Music Production</h3>
                    </div>
                  </div>
                ),
              },
              {
                content: (
                  <div className="h-full w-full flex items-center" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                    <div className="w-full" style={{ outline: 'none', border: 'none', background: 'var(--bg-surface)' }}>
                      <p className="text-2xl text-left pl-8 text-[var(--text-secondary)]" style={{ outline: 'none', border: 'none', color: 'var(--text-secondary)' }}>
                        Full-service music production from concept to completion. We handle composition, arrangement, recording, and production to help bring your musical vision to life with professional quality and creative excellence.
                      </p>
                    </div>
                  </div>
                ),
              },
            ]}
            isTilted={true}
            tiltDirection='left'
            autoplay={true}
            autoplaySpeed={0.5}
            autoplayDirection="up"
            pauseOnHover={true}
          />
        </div>
      </section>

      {/* Branding Consult */}
      <section className="py-20 md:py-24 lg:py-32 bg-[var(--bg-elevated)]">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1200px] lg:max-w-[1280px]">
          <div className="max-w-[65ch] mx-auto text-center">
            <Reveal>
              <span className="text-[var(--accent)] text-xs font-medium uppercase tracking-[0.08em] opacity-70">Artists Development, Branding, Social Media Consultant</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-[var(--text-primary)] text-balance">
                Whether you're just starting out or need a refresh, we build brands with identity, intention and strategy.
              </h2>
              <MagneticButton className="h-14 px-8 py-3.5 bg-[var(--accent)] text-[var(--bg-surface)] rounded-full font-medium hover:opacity-90 transition-opacity mx-auto">
                Schedule A Consultation!
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1200px] lg:max-w-[1280px]">
          <Reveal>
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-[var(--text-primary)]">Testimonials</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <ShimmerCard className="p-6 md:p-8 lg:p-10 h-full rounded-xl transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)] shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
                  <p className="text-lg text-[var(--text-secondary)] italic mb-4 space-y-6 md:space-y-8">"{testimonial.text}"</p>
                  <p className="font-medium text-[var(--text-primary)]">— {testimonial.author}</p>
                </ShimmerCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 lg:py-32 bg-[var(--bg-elevated)]">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1200px] lg:max-w-[1280px]">
          <Reveal>
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-[var(--text-primary)]">Frequently Asked Questions</h2>
          </Reveal>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <details className="border border-[0.5px] border-[var(--border-hairline)] p-6 md:p-8 lg:p-10 rounded-xl cursor-pointer bg-[var(--glass)] backdrop-blur-sm">
                  <summary className="font-semibold text-lg list-none text-[var(--text-primary)]">{faq.question}</summary>
                  <div className="mt-3 text-lg text-[var(--text-secondary)] space-y-6 md:space-y-8">{faq.answer}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-[1200px] lg:max-w-[1280px] text-center">
          <Reveal>
            <MaskReveal as="h2" className="text-4xl lg:text-5xl font-bold mb-6 text-[var(--text-primary)] text-balance">
              Ready to move your career forward?
            </MaskReveal>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-md mx-auto">
              <MagneticButton className="h-16 px-8 py-4 bg-[var(--accent)] text-[var(--bg-surface)] rounded-full font-medium hover:opacity-90 transition-opacity text-lg">
                Book a Consultation
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;