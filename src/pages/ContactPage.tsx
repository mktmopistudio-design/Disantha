import React, { useState } from 'react';
import { PageId } from '../types';
import { DisanthaLogo } from '../components/DisanthaLogo';
import { MandalaBackground } from '../components/MandalaBackground';
import { 
  Mail, MapPin, Phone, Instagram, Send, CheckCircle2, 
  Sparkles, Clock, Globe, MessageSquare, ChevronDown 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId, subSection?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'ThetaHealing® Session',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  const contactFaqs = [
    {
      q: 'Where is the in-person sanctuary located?',
      a: 'Our private physical sanctuary is situated in Fort Lauderdale, Florida. The exact address and access instructions are provided upon booking confirmation to protect the sacred privacy of our clients.'
    },
    {
      q: 'Are online video sessions as powerful as in-person?',
      a: 'Yes, absolutely. Energy work and subconscious belief reprogramming operate outside physical space constraints. Clients connecting from Europe, South America, and across the US experience the exact same profound breakthroughs.'
    },
    {
      q: 'Can sessions be conducted in Portuguese?',
      a: 'Sim! Dani is fluent in Portuguese and English, and regularly facilitates sessions in both languages.'
    },
    {
      q: 'How far in advance should I book?',
      a: 'We recommend scheduling 1 to 2 weeks in advance, especially for weekend in-person sessions and womb rituals.'
    }
  ];

  return (
    <div className="bg-[#FAF5F0] min-h-screen py-12 relative overflow-hidden">
      <MandalaBackground position="center" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#3E322F] font-normal">
            Let's Connect
          </h1>
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="w-10 h-[1px] bg-[#C58580]/40" />
            <DisanthaLogo variant="mark" size="sm" />
            <div className="w-10 h-[1px] bg-[#C58580]/40" />
          </div>
          <p className="text-sm text-[#6E5652] max-w-md mx-auto">
            Have questions about an offering or feeling called to explore working together? We are here to support your journey.
          </p>
        </div>

        {/* Main Grid: Form on Left, Sanctuary Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white/80 rounded-3xl p-8 sm:p-10 border border-[#E8B4B0]/40 shadow-xs">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F7EDE8] border-2 border-[#C58580] text-[#B86B65] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#3E322F]">
                  Message Received with Love
                </h3>
                <p className="text-xs sm:text-sm text-[#6E5652] max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. Dani or our sanctuary team will respond to your message within 24 to 48 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold text-[#8E4A49] underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-[#3E322F]">
                <h3 className="font-serif text-2xl font-medium text-[#3E322F] mb-2">
                  Send a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#5C4A46] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-[#FAF5F0] border border-[#E8B4B0]/50 rounded-xl px-4 py-2.5 text-xs text-[#3E322F] focus:outline-hidden focus:border-[#B86B65]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#5C4A46] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-[#FAF5F0] border border-[#E8B4B0]/50 rounded-xl px-4 py-2.5 text-xs text-[#3E322F] focus:outline-hidden focus:border-[#B86B65]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#5C4A46] mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-[#FAF5F0] border border-[#E8B4B0]/50 rounded-xl px-4 py-2.5 text-xs text-[#3E322F] focus:outline-hidden focus:border-[#B86B65]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#5C4A46] mb-1">
                      What are you interested in?
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData(prev => ({ ...prev, serviceInterest: e.target.value }))}
                      className="w-full bg-[#FAF5F0] border border-[#E8B4B0]/50 rounded-xl px-4 py-2.5 text-xs text-[#3E322F] focus:outline-hidden focus:border-[#B86B65]"
                    >
                      <option value="ThetaHealing® Session">ThetaHealing® Session</option>
                      <option value="Usui Reiki Energy Balancing">Usui Reiki Energy Balancing</option>
                      <option value="Womb Care Ritual">Womb Care Ritual</option>
                      <option value="Mother's Blessing Ceremony">Mother's Blessing Ceremony</option>
                      <option value="Sacred Women's Circle">Sacred Women's Circle</option>
                      <option value="General Question / Other">General Question / Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#5C4A46] mb-1">
                    Your Message / Intentions *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share a little about what brings you to Disantha..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-[#FAF5F0] border border-[#E8B4B0]/50 rounded-xl p-3.5 text-xs text-[#3E322F] focus:outline-hidden focus:border-[#B86B65]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sanctuary Contact Information & Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Sanctuary Card 1 */}
            <div className="bg-[#F7EDE8] p-6 rounded-2xl border border-[#E8B4B0]/40 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-white text-[#8E4A49] shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#3E322F]">In-Person Sanctuary</h3>
                  <p className="text-xs text-[#7A6258]">Fort Lauderdale, Florida</p>
                </div>
              </div>
              <p className="text-xs text-[#6E5652] leading-relaxed">
                An intimate, candlelit container featuring herbal teas, organic ceremonial oils, and sound frequencies.
              </p>
            </div>

            {/* Sanctuary Card 2 */}
            <div className="bg-[#F7EDE8] p-6 rounded-2xl border border-[#E8B4B0]/40 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-white text-[#8E4A49] shadow-xs">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#3E322F]">Online Sanctuary</h3>
                  <p className="text-xs text-[#7A6258]">Worldwide via Zoom</p>
                </div>
              </div>
              <p className="text-xs text-[#6E5652] leading-relaxed">
                Connect from any corner of the globe in the comfort and privacy of your sacred home space.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="bg-white/80 p-6 rounded-2xl border border-[#E8B4B0]/40 space-y-3 text-xs text-[#5C4A46]">
              <h4 className="font-serif text-base font-semibold text-[#8E4A49]">Direct Contact</h4>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B86B65]" />
                <span>hello@disanthawellness.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#B86B65]" />
                <span>@disanthawellness</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B86B65]" />
                <span>Tuesday – Saturday (By Appointment)</span>
              </p>
            </div>

            {/* Instant Booking Trigger */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full bg-[#8E4A49] hover:bg-[#723635] text-[#FAF5F0] py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-colors text-center shadow-xs"
              >
                Instant Session Scheduler →
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-[#F7EDE8]/60 rounded-3xl p-8 sm:p-12 border border-[#E8B4B0]/40 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
              Helpful Clarity
            </span>
            <h2 className="font-serif text-3xl text-[#3E322F]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {contactFaqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/90 rounded-xl border border-[#E8B4B0]/40 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-[#3E322F] hover:text-[#8E4A49] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#B86B65] transition-transform duration-200 ${
                      openFaqIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === i && (
                  <div className="p-4 pt-0 text-xs sm:text-sm text-[#6E5652] leading-relaxed border-t border-[#E8B4B0]/20">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
