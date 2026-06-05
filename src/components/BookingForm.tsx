import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Calendar, Hotel, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InquiryFormState } from '../types';

interface BookingFormProps {
  prefilledService?: string;
}

export default function BookingForm({ prefilledService = '' }: BookingFormProps) {
  const [formData, setFormData] = useState<InquiryFormState>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    hotelName: '',
    serviceType: prefilledService || 'hotel-shootings',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: prefilledService
      }));
    }
  }, [prefilledService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        hotelName: '',
        serviceType: 'hotel-shootings',
        details: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-zinc-950 relative border-t border-zinc-900/50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
          
          {/* Direct Contacts Info */}
          <div className="md:col-span-5 flex flex-col justify-between text-left">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-400 block mb-2">
                Inquire
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mb-4">
                Let’s Preserve <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-amber-250 italic">
                  Your Legacy
                </span>
              </h2>
              <p className="text-zinc-400 font-light text-xs sm:text-sm leading-relaxed mb-6">
                To guarantee absolute privacy and elite planning inside Crete's luxury resorts, we book exclusively on-site. Contact us below to receive custom tailored rates.
              </p>
            </div>

            <div className="flex flex-col gap-3.5 mb-6 md:mb-0">
              <a
                id="contact-call-link"
                href="tel:+306977244788"
                className="flex items-center gap-4 p-4 bg-zinc-900/40 border border-zinc-900/80 rounded-xl hover:border-gold-400/20 hover:bg-zinc-900/70 transition-colors group"
              >
                <Phone className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block font-mono text-[8px] uppercase tracking-wider text-zinc-500">Call & Viber</span>
                  <span className="block text-xs font-semibold text-zinc-200 group-hover:text-gold-400 transition-colors mt-0.5">+30 697 724 4788</span>
                </div>
              </a>

              <a
                id="contact-email-link"
                href="mailto:photofan.crete@gmail.com"
                className="flex items-center gap-4 p-4 bg-zinc-900/40 border border-zinc-900/80 rounded-xl hover:border-gold-400/20 hover:bg-zinc-900/70 transition-colors group"
              >
                <Mail className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block font-mono text-[8px] uppercase tracking-wider text-zinc-500">Email Direct</span>
                  <span className="block text-xs font-semibold text-zinc-200 group-hover:text-gold-400 transition-colors mt-0.5 redact-email">photofan.crete@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 text-zinc-500">
                <MapPin className="w-4 h-4 text-zinc-650" />
                <span className="text-xs font-mono tracking-wide text-zinc-400">Hersonissos, Crete, Greece</span>
              </div>
            </div>
          </div>

          {/* Core Booking Form Sheet */}
          <div className="md:col-span-7">
            <div className="bg-zinc-900/35 border border-zinc-900 rounded-2xl p-6 sm:p-8 backdrop-blur-sm self-center">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    id="quote-request-form"
                    key="booking-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4 text-left"
                  >
                    {/* Guest residency banner */}
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#c5a059] block mb-1">
                      ★ Exclusive to Resort &amp; Hotel Grounds
                    </span>

                    {/* Name */}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="name-input" className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                        <input
                          id="name-input"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full bg-zinc-950 border border-zinc-900 hover:border-zinc-800 focus:border-gold-450/60 rounded-lg py-2.5 pl-9 pr-3 text-xs text-zinc-200 focus:outline-none focus:ring-0 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email / Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="email-input" className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                          <input
                            id="email-input"
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@example.com"
                            className="w-full bg-zinc-950 border border-zinc-900 hover:border-zinc-800 focus:border-gold-450/60 rounded-lg py-2.5 pl-9 pr-3 text-xs text-zinc-200 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label htmlFor="phone-input" className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Contact Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                          <input
                            id="phone-input"
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Mobile / WhatsApp / Viber"
                            className="w-full bg-zinc-950 border border-zinc-900 hover:border-zinc-800 focus:border-gold-450/60 rounded-lg py-2.5 pl-9 pr-3 text-xs text-zinc-200 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Date / Resort Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="date-input" className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Preferred Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                          <input
                            id="date-input"
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-450/60 rounded-lg py-2.5 pl-9 pr-3 text-xs text-zinc-300 focus:outline-none transition-colors appearance-none"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label htmlFor="hotel-input" className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Crete Resort Name</label>
                        <div className="relative">
                          <Hotel className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                          <input
                            id="hotel-input"
                            type="text"
                            name="hotelName"
                            required
                            value={formData.hotelName}
                            onChange={handleChange}
                            placeholder="e.g. Stella Island, Mitsis"
                            className="w-full bg-zinc-950 border border-zinc-900 hover:border-zinc-800 focus:border-gold-450/60 rounded-lg py-2.5 pl-9 pr-3 text-xs text-zinc-200 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Shoot type */}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="service-select" className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Inquiry Type</label>
                      <select
                        id="service-select"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-450/60 rounded-lg py-2.5 px-3 text-xs text-zinc-400 focus:outline-none cursor-pointer"
                      >
                        <option value="hotel-shootings">In-Resort Guest Photography</option>
                        <option value="golden-hour-shootings">Golden Hour Beach Sunset</option>
                        <option value="private-portraits">Bespoke Couples / Family Shoots</option>
                        <option value="price-quote">General Consultation & Rates</option>
                      </select>
                    </div>

                    {/* Brief text details */}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="details-textarea" className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Brief Message</label>
                      <textarea
                        id="details-textarea"
                        name="details"
                        rows={3}
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Tell us about yourselves, preferred times, or special requests..."
                        className="w-full bg-zinc-950 border border-zinc-900 focus:border-gold-450/60 rounded-lg p-3 text-xs text-zinc-250 focus:outline-none resize-none leading-relaxed"
                      />
                    </div>

                    <button
                      id="form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-450 hover:to-amber-550 text-zinc-950 font-bold text-xs uppercase tracking-widest py-3.5 rounded-lg flex items-center justify-center gap-1.5 transform active:scale-[0.99] transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    id="success-alert-box"
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 px-4 text-center flex flex-col items-center"
                  >
                    <div className="w-12 h-12 bg-gold-450/10 border border-gold-400/20 text-gold-400 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-6 h-6 animate-pulse" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2">Request Shared</h3>
                    <p className="text-zinc-400 text-xs max-w-sm font-light leading-relaxed mb-6">
                      Thank you. We have logged your request. Our team will verify resort availability and contact you shortly with direct bespoke options.
                    </p>
                    <button
                      id="reset-form-btn"
                      onClick={() => setIsSuccess(false)}
                      className="text-[10px] text-gold-400 hover:text-gold-300 font-mono uppercase tracking-widest cursor-pointer"
                    >
                      ← Submit another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
