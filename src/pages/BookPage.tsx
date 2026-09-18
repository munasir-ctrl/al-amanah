import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
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
    { id: 'Dental', label: 'Dental Care' },
    { id: 'Medical', label: 'Medical Care' },
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
      <div className="bg-gradient-to-b from-navy-50 to-white py-12 md:py-16">
        <div className="container-app text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-600 mb-3 inline-block">Booking</span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">Book an Appointment</h1>
          <p className="text-base md:text-lg text-navy-500 max-w-2xl mx-auto">
            This is an appointment request. Our team will confirm your booking via phone or WhatsApp.
          </p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-app max-w-3xl">
          {/* Progress */}
          {step < 6 && (
            <div className="flex items-center justify-center gap-1 mb-10 overflow-x-auto scrollbar-hide pb-2">
              {steps.slice(0, 6).map((s, i) => (
                <div key={s} className="flex items-center shrink-0">
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    i === step ? 'bg-primary-600 text-white' : i < step ? 'bg-accent-100 text-accent-700' : 'bg-navy-50 text-navy-400'
                  }`}>
                    <span className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] ${i === step ? 'bg-white/20' : i < step ? 'bg-accent-500 text-white' : 'bg-navy-100'}`}>
                      {i < step ? <Check className="w-3 h-3" /> : i + 1}
                    </span>
                    {s}
                  </div>
                  {i < 5 && <ChevronRight className="w-4 h-4 text-navy-300 mx-0.5 shrink-0" />}
                </div>
              ))}
            </div>
          )}

          <div className="card p-6 md:p-8">
            {/* Step 0: Department */}
            {step === 0 && (
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-2">Choose Department</h2>
                <p className="text-sm text-navy-500 mb-6">Select the type of care you need.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {departments.map((dept) => (
                    <button key={dept.id} onClick={() => setData({ ...data, department: dept.id })}
                      className={`p-6 rounded-2xl border-2 text-left transition-all ${data.department === dept.id ? 'border-primary-500 bg-primary-50' : 'border-navy-100 hover:border-navy-200'}`}>
                      <h3 className="text-lg font-bold text-navy-900 mb-1">{dept.label}</h3>
                      <p className="text-sm text-navy-500">{dept.id === 'Dental' ? 'Dentistry, orthodontics, cosmetic dentistry' : 'Internal medicine, ENT, cardiology, pediatrics'}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Doctor */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-2">Choose Doctor</h2>
                <p className="text-sm text-navy-500 mb-6">Select your preferred doctor.</p>
                <div className="space-y-3">
                  {filteredDoctors.map((doc) => (
                    <button key={doc.slug} onClick={() => setData({ ...data, doctor: doc.slug })}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${data.doctor === doc.slug ? 'border-primary-500 bg-primary-50' : 'border-navy-100 hover:border-navy-200'}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-100 to-primary-100 flex items-center justify-center shrink-0">
                        <span className="text-lg font-bold text-primary-600">{doc.name.replace('Dr. ', '').charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-navy-900">{doc.name}</h3>
                        <p className="text-xs text-navy-500">{doc.specialty}</p>
                      </div>
                    </button>
                  ))}
                  <button onClick={() => setData({ ...data, doctor: 'any' })}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${data.doctor === 'any' ? 'border-primary-500 bg-primary-50' : 'border-navy-100 hover:border-navy-200'}`}>
                    <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center shrink-0">
                      <Plus className="w-5 h-5 text-navy-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-navy-900">No preference</h3>
                      <p className="text-xs text-navy-500">Any available doctor in this department</p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Service */}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-2">Choose Service</h2>
                <p className="text-sm text-navy-500 mb-6">What do you need help with?</p>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {filteredServices.map((srv) => (
                    <button key={srv.slug} onClick={() => setData({ ...data, service: srv.slug })}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border-2 text-left transition-all ${data.service === srv.slug ? 'border-primary-500 bg-primary-50' : 'border-navy-100 hover:border-navy-200'}`}>
                      <div>
                        <h3 className="text-sm font-bold text-navy-900">{srv.title}</h3>
                        <p className="text-xs text-navy-500">{srv.shortDescription}</p>
                      </div>
                      {srv.price && <span className="text-sm font-bold text-primary-700 shrink-0 ml-2">{srv.price}</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Date */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-2">Choose Date</h2>
                <p className="text-sm text-navy-500 mb-6">Select your preferred date.</p>
                <input type="date" value={data.date} min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setData({ ...data, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all" />
              </div>
            )}

            {/* Step 4: Time */}
            {step === 4 && (
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-2">Choose Time</h2>
                <p className="text-sm text-navy-500 mb-6">Select your preferred time slot.</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button key={slot} onClick={() => setData({ ...data, time: slot })}
                      className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${data.time === slot ? 'bg-primary-600 text-white' : 'bg-navy-50 text-navy-600 hover:bg-navy-100'}`}>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Details */}
            {step === 5 && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold text-navy-900 mb-2">Your Details</h2>
                <p className="text-sm text-navy-500 mb-6">We will contact you to confirm your appointment.</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1.5">Name *</label>
                    <input type="text" required value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1.5">Mobile Number *</label>
                    <input type="tel" required value={data.mobile} onChange={(e) => setData({ ...data, mobile: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="e.g. 050 123 4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-700 mb-1.5">Email (optional)</label>
                    <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                      placeholder="your@email.com" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-full mt-6">
                  Submit Appointment Request
                </button>
              </form>
            )}

            {/* Step 6: Confirmation */}
            {step === 6 && (
              <div className="text-center py-6">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent-50 mx-auto mb-6">
                  <Check className="w-10 h-10 text-accent-600" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900 mb-2">Your appointment request has been received.</h2>
                <p className="text-sm text-navy-500 mb-8">Our team will contact you shortly to confirm your appointment.</p>

                <div className="card p-5 text-left max-w-sm mx-auto mb-6 bg-navy-50 border-navy-100">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-navy-400">Doctor</span><span className="font-medium text-navy-700">{selectedDoctor?.name || 'Any available'}</span></div>
                    <div className="flex justify-between"><span className="text-navy-400">Department</span><span className="font-medium text-navy-700">{data.department}</span></div>
                    <div className="flex justify-between"><span className="text-navy-400">Service</span><span className="font-medium text-navy-700">{selectedService?.title || '-'}</span></div>
                    <div className="flex justify-between"><span className="text-navy-400">Date</span><span className="font-medium text-navy-700">{data.date}</span></div>
                    <div className="flex justify-between"><span className="text-navy-400">Time</span><span className="font-medium text-navy-700">{data.time}</span></div>
                    <div className="flex justify-between"><span className="text-navy-400">Contact</span><span className="font-medium text-navy-700">{data.mobile}</span></div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  <a href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="btn btn-primary">
                    <Phone className="w-4 h-4" /> Call
                  </a>
                  <a href={generateCalendarLink()} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <Download className="w-4 h-4" /> Add to Calendar
                  </a>
                </div>
                <Link to="/" className="inline-block mt-6 text-sm text-navy-400 hover:text-primary-700">Back to Home</Link>
              </div>
            )}

            {/* Navigation */}
            {step < 5 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-navy-50">
                <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}
                  className={`btn ${step === 0 ? 'btn-ghost opacity-50 cursor-not-allowed' : 'btn-outline'}`}>
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button onClick={() => canProceed() && setStep(step + 1)} disabled={!canProceed()}
                  className={`btn ${canProceed() ? 'btn-primary' : 'btn-ghost opacity-50 cursor-not-allowed'}`}>
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
            {step === 5 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-navy-50">
                <button onClick={() => setStep(4)} className="btn btn-outline">
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
