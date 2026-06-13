import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLink = (href) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-cream shadow-md py-3' : 'bg-forest/90 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={() => handleLink('#home')} className="flex items-center gap-2 group flex-shrink-0">
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-colors ${
              scrolled ? 'bg-forest group-hover:bg-forest-light' : 'bg-mint/20 border border-mint/40 group-hover:bg-mint/30'
            }`}>
              <Leaf size={16} className={scrolled ? 'text-mint' : 'text-mint'} />
            </div>
            <span className={`font-display font-800 text-lg sm:text-xl tracking-tight transition-colors ${
              scrolled ? 'text-forest' : 'text-cream'
            }`}>
              Green<span className="text-gold">Leaf</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`font-body text-sm font-500 transition-colors relative group ${
                    scrolled
                      ? 'text-charcoal hover:text-forest'
                      : 'text-cream/90 hover:text-cream'
                  }`}
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className={`text-sm font-display font-600 px-4 py-2.5 rounded-full transition-colors ${
                  scrolled
                    ? 'bg-forest text-cream hover:bg-forest-light'
                    : 'bg-gold text-forest hover:bg-gold-light'
                }`}
              >
                Order Now
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-forest hover:bg-forest/10' : 'text-cream hover:bg-mint/20'
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-cream shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-cream-dark bg-forest">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-mint/20 border border-mint/30 flex items-center justify-center">
                <Leaf size={15} className="text-mint" />
              </div>
              <span className="font-display font-800 text-cream text-lg">Green<span className="text-gold">Leaf</span></span>
            </div>
            <button onClick={() => setOpen(false)} className="text-cream/70 hover:text-cream p-1">
              <X size={20} />
            </button>
          </div>

          {/* Drawer links */}
          <nav className="px-5 py-6">
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); handleLink(l.href); }}
                    className="block px-4 py-3 rounded-xl font-body text-base text-charcoal hover:bg-forest/5 hover:text-forest transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-cream-dark">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleLink('#contact'); }}
                className="block w-full text-center bg-forest text-cream font-display font-700 py-3.5 rounded-xl hover:bg-forest-light transition-colors"
              >
                Order Now
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20GreenLeaf%20Caf%C3%A9!"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-display font-700 py-3.5 rounded-xl hover:bg-[#1EB857] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.103 1.504 5.832L.057 23.032a.75.75 0 0 0 .92.92l5.195-1.447A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.888 9.888 0 0 1-5.031-1.371l-.36-.214-3.735 1.04 1.04-3.737-.234-.374A9.861 9.861 0 0 1 2.1 12C2.1 6.532 6.532 2.1 12 2.1S21.9 6.532 21.9 12 17.468 21.9 12 21.9z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
