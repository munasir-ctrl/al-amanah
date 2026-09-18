import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Check, Send } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { siteConfig } from '@/data/siteConfig';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', mobile: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Us — Al Amanah Medical Center Sharjah"
        description="Contact Al Amanah Medical Center in Sharjah. Call us, send a WhatsApp message, or visit us at Suite #308, Al Mubarak Center, Sharjah, UAE."
        canonical="/contact"
      />
      <div className="bg-gradient-to-b from-navy-50 to-white py-12 md:py-16">
        <div className="container-app text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600 mb-3 inline-block">Contact</span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">Get in Touch</h1>
          <p className="text-base md:text-lg text-navy-500 max-w-2xl mx-auto">
            We are here to help. Reach out via phone, WhatsApp, or the form below.
          </p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-6">Contact Information</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-navy-50">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-400">Address</p>
                    <p className="text-sm font-medium text-navy-700">{siteConfig.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-navy-50">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 shrink-0">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-400">Phone</p>
                    <a href={`tel:${siteConfig.phoneRaw}`} className="text-sm font-medium text-navy-700 hover:text-primary-700">{siteConfig.phone}</a>
                    <p className="text-xs text-navy-400 mt-1">Dental: 056 467 1652 · ENT: 050 980 34 34</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-navy-50">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 shrink-0">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-400">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm font-medium text-navy-700 hover:text-primary-700 break-all">{siteConfig.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-navy-50">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 shrink-0">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-400">Opening Hours</p>
                    {siteConfig.hours.map((h) => (
                      <p key={h.day} className="text-sm font-medium text-navy-700">{h.day}: {h.time}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-primary">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <MapPin className="w-4 h-4" /> Directions
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="card p-6 md:p-8">
              <h2 className="text-xl font-bold text-navy-900 mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent-50 mx-auto mb-4">
                    <Check className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">Message Sent</h3>
                  <p className="text-sm text-navy-500 mb-6">Thank you for reaching out. Our team will contact you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1.5">Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1.5">Mobile Number *</label>
                    <input type="tel" required value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="e.g. 050 123 4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1.5">Email (optional)</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1.5">Message *</label>
                    <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                      placeholder="How can we help you?" />
                  </div>
                  <button type="submit" className="btn btn-primary w-full">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                  <p className="text-xs text-navy-400 text-center">
                    We do not collect medical information through this form. Please do not share sensitive health details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 bg-white">
        <div className="container-app">
          <div className="rounded-2xl overflow-hidden shadow-soft border border-navy-100">
            <iframe src={siteConfig.mapsEmbed} title="Al Amanah Medical Center location" className="w-full h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
