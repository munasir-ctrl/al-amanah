import { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Shield, Check, MessageCircle, AlertCircle } from 'lucide-react';
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
        title="Insurance — Accepted Insurance Providers in Sharjah"
        description="Al Amanah Medical Center works with a wide range of insurance providers in Sharjah. Check your insurance coverage and submit your details online."
        canonical="/insurance"
      />
      <div className="bg-gradient-to-b from-primary-50 to-white py-12 md:py-16">
        <div className="container-app text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600 mb-3 inline-block">Insurance</span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">Your Insurance. Your Care. Made Simple.</h1>
          <p className="text-base md:text-lg text-navy-500 max-w-2xl mx-auto">
            We work with a wide range of insurance providers to make your healthcare accessible and affordable.
          </p>
        </div>
      </div>

      {/* Insurance Logos */}
      <section className="section bg-white">
        <div className="container-app">
          <h2 className="text-xl font-bold text-navy-900 text-center mb-8">Accepted Insurance Providers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {insuranceProviders.map((provider) => (
              <div key={provider} className="flex items-center justify-center px-4 py-5 rounded-xl bg-navy-50 border border-navy-100 hover:border-primary-200 hover:bg-primary-50 transition-colors">
                <span className="text-sm font-bold text-navy-700">{provider}</span>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-2 mt-6 max-w-2xl mx-auto">
            <AlertCircle className="w-4 h-4 text-navy-400 mt-0.5 shrink-0" />
            <p className="text-xs text-navy-400 italic text-center">{insuranceDisclaimer}</p>
          </div>
        </div>
      </section>

      {/* Insurance Check Form */}
      <section className="section bg-navy-50">
        <div className="container-app max-w-2xl">
          <div className="card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy-900">Check Your Insurance</h2>
                <p className="text-sm text-navy-500">Submit your details and our team will confirm your coverage.</p>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent-50 mx-auto mb-4">
                  <Check className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Request Received</h3>
                <p className="text-sm text-navy-500 mb-6">Our team will contact you shortly to confirm your insurance coverage.</p>
                <a href={buildWhatsAppUrl(whatsappMessages.insurance)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <MessageCircle className="w-4 h-4" /> Contact via WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-navy-700 mb-1.5">Insurance Provider *</label>
                  <select
                    required
                    value={form.provider}
                    onChange={(e) => setForm({ ...form, provider: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  >
                    <option value="">Select your provider</option>
                    {insuranceProviders.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-700 mb-1.5">Member / Card Number *</label>
                  <input
                    type="text"
                    required
                    value={form.memberNumber}
                    onChange={(e) => setForm({ ...form, memberNumber: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="e.g. 123456789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-700 mb-1.5">Department *</label>
                  <select
                    required
                    value={form.department}
                    onChange={(e) => setForm({ ...form, department: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  >
                    <option value="">Select department</option>
                    <option value="Dental">Dental</option>
                    <option value="Internal Medicine">Internal Medicine</option>
                    <option value="ENT">ENT</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Health Checkup">Health Checkup</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-700 mb-1.5">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="e.g. 050 123 4567"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  <Shield className="w-4 h-4" /> Check My Insurance
                </button>
                <p className="text-xs text-navy-400 text-center">
                  We only collect the minimum information needed to verify your coverage. We do not request medical details through this form.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
