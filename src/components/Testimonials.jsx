import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Divya Ramesh', role: 'Software Engineer, Flipkart', initials: 'DR', rating: 5, text: "Finally a café that doesn't confuse healthy with tasteless. The Buddha Bowl changed my lunch routine entirely. I come here 4 times a week and my energy levels are noticeably better.", color: 'bg-forest' },
  { name: 'Arjun Mehta', role: 'Fitness Coach, Bangalore', initials: 'AM', rating: 5, text: "I recommend GreenLeaf to all my clients. The protein bowls are well-balanced, portions are honest, and they actually know what's in each item. That matters a lot in my profession.", color: 'bg-gold' },
  { name: 'Sunita & Rahul Joshi', role: 'Parents, HSR Layout', initials: 'SJ', rating: 5, text: "Our kids love the smoothies! We don't have to negotiate vegetables anymore — they ask for the Green Detox by name. The packaging is also lovely — no plastic, which we appreciate.", color: 'bg-charcoal' },
  { name: 'Kavitha Narayanan', role: 'Nutritionist, Apollo', initials: 'KN', rating: 5, text: "As a clinical nutritionist, I'm picky. GreenLeaf actually lists calorie and ingredient information transparently. The food is genuinely nutritious, not just marketed as such.", color: 'bg-forest-light' },
  { name: 'Rishi Subramaniam', role: 'Startup Founder', initials: 'RS', rating: 5, text: "Our office orders from GreenLeaf every Friday. The team loves it — no more arguments about where to eat. WhatsApp ordering is quick and delivery is always on time.", color: 'bg-mint' },
  { name: 'Preeti Agarwal', role: 'Yoga Instructor, Koramangala', initials: 'PA', rating: 5, text: "The post-yoga smoothie ritual is real. Berry Boost after a Sunday class is my weekly non-negotiable. The staff remember my name, which honestly makes me feel like a regular.", color: 'bg-gold' },
];

function RevealDiv({ children, className = '', delay = 0 }) {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current.classList.add('visible'); },
      { threshold: 0.08 }
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

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="font-body text-xs font-500 text-gold uppercase tracking-widest">Real customers</span>
          <h2 className="font-display font-800 text-forest text-3xl sm:text-4xl md:text-5xl mt-2 mb-3 sm:mb-4">
            People love GreenLeaf
          </h2>
          <p className="font-body text-charcoal-light text-base sm:text-lg max-w-xl mx-auto">
            Don't take our word for it. Here's what our regulars say — unfiltered.
          </p>
        </div>

        {/* Grid: 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {reviews.map((r, i) => (
            <RevealDiv key={i} delay={i * 60}>
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-cream-dark hover:shadow-md transition-shadow h-full flex flex-col">
                <Quote size={20} className="text-mint mb-3 flex-shrink-0" />
                <p className="font-body text-charcoal text-sm leading-relaxed flex-1 mb-4 sm:mb-5">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-cream-dark">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${r.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="font-display font-700 text-xs text-white">{r.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-700 text-charcoal text-sm truncate">{r.name}</p>
                    <p className="font-body text-charcoal-light text-xs truncate">{r.role}</p>
                  </div>
                  <div className="flex gap-0.5 flex-shrink-0">
                    {[...Array(r.rating)].map((_, j) => (
                      <Star key={j} size={10} className="text-gold fill-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
