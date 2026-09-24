import { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Shield, Check, MessageCircle, AlertCircle, Building, Hash, Stethoscope, PhoneCall } from 'lucide-react';
import { insuranceProviders, insuranceDisclaimer } from '@/data/insurance';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';

export function InsurancePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ provider: '', memberNumber: '', department: '', mobile: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Accepted Insurance Providers — Al Amanah Medical Center Sharjah"
        description="Check your insurance coverage at Al Amanah Medical Center in Sharjah. We work with leading insurance networks to provide seamless, affordable healthcare."
        canonical="/insurance"
      />

      {/* Classic Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 py-16 md:py-24 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="container-app relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-400/20 text-primary-300 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
            <Shield className="w-3.5 h-3.5" /> Comprehensive Coverage
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Your Insurance. Your Care. <span className="text-primary-400">Made Simple.</span>
          </h1>
          <p className="text-base md:text-lg text-navy-200/90 leading-relaxed max-w-2xl mx-auto">
            We partner with leading insurance networks across the UAE to ensure your medical and dental care remains seamless and accessible.
          </p>
        </div>
      </div>

      {/* Accepted Insurance Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-app">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">Accepted Insurance Partners</h2>
            <p className="text-sm text-navy-500">Browse our accepted network providers below or submit your card details for instant verification.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {insuranceProviders.map((provider) => (
              <div 
                key={provider} 
                className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-navy-50/70 border border-navy-100 hover:border-primary-300 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-navy-100 flex items-center justify-center text-primary-600 mb-3 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-xs md:text-sm font-bold text-navy-800 leading-snug">{provider}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2.5 mt-10 max-w-xl mx-auto p-4 rounded-xl bg-navy-50 border border-navy-100">
            <AlertCircle className="w-4 h-4 text-primary-600 shrink-0" />
            <p className="text-xs text-navy-500 italic text-center">{insuranceDisclaimer}</p>
          </div>
        </div>
      </section>

      {/* Insurance Check Form Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-navy-50/50">
        <div className="container-app max-w-xl">
          <div className="bg-white rounded-3xl shadow-xl border border-navy-100/80 p-6 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 shadow-inner">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-navy-900">Instant Coverage Check</h2>
                <p className="text-sm text-navy-500">Submit your details and our administration team will verify your policy.</p>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-10 animate-fade-in">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent-50 text-accent-600 mx-auto mb-5 shadow-sm border border-accent-100">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Request Submitted Successfully</h3>
                <p className="text-sm text-navy-500 max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you. Our insurance desk is reviewing your details and will contact you shortly to confirm coverage availability.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href={buildWhatsAppUrl(whatsappMessages.insurance)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-whatsapp inline-flex items-center justify-center gap-2 py-3 px-6 shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle className="w-5 h-5" /> Chat via WhatsApp Now
                  </a>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn bg-navy-100 text-navy-700 hover:bg-navy-200 py-3 px-6 transition-all"
                  >
                    Check Another Card
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-2">
                    Insurance Provider <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-navy-400">
                      <Building className="w-4 h-4" />
                    </span>
                    <select
                      required
                      value={form.provider}
                      onChange={(e) => setForm({ ...form, provider: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-navy-200 bg-navy-50/30 text-navy-900 font-medium focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                    >
                      <option value="">Select your insurance provider</option>
                      {insuranceProviders.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                      <option value="Other">Other Network Provider</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-2">
                    Member ID / Card Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-navy-400">
                      <Hash className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      value={form.memberNumber}
                      onChange={(e) => setForm({ ...form, memberNumber: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-navy-200 bg-navy-50/30 text-navy-900 font-medium focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                      placeholder="e.g. INS-987654321"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-2">
                    Required Department <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-navy-400">
                      <Stethoscope className="w-4 h-4" />
                    </span>
                    <select
                      required
                      value={form.department}
                      onChange={(e) => setForm({ ...form, department: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-navy-200 bg-navy-50/30 text-navy-900 font-medium focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                    >
                      <option value="">Select specialty department</option>
                      <option value="Dental">Dental Care</option>
                      <option value="Internal Medicine">Internal Medicine</option>
                      <option value="ENT">ENT (Ear, Nose, Throat)</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Health Checkup">Comprehensive Health Checkup</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-navy-400">
                      <PhoneCall className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      required
                      value={form.mobile}
                      onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-navy-200 bg-navy-50/30 text-navy-900 font-medium focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                      placeholder="e.g. 050 123 4567"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-full py-4 text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mt-2"
                >
                  <Shield className="w-5 h-5" /> Verify My Coverage Now
                </button>

                <p className="text-xs text-navy-400 text-center leading-relaxed pt-2">
                  🔒 We adhere to strict privacy guidelines. We only request basic identification and card info to confirm eligibility. No personal medical notes are gathered via this form.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}