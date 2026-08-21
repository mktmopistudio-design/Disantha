import React, { useState } from 'react';
import { PageId, ServiceCategory, ServiceItem } from '../types';
import { servicesData, upcomingEventsData } from '../data/servicesData';
import { DisanthaLogo } from '../components/DisanthaLogo';
import { MandalaBackground } from '../components/MandalaBackground';
import { 
  Sparkles, Clock, MapPin, Globe, CheckCircle2, ChevronRight, 
  Heart, Calendar, ArrowRight, HelpCircle, X, Shield 
} from 'lucide-react';

interface ServicesPageProps {
  initialCategory?: string;
  onNavigate: (page: PageId, subSection?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialCategory = 'all',
  onNavigate,
  onOpenBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory === 'rituals' ? 'rituals' : initialCategory === 'community' ? 'community' : initialCategory === 'private' ? 'private' : 'all'
  );
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  const filteredServices = selectedCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <div className="bg-[#FAF5F0] min-h-screen py-12 relative overflow-hidden">
      <MandalaBackground position="center" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
            Sacred Offerings
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#3E322F] font-normal">
            Healing Experiences & Ceremonies
          </h1>
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="w-10 h-[1px] bg-[#C58580]/40" />
            <DisanthaLogo variant="mark" size="sm" />
            <div className="w-10 h-[1px] bg-[#C58580]/40" />
          </div>
          <p className="text-sm text-[#6E5652] max-w-lg mx-auto">
            Sacred portals designed to nurture your body, heal emotional imprints, and awaken your sovereign feminine essence.
          </p>

