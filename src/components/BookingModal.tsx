import React, { useState, useEffect } from 'react';
import { servicesData, upcomingEventsData } from '../data/servicesData';
import { BookingState } from '../types';
import { DisanthaLogo } from './DisanthaLogo';
import { 
  X, Check, Calendar, Clock, MapPin, Globe, Sparkles, User, Mail, Phone, 
  CreditCard, ShieldCheck, Heart, ArrowRight, ArrowLeft, Download, CheckCircle2 
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [booking, setBooking] = useState<BookingState>({
    serviceId: servicesData[0].id,
    serviceTitle: servicesData[0].title,
    servicePrice: servicesData[0].price,
    serviceDuration: servicesData[0].duration,
    serviceCategory: servicesData[0].category,
    deliveryType: 'online',
    date: '2026-09-04',
    timeSlot: '11:00 AM EST',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    intentions: '',
    experienceWithEnergyWork: 'First time exploring',
    preferredLanguage: 'english',
    paymentMethod: 'card',
    confirmed: false,
    bookingRef: ''
  });

  useEffect(() => {
    if (preselectedServiceId) {
      const match = servicesData.find(s => s.id === preselectedServiceId);
      if (match) {
        setBooking(prev => ({
          ...prev,
          serviceId: match.id,
          serviceTitle: match.title,
          servicePrice: match.price,
          serviceDuration: match.duration,
          serviceCategory: match.category,
          deliveryType: match.format === 'In-Person Sanctuary Only' ? 'in-person' : 'online'
        }));
      }
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const currentService = servicesData.find(s => s.id === booking.serviceId) || servicesData[0];

  const availableDates = [
    { label: 'Fri, Sep 4', value: '2026-09-04' },
    { label: 'Sat, Sep 5', value: '2026-09-05' },
    { label: 'Tue, Sep 8', value: '2026-09-08' },
    { label: 'Thu, Sep 10', value: '2026-09-10' },
    { label: 'Sat, Sep 12', value: '2026-09-12' },
    { label: 'Wed, Sep 16', value: '2026-09-16' },
  ];

  const availableSlots = [
    '10:00 AM EST',
    '11:30 AM EST',
    '2:00 PM EST',
    '3:45 PM EST',
    '5:30 PM EST'
  ];

  const handleSelectService = (service: typeof servicesData[0]) => {
    setBooking(prev => ({
      ...prev,
      serviceId: service.id,
      serviceTitle: service.title,
      servicePrice: service.price,
      serviceDuration: service.duration,
      serviceCategory: service.category,
      deliveryType: service.format === 'In-Person Sanctuary Only' ? 'in-person' : prev.deliveryType
    }));
  };

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'DIS-' + Math.floor(100000 + Math.random() * 900000);
    setBooking(prev => ({
      ...prev,
      confirmed: true,
      bookingRef: randomRef
    }));
    setCurrentStep(6);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2D2321]/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FAF5F0] w-full max-w-4xl rounded-2xl shadow-2xl border border-[#E8B4B0]/40 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="bg-[#F7EDE8] px-6 py-4 border-b border-[#E8B4B0]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <DisanthaLogo variant="mark" size="sm" />
            <div>
              <h3 className="font-serif text-lg font-bold text-[#8E4A49] tracking-wider uppercase">
                Begin Your Healing Journey
              </h3>
              <p className="text-xs text-[#7A6258]">
                {booking.confirmed ? 'Booking Confirmed' : `Step ${currentStep} of 5: ${
                  currentStep === 1 ? 'Select Experience' :
                  currentStep === 2 ? 'Choose Location & Date' :
                  currentStep === 3 ? 'Personal Intake' :
                  currentStep === 4 ? 'Session Preparation' :
                  'Confirmation & Reservation'
                }`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#7A6258] hover:text-[#B86B65] hover:bg-[#E8B4B0]/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar (when not yet confirmed) */}
        {!booking.confirmed && (
          <div className="w-full bg-[#EFE3D8] h-1.5">
            <div 
              className="bg-[#C58580] h-full transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-[#3E322F]">
          {/* STEP 1: Select Service */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center max-w-lg mx-auto">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#B86B65] uppercase">
                  Sacred Offerings
                </span>
                <h4 className="font-serif text-2xl text-[#3E322F] mt-1 font-normal">
                  Which experience calls to your soul today?
                </h4>
                <p className="text-xs text-[#6E5652] mt-1.5">
                  Each offering is held with deep intuitive presence and trauma-informed devotion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {servicesData.map((service) => {
                  const isSelected = booking.serviceId === service.id;
                  return (
                    <div
                      key={service.id}
                      onClick={() => handleSelectService(service)}
                      className={`cursor-pointer p-4.5 rounded-xl border transition-all duration-200 relative text-left flex flex-col justify-between ${
                        isSelected 
                          ? 'border-[#C58580] bg-[#F7EDE8]/80 shadow-md ring-1 ring-[#C58580]' 
                          : 'border-[#E8B4B0]/40 bg-white/70 hover:bg-[#FAF5F0] hover:border-[#C58580]/50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E8B4B0]/30 text-[#8E4A49]">
                            {service.category === 'private' ? 'Private Session' : service.category === 'rituals' ? 'Sacred Ritual' : 'Community Circle'}
                          </span>
                          <span className="font-serif font-bold text-base text-[#8E4A49]">
                            {service.price}
                          </span>
                        </div>

                        <h5 className="font-serif text-lg font-medium text-[#3E322F] mt-2 leading-snug">
                          {service.title}
                        </h5>
                        <p className="text-xs text-[#6E5652] mt-1 line-clamp-2 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#E8B4B0]/20 flex items-center justify-between text-[11px] text-[#7A6258]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#B86B65]" />
                          {service.duration}
                        </span>
                        <span className="flex items-center gap-1 text-[#B86B65] font-medium">
                          {service.format}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Continue to Date & Time</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Choose Delivery Mode & Schedule */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center max-w-lg mx-auto">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#B86B65] uppercase">
                  Sanctuary & Date
                </span>
                <h4 className="font-serif text-2xl text-[#3E322F] mt-1 font-normal">
                  How and when would you like to receive?
                </h4>
              </div>

              {/* Delivery Option */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setBooking(prev => ({ ...prev, deliveryType: 'online' }))}
                  disabled={currentService.format === 'In-Person Sanctuary Only'}
                  className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${
                    booking.deliveryType === 'online'
                      ? 'border-[#C58580] bg-[#F7EDE8] ring-1 ring-[#C58580]'
                      : currentService.format === 'In-Person Sanctuary Only'
                        ? 'opacity-40 cursor-not-allowed bg-gray-100 border-gray-200'
                        : 'border-[#E8B4B0]/40 bg-white/70 hover:bg-[#FAF5F0]'
                  }`}
                >
                  <div className="p-2 rounded-full bg-[#E8B4B0]/30 text-[#8E4A49]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-[#3E322F]">Online Sanctuary (Worldwide)</p>
                    <p className="text-xs text-[#7A6258] mt-0.5">High-definition private video session via Zoom from the comfort of your home.</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setBooking(prev => ({ ...prev, deliveryType: 'in-person' }))}
                  className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${
                    booking.deliveryType === 'in-person'
                      ? 'border-[#C58580] bg-[#F7EDE8] ring-1 ring-[#C58580]'
                      : 'border-[#E8B4B0]/40 bg-white/70 hover:bg-[#FAF5F0]'
                  }`}
                >
                  <div className="p-2 rounded-full bg-[#E8B4B0]/30 text-[#8E4A49]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-[#3E322F]">In-Person Sanctuary (Florida)</p>
                    <p className="text-xs text-[#7A6258] mt-0.5">Intimate healing space located in Fort Lauderdale, Florida with botanical altar and teas.</p>
                  </div>
                </button>
              </div>

              {/* Date & Time Selector */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-[#8E4A49] uppercase mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#B86B65]" />
                    Select Date
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {availableDates.map(d => (
                      <button
                        key={d.value}
                        type="button"
                        onClick={() => setBooking(prev => ({ ...prev, date: d.value }))}
                        className={`p-3 rounded-lg text-xs font-medium text-center border transition-all ${
                          booking.date === d.value
                            ? 'bg-[#C58580] text-[#FAF5F0] border-[#C58580] shadow-xs'
                            : 'bg-white/80 border-[#E8B4B0]/40 text-[#5C4A46] hover:border-[#C58580]'
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wider text-[#8E4A49] uppercase mb-2 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#B86B65]" />
                    Select Time Slot
                  </label>
                  <div className="space-y-2">
                    {availableSlots.map(slot => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setBooking(prev => ({ ...prev, timeSlot: slot }))}
                        className={`w-full p-2.5 rounded-lg text-xs font-medium text-left px-4 border flex items-center justify-between transition-all ${
                          booking.timeSlot === slot
                            ? 'bg-[#C58580] text-[#FAF5F0] border-[#C58580] shadow-xs'
                            : 'bg-white/80 border-[#E8B4B0]/40 text-[#5C4A46] hover:border-[#C58580]'
                        }`}
                      >
                        <span>{slot}</span>
                        {booking.timeSlot === slot && <Check className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-5 py-2.5 text-xs text-[#7A6258] hover:text-[#3E322F] flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Continue to Intake</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Intake Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center max-w-lg mx-auto">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#B86B65] uppercase">
                  Your Sacred Container
                </span>
                <h4 className="font-serif text-2xl text-[#3E322F] mt-1 font-normal">
                  Tell Dani about your heart and intentions
                </h4>
              </div>

              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#5C4A46] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={booking.clientName}
                      onChange={e => setBooking(prev => ({ ...prev, clientName: e.target.value }))}
                      className="w-full bg-white/90 border border-[#E8B4B0]/60 rounded-xl px-4 py-2.5 text-xs text-[#3E322F] focus:outline-hidden focus:border-[#B86B65]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#5C4A46] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={booking.clientEmail}
                      onChange={e => setBooking(prev => ({ ...prev, clientEmail: e.target.value }))}
                      className="w-full bg-white/90 border border-[#E8B4B0]/60 rounded-xl px-4 py-2.5 text-xs text-[#3E322F] focus:outline-hidden focus:border-[#B86B65]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#5C4A46] mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={booking.clientPhone}
                      onChange={e => setBooking(prev => ({ ...prev, clientPhone: e.target.value }))}
                      className="w-full bg-white/90 border border-[#E8B4B0]/60 rounded-xl px-4 py-2.5 text-xs text-[#3E322F] focus:outline-hidden focus:border-[#B86B65]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#5C4A46] mb-1">
                      Preferred Session Language
                    </label>
                    <select
                      value={booking.preferredLanguage}
                      onChange={e => setBooking(prev => ({ ...prev, preferredLanguage: e.target.value as any }))}
                      className="w-full bg-white/90 border border-[#E8B4B0]/60 rounded-xl px-4 py-2.5 text-xs text-[#3E322F] focus:outline-hidden focus:border-[#B86B65]"
                    >
                      <option value="english">English</option>
                      <option value="portugues">Português (Portuguese)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#5C4A46] mb-1">
                    What is your core intention for this session? (What are you moving through or longing to heal?)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g., Releasing emotional tension, ancestral healing, breaking feelings of self-doubt, womb reconnection..."
                    value={booking.intentions}
                    onChange={e => setBooking(prev => ({ ...prev, intentions: e.target.value }))}
                    className="w-full bg-white/90 border border-[#E8B4B0]/60 rounded-xl p-3 text-xs text-[#3E322F] focus:outline-hidden focus:border-[#B86B65]"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-5 py-2.5 text-xs text-[#7A6258] hover:text-[#3E322F] flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  disabled={!booking.clientName || !booking.clientEmail}
                  onClick={() => setCurrentStep(4)}
                  className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                    !booking.clientName || !booking.clientEmail
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0]'
                  }`}
                >
                  <span>Review & Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Review & Payment Summary */}
          {currentStep === 4 && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="text-center">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#B86B65] uppercase">
                  Session Summary
                </span>
                <h4 className="font-serif text-2xl text-[#3E322F] mt-1 font-normal">
                  Confirm Your Sacred Reservation
                </h4>
              </div>

              {/* Summary Card */}
              <div className="bg-[#F7EDE8] rounded-xl p-5 border border-[#E8B4B0]/40 space-y-3">
                <div className="flex justify-between items-start pb-3 border-b border-[#E8B4B0]/30">
                  <div>
                    <h5 className="font-serif text-lg font-semibold text-[#8E4A49]">
                      {currentService.title}
                    </h5>
                    <p className="text-xs text-[#6E5652] mt-0.5">With Dani • {currentService.duration}</p>
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#8E4A49]">
                    {currentService.price}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-[#5C4A46]">
                  <div>
                    <span className="text-[#9C827D] block text-[10px] uppercase tracking-wider">Date & Time</span>
                    <span className="font-medium text-[#3E322F]">{booking.date} at {booking.timeSlot}</span>
                  </div>
                  <div>
                    <span className="text-[#9C827D] block text-[10px] uppercase tracking-wider">Format</span>
                    <span className="font-medium text-[#3E322F]">
                      {booking.deliveryType === 'online' ? 'Online Sanctuary (Zoom)' : 'In-Person (Fort Lauderdale)'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#9C827D] block text-[10px] uppercase tracking-wider">Client Name</span>
                    <span className="font-medium text-[#3E322F]">{booking.clientName}</span>
                  </div>
                  <div>
                    <span className="text-[#9C827D] block text-[10px] uppercase tracking-wider">Language</span>
                    <span className="font-medium text-[#3E322F]">
                      {booking.preferredLanguage === 'english' ? 'English' : 'Português'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment selector */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-semibold tracking-wider text-[#8E4A49] uppercase">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['card', 'applepay', 'paypal'].map((pm) => (
                    <button
                      key={pm}
                      type="button"
                      onClick={() => setBooking(prev => ({ ...prev, paymentMethod: pm as any }))}
                      className={`p-3 rounded-xl border text-center text-xs font-medium transition-all ${
                        booking.paymentMethod === pm
                          ? 'border-[#C58580] bg-[#F7EDE8] text-[#8E4A49] font-bold ring-1 ring-[#C58580]'
                          : 'border-[#E8B4B0]/40 bg-white text-[#5C4A46] hover:bg-[#FAF5F0]'
                      }`}
                    >
                      {pm === 'card' ? 'Credit Card' : pm === 'applepay' ? 'Apple Pay' : 'PayPal'}
                    </button>
                  ))}
                </div>

                <div className="bg-white/70 border border-[#E8B4B0]/40 rounded-xl p-4 space-y-3 text-xs">
                  <div className="flex items-center gap-2 text-[#7A6258]">
                    <ShieldCheck className="w-4 h-4 text-[#B86B65]" />
                    <span>256-Bit SSL Encrypted & Confidential Sacred Agreement</span>
                  </div>
                  <p className="text-[11px] text-[#7A6258]">
                    <strong>Cancellation Policy:</strong> Rescheduling is available with 24-hour advance notice. All sessions are 100% confidential.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-5 py-2.5 text-xs text-[#7A6258] hover:text-[#3E322F] flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={handleCompleteBooking}
                  className="bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirm & Reserve My Session</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: Confirmation View */}
          {currentStep === 6 && (
            <div className="text-center py-6 max-w-lg mx-auto space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#F7EDE8] border-2 border-[#C58580] text-[#B86B65] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
                  Reservation Confirmed
                </span>
                <h4 className="font-serif text-3xl text-[#3E322F] mt-1 font-medium">
                  We look forward to welcoming you, {booking.clientName.split(' ')[0]}
                </h4>
                <p className="font-script text-2xl text-[#8E4A49] mt-2">
                  "I can't wait to meet you. ♡ Dani"
                </p>
              </div>

              <div className="bg-[#F7EDE8] rounded-xl p-5 border border-[#E8B4B0]/40 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-[#E8B4B0]/30 pb-2">
                  <span className="text-[#7A6258]">Booking Reference:</span>
                  <span className="font-mono font-bold text-[#8E4A49]">{booking.bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A6258]">Offering:</span>
                  <span className="font-medium text-[#3E322F]">{booking.serviceTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A6258]">Date & Time:</span>
                  <span className="font-medium text-[#3E322F]">{booking.date} at {booking.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A6258]">Location:</span>
                  <span className="font-medium text-[#3E322F]">
                    {booking.deliveryType === 'online' ? 'Zoom Link sent to ' + booking.clientEmail : 'Disantha Sanctuary, Fort Lauderdale, FL'}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-white/70 border border-[#E8B4B0]/30 rounded-xl text-left text-xs text-[#6E5652] space-y-1">
                <p className="font-semibold text-[#8E4A49]">🌸 How to prepare for your session:</p>
                <ul className="list-disc list-inside space-y-1 text-[11px] text-[#7A6258] pt-1">
                  <li>Find a quiet, private space where you will not be disturbed</li>
                  <li>Drink a glass of pure water beforehand and stay hydrated</li>
                  <li>Have a journal and pen nearby for integration reflections</li>
                </ul>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-8 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Return to Sanctuary
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
