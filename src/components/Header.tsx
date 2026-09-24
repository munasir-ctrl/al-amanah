import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { navLinks, siteConfig } from '@/data/siteConfig';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 sm:h-24 md:h-40 flex items-center ${
          scrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-soft border-b border-navy-100'
            : 'bg-white/95 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Logo - Prominent and sized up for mobile */}
          <Link to="/" className="flex items-center justify-center h-full my-auto overflow-visible py-1">
            <img
              src="/logo.png"
              alt={siteConfig.name || "Logo"}
              className="h-16 sm:h-20 md:h-36 w-auto object-contain max-w-[260px] sm:max-w-[340px] md:max-w-[500px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path ||
                (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active ? 'text-primary-700 bg-primary-50' : 'text-navy-700 hover:text-primary-700 hover:bg-navy-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-primary-700 transition-colors px-2"
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <a
              href={buildWhatsAppUrl(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex btn btn-whatsapp text-xs py-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <Link to="/book" className="hidden sm:flex btn btn-primary text-xs py-2">
              Book Appointment
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl text-navy-700 hover:bg-navy-50 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-premium animate-slide-in flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-navy-100 h-24">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center justify-center h-full">
                <img src="/logo.png" alt="Logo" className="h-16 object-contain w-auto max-w-[240px]" />
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl text-navy-700 hover:bg-navy-50" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      active ? 'text-primary-700 bg-primary-50' : 'text-navy-700 hover:bg-navy-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="p-4 border-t border-navy-100 space-y-2.5">
              <Link to="/book" className="btn btn-primary w-full text-sm py-2.5">Book Appointment</Link>
              <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full text-sm py-2.5">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-outline w-full text-sm py-2.5">
                <Phone className="w-4 h-4" /> {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}