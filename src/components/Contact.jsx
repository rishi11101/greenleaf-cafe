import { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

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

const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.504 5.832L.057 23.032a.75.75 0 0 0 .92.92l5.195-1.447A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.888 9.888 0 0 1-5.031-1.371l-.36-.214-3.735 1.04 1.04-3.737-.234-.374A9.861 9.861 0 0 1 2.1 12C2.1 6.532 6.532 2.1 12 2.1S21.9 6.532 21.9 12 17.468 21.9 12 21.9z"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', phone: '', message: '' });
  };

  const info = [
    { icon: <MapPin size={18} className="text-gold" />, label: 'Visit Us', lines: ['12, 100 Feet Road, Indiranagar,', 'Bangalore – 560038'] },
    { icon: <Phone size={18} className="text-gold" />, label: 'Call / WhatsApp', lines: ['+91 98765 43210'] },
    { icon: <Mail size={18} className="text-gold" />, label: 'Email', lines: ['hello@greenleafcafe.in'] },
    { icon: <Clock size={18} className="text-gold" />, label: 'Hours', lines: ['Mon–Sat: 7:30 AM – 9:00 PM', 'Sunday: 8:00 AM – 7:00 PM'] },
  ];

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="font-body text-xs font-500 text-gold uppercase tracking-widest">Find us</span>
          <h2 className="font-display font-800 text-forest text-3xl sm:text-4xl md:text-5xl mt-2 mb-3 sm:mb-4">
            Come say hello 👋
          </h2>
          <p className="font-body text-charcoal-light text-base sm:text-lg max-w-xl mx-auto">
            Walk in, or reach out on WhatsApp. We reply fast, we promise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left — info cards */}
          <RevealDiv>
            <div className="space-y-3 sm:space-y-4">
              {/* Info cards — 2x2 grid on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {info.map((item, i) => (
                  <div key={i} className="flex gap-3 p-3 sm:p-4 rounded-xl bg-cream border border-cream-dark">
                    <div className="w-9 h-9 bg-forest rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-display font-700 text-charcoal text-sm mb-0.5">{item.label}</p>
                      {item.lines.map((l, j) => (
                        <p key={j} className="font-body text-charcoal-light text-xs sm:text-sm truncate">{l}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210?text=Hi%20GreenLeaf%20Caf%C3%A9!%20I%20have%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-pulse flex items-center justify-center gap-2 sm:gap-3 w-full bg-[#25D366] text-white font-display font-700 py-3.5 sm:py-4 rounded-xl hover:bg-[#1EB857] transition-colors text-sm sm:text-base"
              >
                <WaIcon />
                Chat with us on WhatsApp
              </a>
            </div>
          </RevealDiv>

          {/* Right — form */}
          <RevealDiv delay={150}>
            <div className="bg-cream border border-cream-dark rounded-2xl p-5 sm:p-7">
              <h3 className="font-display font-700 text-charcoal text-lg sm:text-xl mb-1">Send us a message</h3>
              <p className="font-body text-charcoal-light text-sm mb-5 sm:mb-6">Bulk orders, feedback, allergies — let us know.</p>

              {sent ? (
                <div className="text-center py-8 sm:py-10">
                  <div className="text-4xl sm:text-5xl mb-3">🌿</div>
                  <h4 className="font-display font-700 text-forest text-lg sm:text-xl mb-2">Message received!</h4>
                  <p className="font-body text-charcoal-light text-sm">We'll get back to you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-body text-charcoal text-sm font-500 block mb-1.5">Your name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Rahul Sharma"
                      className="w-full bg-white border border-cream-dark rounded-xl px-4 py-3 text-sm font-body text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition"
                    />
                  </div>
                  <div>
                    <label className="font-body text-charcoal text-sm font-500 block mb-1.5">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-white border border-cream-dark rounded-xl px-4 py-3 text-sm font-body text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition"
                    />
                  </div>
                  <div>
                    <label className="font-body text-charcoal text-sm font-500 block mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="I'd like to place a bulk order for 20 people..."
                      className="w-full bg-white border border-cream-dark rounded-xl px-4 py-3 text-sm font-body text-charcoal placeholder-charcoal-light/50 focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-forest text-cream font-display font-700 py-3.5 rounded-xl hover:bg-forest-light transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}
