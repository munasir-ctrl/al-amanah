import { useState } from 'react';
import { MessageCircle, X, Phone, MapPin, Stethoscope, Tag, Shield, User } from 'lucide-react';
import { whatsappQuickOptions } from '@/lib/whatsapp';

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-20 lg:bottom-6 right-4 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-premium transition-all duration-300 hover:scale-110 ${open ? 'rotate-90' : ''}`}
        aria-label="WhatsApp quick options"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        )}
      </button>

      {/* Quick options panel */}
      {open && (
        <div className="fixed bottom-36 lg:bottom-24 right-4 z-40 w-72 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-premium border border-navy-100 overflow-hidden animate-scale-in">
          <div className="bg-[#25D366] px-4 py-3">
            <p className="text-white font-semibold text-sm">How can we help?</p>
            <p className="text-white/80 text-xs">Choose an option to start a WhatsApp chat</p>
          </div>
          <div className="py-1">
            {whatsappQuickOptions.map((opt, i) => {
              const icon = [Stethoscope, User, Tag, Shield, MessageCircle, MapPin][i];
              const Icon = icon || MessageCircle;
              return (
                <a
                  key={opt.label}
                  href={`https://wa.me/${opt.number}?text=${encodeURIComponent(opt.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-navy-50 transition-colors border-b border-navy-50 last:border-0"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-50 text-accent-600 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-navy-700">{opt.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-navy-100 shadow-premium">
      <div className="grid grid-cols-3">
        <a href="tel:+97165615545" className="flex flex-col items-center justify-center py-2.5 text-navy-700 hover:bg-navy-50 transition-colors">
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-xs font-semibold">Call</span>
        </a>
        <a
          href="https://wa.me/971506379389"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 text-[#1da851] hover:bg-accent-50 transition-colors border-x border-navy-100"
        >
          <MessageCircle className="w-5 h-5 mb-0.5" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        <a
          href="/book"
          className="flex flex-col items-center justify-center py-2.5 text-primary-700 hover:bg-primary-50 transition-colors"
        >
          <Stethoscope className="w-5 h-5 mb-0.5" />
          <span className="text-xs font-semibold">Book</span>
        </a>
      </div>
    </div>
  );
}