          {/* Filter Pills */}
          <div className="pt-6 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All Offerings' },
              { id: 'private', label: '3.1 Private Healing Sessions' },
              { id: 'rituals', label: '3.2 Sacred Rituals & Blessings' },
              { id: 'community', label: '3.3 Community & Circles' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === tab.id
                    ? 'bg-[#C58580] text-[#FAF5F0] shadow-sm'
                    : 'bg-[#F7EDE8] text-[#5C4A46] hover:bg-[#E8B4B0]/30 hover:text-[#B86B65]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white/80 rounded-2xl overflow-hidden border border-[#E8B4B0]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Card Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2321]/60 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#FAF5F0]/90 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#8E4A49] border border-[#E8B4B0]/40">
                    {service.category === 'private' ? 'Private Session' : service.category === 'rituals' ? 'Sacred Ritual' : 'Community Circle'}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 bg-[#8E4A49] text-[#FAF5F0] px-3 py-1 rounded-full font-serif font-bold text-sm shadow-sm">
                    {service.price}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-2xl font-medium text-[#3E322F]">
                    {service.title}
                  </h3>
                  <p className="font-serif italic text-xs text-[#8E4A49]">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-[#6E5652] leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  <div className="pt-2 flex flex-col space-y-1.5 text-xs text-[#7A6258] border-t border-[#E8B4B0]/20">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#B86B65]" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {service.format.includes('Online') ? (
                        <Globe className="w-3.5 h-3.5 text-[#B86B65]" />
                      ) : (
                        <MapPin className="w-3.5 h-3.5 text-[#B86B65]" />
                      )}
                      <span>{service.format}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex gap-2">
                <button
                  onClick={() => setSelectedServiceDetail(service)}
                  className="flex-1 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#8E4A49] bg-[#F7EDE8] hover:bg-[#E8B4B0]/40 transition-colors text-center"
                >
                  Learn More
                </button>
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="flex-1 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#FAF5F0] bg-[#C58580] hover:bg-[#B86B65] transition-colors text-center shadow-xs"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* UPCOMING COMMUNITY CALENDAR (When community selected or on all view) */}
        {/* ========================================================================= */}
        {(selectedCategory === 'all' || selectedCategory === 'community') && (
          <div className="mt-20 bg-[#F7EDE8]/80 p-8 sm:p-12 rounded-3xl border border-[#E8B4B0]/40">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
                The Power of Gathering
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#3E322F]">
                Upcoming Circles & Gatherings
              </h2>
              <p className="text-xs text-[#6E5652]">
                Limited intimate seating in our Fort Lauderdale sanctuary. Reserve early.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEventsData.map(event => (
                <div
                  key={event.id}
                  className="bg-[#FAF5F0] rounded-2xl overflow-hidden border border-[#E8B4B0]/40 p-6 flex flex-col justify-between space-y-4 shadow-xs"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#C58580]/20 text-[#8E4A49]">
                      {event.type}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-[#3E322F]">
                      {event.title}
                    </h3>
                    <p className="text-xs text-[#6E5652] leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-[#E8B4B0]/25 text-xs text-[#7A6258]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#B86B65]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#B86B65]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center justify-between font-serif font-bold text-sm text-[#8E4A49] pt-1">
                      <span>{event.price}</span>
                      <span className="text-[10px] font-sans font-normal text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded-full">
                        {event.spotsLeft} spots left
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenBooking('sacred-womens-circle')}
                      className="w-full mt-2 py-2.5 bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] rounded-full text-xs uppercase tracking-wider font-semibold transition-colors"
                    >
                      Reserve Spot
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* SERVICE DETAIL MODAL (Deep-Dive) */}
      {/* ========================================================================= */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-50 bg-[#2D2321]/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#FAF5F0] w-full max-w-3xl rounded-2xl shadow-2xl border border-[#E8B4B0]/40 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="relative h-48 sm:h-60 overflow-hidden flex-shrink-0">
              <img
                src={selectedServiceDetail.image}
                alt={selectedServiceDetail.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2321]/80 via-black/30 to-transparent" />
              
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="absolute top-4 right-4 p-2 bg-[#FAF5F0]/80 hover:bg-white text-[#3E322F] rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] bg-[#C58580] px-2.5 py-0.5 rounded-full font-semibold">
                  {selectedServiceDetail.category === 'private' ? 'Private Session' : 'Sacred Ritual'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium mt-1">
                  {selectedServiceDetail.title}
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-rose-200">
                  {selectedServiceDetail.tagline}
                </p>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#3E322F]">
              <div className="flex flex-wrap gap-4 text-xs bg-[#F7EDE8] p-3.5 rounded-xl border border-[#E8B4B0]/40">
                <div className="flex items-center gap-1.5 text-[#8E4A49] font-medium">
                  <Clock className="w-4 h-4 text-[#B86B65]" />
                  <span>Duration: {selectedServiceDetail.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#8E4A49] font-medium">
                  <Globe className="w-4 h-4 text-[#B86B65]" />
                  <span>Format: {selectedServiceDetail.format}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#8E4A49] font-bold ml-auto font-serif text-sm">
                  <span>Investment: {selectedServiceDetail.price}</span>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-lg font-semibold text-[#8E4A49] mb-1.5">
                  About This Experience
                </h4>
                <p className="text-xs sm:text-sm text-[#6E5652] leading-relaxed">
                  {selectedServiceDetail.fullDescription}
                </p>
              </div>

              {/* What to Expect */}
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#8E4A49] mb-2">
                  What to Expect
                </h4>
                <ul className="space-y-2">
                  {selectedServiceDetail.whatToExpect.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C4A46]">
                      <CheckCircle2 className="w-4 h-4 text-[#B86B65] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who It's For */}
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#8E4A49] mb-2">
                  Who It's For
                </h4>
                <ul className="space-y-2">
                  {selectedServiceDetail.whoItsFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C4A46]">
                      <Heart className="w-4 h-4 text-[#B86B65] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              {selectedServiceDetail.faqs.length > 0 && (
                <div className="border-t border-[#E8B4B0]/30 pt-4">
                  <h4 className="font-serif text-lg font-semibold text-[#8E4A49] mb-2">
                    Common Questions
                  </h4>
                  <div className="space-y-3">
                    {selectedServiceDetail.faqs.map((faq, i) => (
                      <div key={i} className="bg-white/80 p-3.5 rounded-xl border border-[#E8B4B0]/30 text-xs">
                        <p className="font-semibold text-[#3E322F] mb-1">{faq.question}</p>
                        <p className="text-[#6E5652] leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-6 bg-[#F7EDE8] border-t border-[#E8B4B0]/30 flex items-center justify-between">
              <button
                onClick={() => setSelectedServiceDetail(null)}
                className="text-xs text-[#7A6258] hover:text-[#3E322F]"
              >
                Close Details
              </button>
              <button
                onClick={() => {
                  const sId = selectedServiceDetail.id;
                  setSelectedServiceDetail(null);
                  onOpenBooking(sId);
                }}
                className="bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-8 py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all shadow-sm flex items-center gap-2"
              >
                <span>Book This Offering</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
