import { useState } from 'react';
import { MessageCircle, Smile, Stethoscope } from 'lucide-react';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';
import { siteConfig } from '@/data/siteConfig';

export function WhatsAppBookingToggle() {
  const [department, setDepartment] = useState<'general' | 'dental'>('general');

  const currentNumber = department === 'dental' ? '056 467 1652' : siteConfig.phone;
  const whatsappUrl = buildWhatsAppUrl(
    department, 
    department === 'dental' ? whatsappMessages.dental : whatsappMessages.general
  );

  return (
    <div className="bg-white rounded-2xl p-6 border border-navy-100 shadow-soft max-w-md mx-auto text-center">
      <h3 className="text-base font-bold text-navy-900 mb-2">Quick WhatsApp Booking</h3>
      <p className="text-xs text-navy-500 mb-4">Select a department to message our team directly:</p>

      {/* Department Toggle Buttons */}
      <div className="grid grid-cols-2 gap-2 p-1 bg-navy-50 rounded-xl mb-5">
        <button
          type="button"
          onClick={() => setDepartment('general')}
          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all ${
            department === 'general'
              ? 'bg-white text-navy-900 shadow-sm'
              : 'text-navy-500 hover:text-navy-900'
          }`}
        >
          <Stethoscope className="w-3.5 h-3.5 text-primary-600" />
          General & Medical
        </button>
        <button
          type="button"
          onClick={() => setDepartment('dental')}
          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all ${
            department === 'dental'
              ? 'bg-white text-navy-900 shadow-sm'
              : 'text-navy-500 hover:text-navy-900'
          }`}
        >
          <Smile className="w-3.5 h-3.5 text-accent-600" />
          Dental Care
        </button>
      </div>

      {/* Direct Action Link */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp w-full justify-center py-3 text-sm shadow-md hover:scale-[1.01] transition-transform"
      >
        <MessageCircle className="w-4 h-4" />
        Chat for {department === 'dental' ? 'Dental' : 'Medical'} Care ({currentNumber})
      </a>

      {/* Direct Phone Reference */}
      <div className="mt-4 pt-3 border-t border-navy-100/60 text-xs text-navy-500 flex flex-col gap-1">
        <span>Call Now: <strong className="text-navy-800">{siteConfig.phone}</strong></span>
        <span>For dental: <strong className="text-navy-800">056 467 1652</strong></span>
      </div>
    </div>
  );
}