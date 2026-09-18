import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Mail, Clock, Facebook, ChevronRight } from 'lucide-react';
import { siteConfig, navLinks } from '@/data/siteConfig';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';
import { services } from '@/data/services';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-app py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white font-bold text-lg">
                A
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-base">AL AMANAH</span>
                <span className="text-primary-400 font-semibold text-xs tracking-wide uppercase">Medical Center</span>
              </div>
            </div>
            <p className="text-sm text-navy-300 leading-relaxed mb-5">
              Trusted healthcare in Sharjah since {siteConfig.established}. Medical and dental care delivered by experienced doctors with a patient-first approach.
            </p>
            <div className="flex gap-2">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-lg bg-navy-800 hover:bg-primary-600 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center justify-center w-9 h-9 rounded-lg bg-navy-800 hover:bg-primary-600 transition-colors" aria-label="Call">
                <Phone className="w-4 h-4 text-white" />
              </a>
              <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-lg bg-navy-800 hover:bg-[#25D366] transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-navy-300 hover:text-primary-400 transition-colors flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Services</h4>
            <ul className="space-y-2.5">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-navy-300 hover:text-primary-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <span className="text-navy-300">{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-navy-300 hover:text-primary-400 transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-navy-300 hover:text-primary-400 transition-colors break-all">{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <div className="text-navy-300">
                  {siteConfig.hours.map((h) => (
                    <div key={h.day}>{h.day}: {h.time}</div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-400">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-navy-400">
            <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-400 transition-colors">Terms & Conditions</Link>
            <Link to="/medical-disclaimer" className="hover:text-primary-400 transition-colors">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
