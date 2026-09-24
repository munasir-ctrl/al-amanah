import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';
import { Link } from 'react-router-dom';

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-lg hover:bg-[#1da851] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-semibold px-0 group-hover:px-2">
        Chat with us
      </span>
    </a>
  );
}

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-navy-100 px-3 py-2 flex items-center justify-around gap-2 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-navy-700 hover:text-primary-600 hover:bg-primary-50 active:scale-95 transition-all text-xs font-medium"
      >
        <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-0.5">
          <Phone className="w-4 h-4" />
        </div>
        <span>Call Now</span>
      </a>

      <a
        href={buildWhatsAppUrl(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#25D366] hover:bg-[#25D366]/10 active:scale-95 transition-all text-xs font-medium"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-0.5">
          <MessageCircle className="w-4 h-4 fill-current" />
        </div>
        <span>WhatsApp</span>
      </a>

      <Link
        to="/book"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-white bg-primary-600 hover:bg-primary-700 active:scale-95 transition-all text-xs font-semibold shadow-sm"
      >
        <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center mb-0.5">
          <Calendar className="w-4 h-4" />
        </div>
        <span>Book Slot</span>
      </Link>
    </div>
  );
}