import { useEffect, useRef, useState } from 'react';
import { Flame } from 'lucide-react';

const categories = ['All', 'Juices', 'Smoothies', 'Bowls', 'Wraps', 'Snacks'];

const menuItems = [
  { id: 1, name: 'Green Detox', category: 'Juices', price: 180, cal: 95, tag: 'Bestseller', emoji: '🥒', desc: 'Cucumber, spinach, ginger, lemon & mint. Cold-pressed daily.' },
  { id: 2, name: 'Tropical Sunrise', category: 'Juices', price: 160, cal: 120, tag: null, emoji: '🍊', desc: 'Orange, mango, turmeric & a pinch of black pepper.' },
  { id: 3, name: 'Beetroot Glow', category: 'Juices', price: 170, cal: 110, tag: 'Popular', emoji: '🍇', desc: 'Beetroot, carrot, apple & ginger for that post-workout glow.' },
  { id: 4, name: 'PB Banana Blast', category: 'Smoothies', price: 210, cal: 320, tag: 'Bestseller', emoji: '🍌', desc: 'Peanut butter, banana, oat milk, dates & chia seeds.' },
  { id: 5, name: 'Berry Boost', category: 'Smoothies', price: 230, cal: 210, tag: null, emoji: '🫐', desc: 'Mixed berries, Greek yoghurt, flaxseeds & honey.' },
  { id: 6, name: 'Mango Lassi Reinvented', category: 'Smoothies', price: 190, cal: 240, tag: 'New', emoji: '🥭', desc: 'Alphonso mango, coconut milk, cardamom & rose water.' },
  { id: 7, name: 'Buddha Bowl', category: 'Bowls', price: 320, cal: 480, tag: 'Bestseller', emoji: '🥗', desc: 'Quinoa, roasted veggies, hummus, avocado & tahini dressing.' },
  { id: 8, name: 'Protein Power Bowl', category: 'Bowls', price: 350, cal: 560, tag: null, emoji: '🫘', desc: 'Brown rice, grilled tofu, edamame, sesame & sriracha.' },
  { id: 9, name: 'Spinach Falafel Wrap', category: 'Wraps', price: 220, cal: 390, tag: 'Popular', emoji: '🌯', desc: 'Multigrain wrap, falafel, tzatziki, lettuce & pickled onion.' },
  { id: 10, name: 'Paneer Tikka Wrap', category: 'Wraps', price: 240, cal: 420, tag: null, emoji: '🧆', desc: 'Grilled paneer, mint chutney, onion & capsicum in a wheat wrap.' },
  { id: 11, name: 'Nut Granola Jar', category: 'Snacks', price: 150, cal: 280, tag: null, emoji: '🫙', desc: 'House-made granola, Greek yoghurt, seasonal fruit compote.' },
  { id: 12, name: 'Energy Balls (4 pcs)', category: 'Snacks', price: 120, cal: 190, tag: 'New', emoji: '🍡', desc: 'Dates, oats, almond butter & dark chocolate bites.' },
];

function MenuItem({ item }) {
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
    <div ref={ref} className="reveal bg-white rounded-2xl overflow-hidden border border-cream-dark hover:shadow-lg transition-shadow group">
      <div className="bg-mint-light h-28 sm:h-32 flex items-center justify-center text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
        {item.emoji}
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex items-start justify-between mb-1 gap-2">
          <h3 className="font-display font-700 text-charcoal text-sm sm:text-base leading-snug">{item.name}</h3>
          {item.tag && (
            <span className={`text-xs font-body font-500 px-2 py-0.5 rounded-full flex-shrink-0 whitespace-nowrap ${
              item.tag === 'New' ? 'bg-gold/20 text-gold' :
              item.tag === 'Bestseller' ? 'bg-forest/10 text-forest' :
              'bg-mint text-forest'
            }`}>
              {item.tag}
            </span>
          )}
        </div>
        <p className="text-charcoal-light text-xs font-body leading-relaxed mb-3">{item.desc}</p>
        <div className="flex items-center justify-between">
          <span className="font-display font-800 text-forest text-base sm:text-lg">₹{item.price}</span>
          <span className="text-xs text-charcoal-light font-body flex items-center gap-1">
            <Flame size={11} className="text-gold" /> {item.cal} cal
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? menuItems : menuItems.filter(m => m.category === active);

  return (
    <section id="menu" className="py-14 sm:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="font-body text-xs font-500 text-gold uppercase tracking-widest">What we serve</span>
          <h2 className="font-display font-800 text-forest text-3xl sm:text-4xl md:text-5xl mt-2 mb-3 sm:mb-4">Our Menu</h2>
          <p className="font-body text-charcoal-light text-base sm:text-lg max-w-xl mx-auto">
            Every item made fresh. Every ingredient chosen with intention.
          </p>
        </div>

        {/* Category filter — horizontal scroll on mobile */}
        <div className="flex gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-display font-600 transition-all flex-shrink-0 ${
                active === c
                  ? 'bg-forest text-cream'
                  : 'bg-white border border-cream-dark text-charcoal hover:border-forest/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid — 1 col mobile, 2 col sm, 3 col lg, 4 col xl */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
          {filtered.map(item => <MenuItem key={item.id} item={item} />)}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-charcoal-light font-body text-sm mb-4">Want to pre-order or customise your meal?</p>
          <a
            href="https://wa.me/919876543210?text=Hi%20GreenLeaf%20Caf%C3%A9%2C%20I%27d%20like%20to%20place%20an%20order!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#25D366] text-white font-display font-700 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-[#1EB857] transition-colors text-sm sm:text-base"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.504 5.832L.057 23.032a.75.75 0 0 0 .92.92l5.195-1.447A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.888 9.888 0 0 1-5.031-1.371l-.36-.214-3.735 1.04 1.04-3.737-.234-.374A9.861 9.861 0 0 1 2.1 12C2.1 6.532 6.532 2.1 12 2.1S21.9 6.532 21.9 12 17.468 21.9 12 21.9z"/>
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
