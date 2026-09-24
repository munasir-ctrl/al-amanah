import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

      {/* Header */}
      <div className="bg-gradient-to-b from-navy-50 via-white to-white py-12 md:py-16">
        <div className="container-app text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3.5 py-1 rounded-full bg-accent-50 border border-accent-100 text-accent-700 text-xs font-semibold uppercase tracking-wider mb-4 inline-block shadow-sm">
              Get in Touch
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 tracking-tight">Contact Us</h1>
            <p className="text-sm md:text-base text-navy-500 leading-relaxed">
              We are here to help you. Reach out via phone, WhatsApp, or drop us a message using the form below.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-6 tracking-tight">Contact Information</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-50/70 border border-navy-100/80 shadow-sm">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-100 text-primary-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-1">Clinic Address</p>
                    <p className="text-sm font-semibold text-navy-800 leading-relaxed">{siteConfig.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-50/70 border border-navy-100/80 shadow-sm">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-100 text-primary-700 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-1">Phone Numbers</p>
                    <a href={`tel:${siteConfig.phoneRaw}`} className="text-sm font-bold text-navy-900 hover:text-primary-700 transition-colors block mb-1">
                      {siteConfig.phone}
                    </a>
                    <p className="text-xs text-navy-500 font-medium">Dental: 056 467 1652 · ENT: 050 980 34 34</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-50/70 border border-navy-100/80 shadow-sm">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-100 text-primary-700 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-1">Email Address</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm font-bold text-navy-900 hover:text-primary-700 transition-colors break-all">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-50/70 border border-navy-100/80 shadow-sm">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-100 text-primary-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-1">Working Hours</p>
                    <div className="space-y-1">
                      {siteConfig.hours.map((h) => (
                        <p key={h.day} className="text-sm font-semibold text-navy-800 flex justify-between gap-4">
                          <span>{h.day}:</span> <span className="text-navy-600 font-normal">{h.time}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-primary shadow-md">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp shadow-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Chat
                </a>
                <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline bg-white shadow-sm">
                  <MapPin className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </motion.div>

            {/* Form Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6 md:p-8 bg-white border border-navy-100 shadow-soft rounded-3xl relative"
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-6 tracking-tight">Send Us a Message</h2>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-10"
                  >
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent-50 border border-accent-200 mx-auto mb-6 shadow-sm">
                      <Check className="w-10 h-10 text-accent-600 stroke-[2.5]" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-sm text-navy-500 mb-8 max-w-sm mx-auto">Thank you for reaching out. Our reception team will get back to you shortly.</p>
                    <button onClick={() => setSubmitted(false)} className="btn btn-outline bg-white shadow-sm">
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all shadow-sm text-sm"
                        placeholder="e.g. Fatima Al Ali"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.mobile}
                        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all shadow-sm text-sm"
                        placeholder="e.g. 050 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all shadow-sm text-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none shadow-sm text-sm"
                        placeholder="How can our team assist you?"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-full shadow-md py-3.5">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                    <p className="text-[11px] text-navy-400 text-center leading-relaxed pt-2">
                      Please note: We do not collect private medical diagnosis through this contact form. For health consultations, kindly book an appointment.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 bg-white">
        <div className="container-app">
          <div className="rounded-3xl overflow-hidden shadow-soft border border-navy-100">
            <iframe
              src={siteConfig.mapsEmbed}
              title="Al Amanah Medical Center location"
              className="w-full h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}