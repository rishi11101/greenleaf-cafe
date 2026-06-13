import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-forest overflow-hidden flex items-center"
    >
      {/* Background decorative circles — scaled for mobile */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] rounded-full bg-forest-light opacity-30 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px] rounded-full bg-mint opacity-10 -translate-x-1/3 translate-y-1/4 pointer-events-none" />

      {/* Large leaf watermark — desktop only */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
        <svg width="480" height="480" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M260 40 C260 40, 460 120, 460 280 C460 400, 360 480, 260 480 C160 480, 60 400, 60 280 C60 120, 260 40, 260 40 Z" fill="rgba(168,213,181,0.07)" stroke="rgba(168,213,181,0.15)" strokeWidth="1.5"/>
          <path d="M260 80 C260 80, 420 150, 420 280 C420 380, 340 450, 260 450 C180 450, 100 380, 100 280 C100 150, 260 80, 260 80 Z" fill="rgba(168,213,181,0.05)" stroke="rgba(168,213,181,0.1)" strokeWidth="1"/>
          <line x1="260" y1="60" x2="260" y2="470" stroke="rgba(168,213,181,0.12)" strokeWidth="1"/>
          <path d="M260 160 Q320 200, 380 260" stroke="rgba(168,213,181,0.1)" strokeWidth="1" fill="none"/>
          <path d="M260 200 Q310 230, 360 280" stroke="rgba(168,213,181,0.1)" strokeWidth="1" fill="none"/>
          <path d="M260 160 Q200 200, 140 260" stroke="rgba(168,213,181,0.1)" strokeWidth="1" fill="none"/>
          <path d="M260 200 Q210 230, 160 280" stroke="rgba(168,213,181,0.1)" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left — text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-mint/20 border border-mint/30 text-mint text-xs font-body font-500 px-3 py-1.5 rounded-full mb-5 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block flex-shrink-0" />
              <span>Now open in Bangalore — Indiranagar</span>
            </div>

            <h1 className="font-display font-800 text-cream leading-[1.1] mb-5 sm:mb-6">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Eat Fresh.</span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Feel <span className="text-gold italic">Alive.</span></span>
            </h1>

            <p className="font-body text-mint/80 text-base sm:text-lg leading-relaxed mb-7 sm:mb-8 max-w-md">
              Cold-pressed juices, nourishing bowls, and handcrafted smoothies — made with locally sourced ingredients every single morning.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-gold text-forest font-display font-700 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-gold-light transition-colors text-sm"
              >
                Explore Menu <ArrowRight size={15} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-mint/40 text-cream font-display font-600 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:border-mint hover:bg-mint/10 transition-all text-sm"
              >
                Find Us
              </a>
            </div>

            {/* Social proof strip */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-mint/20">
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-mint/60 text-xs font-body">4.9 on Google · 620+ reviews</p>
              </div>
              <div className="hidden sm:block w-px h-7 bg-mint/20" />
              <div>
                <p className="text-cream font-display font-700 text-base sm:text-lg leading-none">3,200+</p>
                <p className="text-mint/60 text-xs font-body mt-0.5">Happy customers</p>
              </div>
              <div className="hidden sm:block w-px h-7 bg-mint/20" />
              <div>
                <p className="text-cream font-display font-700 text-base sm:text-lg leading-none">40+</p>
                <p className="text-mint/60 text-xs font-body mt-0.5">Menu items</p>
              </div>
            </div>
          </div>

          {/* Right — feature cards: 2x2 on lg, horizontal scroll on md, hidden on sm */}
          <div className="hidden md:grid lg:grid grid-cols-2 gap-3 lg:gap-4 lg:pt-16">
            {[
              { emoji: '🥤', title: 'Cold-Pressed Juices', desc: 'No sugar. No preservatives. Just pure fruit goodness.' },
              { emoji: '🥗', title: 'Power Bowls', desc: 'Quinoa, greens & superfoods in every bowl.' },
              { emoji: '🍹', title: 'Superfood Smoothies', desc: 'Spinach, banana, chia, almond milk — energize your day.' },
              { emoji: '🌮', title: 'Healthy Wraps', desc: 'Multigrain wraps packed with proteins & fresh veggies.' },
            ].map((card, i) => (
              <div
                key={i}
                className={`bg-mint/10 border border-mint/20 rounded-2xl p-4 lg:p-5 hover:bg-mint/15 transition-colors ${
                  i === 1 || i === 3 ? 'lg:mt-6' : ''
                }`}
              >
                <div className="text-2xl lg:text-3xl mb-2 lg:mb-3">{card.emoji}</div>
                <h3 className="font-display font-700 text-cream text-xs lg:text-sm mb-1">{card.title}</h3>
                <p className="font-body text-mint/60 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0 50 L0 25 Q360 0 720 25 Q1080 50 1440 15 L1440 50 Z" fill="#F9F6EF" />
        </svg>
      </div>
    </section>
  );
}
