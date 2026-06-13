import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const values = [
  { title: 'Locally Sourced', desc: 'We partner with 6 farms within 80 km of Bangalore for fresh produce delivered daily.' },
  { title: 'No Artificial Anything', desc: 'Zero added sugar, no artificial colours, no preservatives. Read our ingredient labels freely.' },
  { title: 'Nutritionist Approved', desc: 'Every recipe is reviewed by our in-house nutritionist, Priya Nair (MSc Clinical Nutrition, AFMC).' },
  { title: 'Compostable Packaging', desc: "Our cups, bowls and bags are 100% compostable. We've removed single-use plastic entirely." },
];

function RevealDiv({ children, className = '', delay = 0 }) {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — visual card */}
          <RevealDiv>
            <div className="relative">
              <div className="bg-forest rounded-3xl p-6 sm:p-8 text-cream">
                <div className="text-5xl sm:text-6xl mb-4">🌿</div>
                <h3 className="font-display font-800 text-2xl sm:text-3xl mb-3 leading-tight">
                  Started in a<br />small kitchen.<br /><span className="text-gold">Grown with love.</span>
                </h3>
                <p className="font-body text-mint/80 text-sm leading-relaxed">
                  GreenLeaf began in 2019 when our founder Meera Krishnan couldn't find a café that took healthy eating seriously — without charging a fortune for it.
                </p>
              </div>

              {/* Floating stat cards — visible on sm+ */}
              <div className="absolute -right-3 sm:-right-5 top-6 sm:top-8 bg-gold text-forest rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-lg hidden sm:block">
                <p className="font-display font-800 text-2xl sm:text-3xl leading-none">5+</p>
                <p className="font-body text-xs font-500 mt-0.5">Years serving</p>
              </div>
              <div className="absolute -left-3 sm:-left-5 -bottom-4 sm:-bottom-5 bg-cream border border-cream-dark rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-lg hidden sm:block">
                <p className="font-display font-800 text-xl sm:text-2xl text-forest leading-none">94%</p>
                <p className="font-body text-xs text-charcoal-light font-500 mt-0.5">Would recommend us</p>
              </div>

              {/* Mobile inline stats (only on xs) */}
              <div className="flex gap-3 mt-4 sm:hidden">
                <div className="flex-1 bg-gold text-forest rounded-xl px-4 py-3 text-center">
                  <p className="font-display font-800 text-2xl leading-none">5+</p>
                  <p className="font-body text-xs font-500 mt-0.5">Years serving</p>
                </div>
                <div className="flex-1 bg-cream border border-cream-dark rounded-xl px-4 py-3 text-center">
                  <p className="font-display font-800 text-2xl text-forest leading-none">94%</p>
                  <p className="font-body text-xs text-charcoal-light font-500 mt-0.5">Recommend us</p>
                </div>
              </div>
            </div>
          </RevealDiv>

          {/* Right — text */}
          <div className="mt-6 sm:mt-10 lg:mt-0">
            <RevealDiv delay={100}>
              <span className="font-body text-xs font-500 text-gold uppercase tracking-widest">Our story</span>
              <h2 className="font-display font-800 text-forest text-3xl sm:text-4xl md:text-5xl mt-2 mb-4 sm:mb-5 leading-tight">
                We cook with<br />a conscience.
              </h2>
              <p className="font-body text-charcoal-light text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Healthy food in India gets a bad reputation — bland, expensive, unsatisfying. We set out to change that. Every item on our menu is proof that nourishing food can be delicious, affordable, and accessible to everyone.
              </p>
            </RevealDiv>

            <div className="space-y-4 sm:space-y-5">
              {values.map((v, i) => (
                <RevealDiv key={i} delay={150 + i * 70}>
                  <div className="flex gap-3 sm:gap-4">
                    <CheckCircle2 size={20} className="text-forest flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-700 text-charcoal text-sm sm:text-base mb-0.5">{v.title}</h4>
                      <p className="font-body text-charcoal-light text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </RevealDiv>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar — 2 cols on mobile, 4 on md */}
        <div className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {[
            { num: '40+', label: 'Menu items' },
            { num: '3,200+', label: 'Happy customers' },
            { num: '6', label: 'Farm partners' },
            { num: '100%', label: 'Natural ingredients' },
          ].map((s, i) => (
            <RevealDiv key={i} delay={i * 60}>
              <div className="text-center p-4 sm:p-6 rounded-2xl bg-cream border border-cream-dark">
                <p className="font-display font-800 text-forest text-2xl sm:text-3xl">{s.num}</p>
                <p className="font-body text-charcoal-light text-xs sm:text-sm mt-1">{s.label}</p>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
