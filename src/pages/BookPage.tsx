import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MessageCircle, Phone, Check, ChevronLeft, ChevronRight, Plus, Download } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { services } from '@/data/services';
import { doctors } from '@/data/doctors';
import { siteConfig } from '@/data/siteConfig';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';

const steps = ['Department', 'Doctor', 'Service', 'Date', 'Time', 'Details', 'Confirmation'];

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
];

export function BookPage() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    department: '',
    doctor: searchParams.get('doctor') || '',
    service: searchParams.get('service') || '',
    date: '',
    time: '',
    name: '',
    mobile: '',
    email: '',
  });

  const departments = [
    { id: 'Dental', label: 'Dental Care', desc: 'Dentistry, orthodontics, cosmetic dentistry' },
    { id: 'Medical', label: 'Medical Care', desc: 'Internal medicine, ENT, cardiology, pediatrics' },
  ];

  const filteredDoctors = data.department
    ? doctors.filter((d) => d.category === data.department || (data.department === 'Medical' && ['Internal Medicine', 'ENT', 'Cardiology', 'Pediatrics', 'General Practice', 'Homoeopathy'].includes(d.category)))
    : doctors;
  const filteredServices = data.department
    ? services.filter((s) => s.category === data.department)
    : services;

  const canProceed = () => {
    if (step === 0) return !!data.department;
    if (step === 1) return !!data.doctor;
    if (step === 2) return !!data.service;
    if (step === 3) return !!data.date;
    if (step === 4) return !!data.time;
    if (step === 5) return !!data.name && !!data.mobile;
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(6);
  };

  const selectedDoctor = doctors.find((d) => d.slug === data.doctor);
  const selectedService = services.find((s) => s.slug === data.service);

  const generateCalendarLink = () => {
    const dt = new Date(`${data.date}T${data.time}`);
    const end = new Date(dt.getTime() + 30 * 60000);
    const text = `Appointment at Al Amanah Medical Center`;
    const details = `Doctor: ${selectedDoctor?.name || 'Any'}\nService: ${selectedService?.title || ''}`;
    const dates = `${dt.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${end.toISOString().replace(/[-:]/g, '').split('.')[0]}Z`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(text)}&dates=${dates}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(siteConfig.address.full)}`;
  };

  return (
    <>
      <SEO
        title="Book an Appointment — Al Amanah Medical Center Sharjah"
        description="Book an appointment online at Al Amanah Medical Center in Sharjah. Choose your department, doctor, service, date, and time."
        canonical="/book"
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
              Online Booking
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-3 tracking-tight">Book an Appointment</h1>
            <p className="text-sm md:text-base text-navy-500 leading-relaxed">
              Submit your appointment request below. Our team will contact you shortly via phone or WhatsApp to confirm your slot.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-app max-w-3xl">
          {/* Progress Bar */}
          {step < 6 && (
            <div className="flex items-center justify-center gap-1 mb-10 overflow-x-auto scrollbar-hide pb-2">
              {steps.slice(0, 6).map((s, i) => (
                <div key={s} className="flex items-center shrink-0">
                  <div className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                    i === step ? 'bg-primary-600 text-white shadow-sm shadow-primary-600/30' : i < step ? 'bg-accent-50 border border-accent-200 text-accent-700' : 'bg-navy-50 text-navy-400'
                  }`}>
                    <span className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold ${i === step ? 'bg-white/20 text-white' : i < step ? 'bg-accent-500 text-white' : 'bg-navy-200 text-navy-600'}`}>
                      {i < step ? <Check className="w-3 h-3 stroke-[3]" /> : i + 1}
                    </span>
                    <span className="hidden sm:inline">{s}</span>
                  </div>
                  {i < 5 && <ChevronRight className="w-4 h-4 text-navy-300 mx-1 shrink-0" />}
                </div>
              ))}
            </div>
          )}

          <div className="card p-6 md:p-10 bg-white border border-navy-100 shadow-soft rounded-3xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
              >
                {/* Step 0: Department */}
                {step === 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-navy-900 mb-2">Choose Department</h2>
                    <p className="text-sm text-navy-500 mb-6">Select the medical department or specialty you need.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {departments.map((dept) => (
                        <motion.button
                          key={dept.id}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setData({ ...data, department: dept.id })}
                          className={`p-6 rounded-2xl border-2 text-left transition-all ${
                            data.department === dept.id
                              ? 'border-primary-500 bg-primary-50/60 shadow-sm'
                              : 'border-navy-100 hover:border-navy-200 bg-white'
                          }`}
                        >
                          <h3 className="text-lg font-bold text-navy-900 mb-1">{dept.label}</h3>
                          <p className="text-xs text-navy-500 leading-relaxed">{dept.desc}</p>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 1: Doctor */}
                {step === 1 && (
                  <div>
                    <h2 className="text-xl font-bold text-navy-900 mb-2">Choose Doctor</h2>
                    <p className="text-sm text-navy-500 mb-6">Select your preferred practitioner or choose no preference.</p>
                    <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                      {filteredDoctors.map((doc) => (
                        <motion.button
                          key={doc.slug}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => setData({ ...data, doctor: doc.slug })}
                          className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                            data.doctor === doc.slug
                              ? 'border-primary-500 bg-primary-50/60 shadow-sm'
                              : 'border-navy-100 hover:border-navy-200 bg-white'
                          }`}
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-100 to-primary-100 flex items-center justify-center shrink-0">
                            <span className="text-lg font-bold text-primary-700">{doc.name.replace('Dr. ', '').charAt(0)}</span>
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-navy-900">{doc.name}</h3>
                            <p className="text-xs text-navy-500">{doc.specialty}</p>
                          </div>
                        </motion.button>
                      ))}
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => setData({ ...data, doctor: 'any' })}
                        className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                          data.doctor === 'any'
                            ? 'border-primary-500 bg-primary-50/60 shadow-sm'
                            : 'border-navy-100 hover:border-navy-200 bg-white'
                        }`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center shrink-0">
                          <Plus className="w-5 h-5 text-navy-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-navy-900">No Preference</h3>
                          <p className="text-xs text-navy-500">First available doctor in this department</p>
                        </div>
                      </motion.button>
                    </div>
                  </div>
                )}

                {/* Step 2: Service */}
                {step === 2 && (
                  <div>
                    <h2 className="text-xl font-bold text-navy-900 mb-2">Choose Service</h2>
                    <p className="text-sm text-navy-500 mb-6">Select the specific treatment or consultation required.</p>
                    <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                      {filteredServices.map((srv) => (
                        <motion.button
                          key={srv.slug}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => setData({ ...data, service: srv.slug })}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 text-left transition-all ${
                            data.service === srv.slug
                              ? 'border-primary-500 bg-primary-50/60 shadow-sm'
                              : 'border-navy-100 hover:border-navy-200 bg-white'
                          }`}
                        >
                          <div className="pr-4">
                            <h3 className="text-sm font-bold text-navy-900 mb-1">{srv.title}</h3>
                            <p className="text-xs text-navy-500 line-clamp-1">{srv.shortDescription}</p>
                          </div>
                          {srv.price && <span className="text-sm font-bold text-primary-700 shrink-0 bg-primary-50 px-3 py-1.5 rounded-xl">{srv.price}</span>}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Date */}
                {step === 3 && (
                  <div>
                    <h2 className="text-xl font-bold text-navy-900 mb-2">Choose Date</h2>
                    <p className="text-sm text-navy-500 mb-6">Select your preferred date for the appointment.</p>
                    <div className="max-w-md mx-auto">
                      <input
                        type="date"
                        value={data.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setData({ ...data, date: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-navy-200 bg-white text-navy-900 font-medium focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Time */}
                {step === 4 && (
                  <div>
                    <h2 className="text-xl font-bold text-navy-900 mb-2">Choose Time Slot</h2>
                    <p className="text-sm text-navy-500 mb-6">Select your preferred consultation time.</p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                      {timeSlots.map((slot) => (
                        <motion.button
                          key={slot}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setData({ ...data, time: slot })}
                          className={`py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                            data.time === slot
                              ? 'bg-primary-600 text-white shadow-md shadow-primary-600/30'
                              : 'bg-navy-50 text-navy-700 hover:bg-navy-100 border border-navy-100/50'
                          }`}
                        >
                          {slot}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Details */}
                {step === 5 && (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-xl font-bold text-navy-900 mb-2">Your Contact Details</h2>
                    <p className="text-sm text-navy-500 mb-6">Provide your contact info so we can verify and confirm your booking.</p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={data.name}
                          onChange={(e) => setData({ ...data, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all shadow-sm text-sm"
                          placeholder="e.g. Ahmed Al Mansoori"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          value={data.mobile}
                          onChange={(e) => setData({ ...data, mobile: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all shadow-sm text-sm"
                          placeholder="e.g. 050 123 4567"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy-700 mb-1.5">Email Address (Optional)</label>
                        <input
                          type="email"
                          value={data.email}
                          onChange={(e) => setData({ ...data, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all shadow-sm text-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-full mt-6 shadow-md py-3.5">
                      Submit Appointment Request
                    </button>
                  </form>
                )}

                {/* Step 6: Confirmation */}
                {step === 6 && (
                  <div className="text-center py-4">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent-50 border border-accent-200 mx-auto mb-6 shadow-sm">
                      <Check className="w-10 h-10 text-accent-600 stroke-[2.5]" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900 mb-2">Request Received Successfully!</h2>
                    <p className="text-sm text-navy-500 mb-8 max-w-md mx-auto">Our reception team will review your appointment request and reach out shortly to confirm.</p>

                    <div className="card p-6 text-left max-w-md mx-auto mb-8 bg-navy-50/70 border border-navy-100 rounded-2xl shadow-sm">
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between border-b border-navy-100/60 pb-2"><span className="text-navy-400 font-medium">Doctor</span><span className="font-bold text-navy-900">{selectedDoctor?.name || 'Any available specialist'}</span></div>
                        <div className="flex justify-between border-b border-navy-100/60 pb-2"><span className="text-navy-400 font-medium">Department</span><span className="font-bold text-navy-900">{data.department}</span></div>
                        <div className="flex justify-between border-b border-navy-100/60 pb-2"><span className="text-navy-400 font-medium">Service</span><span className="font-bold text-navy-900">{selectedService?.title || 'General Consultation'}</span></div>
                        <div className="flex justify-between border-b border-navy-100/60 pb-2"><span className="text-navy-400 font-medium">Date</span><span className="font-bold text-navy-900">{data.date}</span></div>
                        <div className="flex justify-between border-b border-navy-100/60 pb-2"><span className="text-navy-400 font-medium">Time</span><span className="font-bold text-navy-900">{data.time}</span></div>
                        <div className="flex justify-between"><span className="text-navy-400 font-medium">Contact</span><span className="font-bold text-navy-900">{data.mobile}</span></div>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                      <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp shadow-sm">
                        <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                      </a>
                      <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-primary shadow-sm">
                        <Phone className="w-4 h-4" /> Call Clinic
                      </a>
                      <a href={generateCalendarLink()} target="_blank" rel="noopener noreferrer" className="btn btn-outline bg-white shadow-sm">
                        <Download className="w-4 h-4" /> Add to Calendar
                      </a>
                    </div>
                    <Link to="/" className="inline-block text-xs font-semibold text-navy-500 hover:text-primary-700 transition-colors">Return to Homepage</Link>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            {step < 5 && (
              <div className="flex justify-between mt-10 pt-6 border-t border-navy-100">
                <button
                  onClick={() => setStep(Math.max(0, step - 1))}
                  disabled={step === 0}
                  className={`btn ${step === 0 ? 'btn-ghost opacity-40 cursor-not-allowed' : 'btn-outline bg-white'}`}
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={() => canProceed() && setStep(step + 1)}
                  disabled={!canProceed()}
                  className={`btn ${canProceed() ? 'btn-primary shadow-md' : 'btn-ghost opacity-40 cursor-not-allowed'}`}
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
            {step === 5 && (
              <div className="flex justify-between mt-10 pt-6 border-t border-navy-100">
                <button onClick={() => setStep(4)} className="btn btn-outline bg-white">
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}