import React from 'react';
import { PageId, ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';
import { testimonialsData } from '../data/testimonialsData';
import { DisanthaLogo } from '../components/DisanthaLogo';
import { CalliandraFlower } from '../components/CalliandraFlower';
import { DaniPortrait } from '../components/DaniPortrait';
import { MandalaBackground } from '../components/MandalaBackground';
import { 
  Sparkles, ArrowRight, Heart, Calendar, Clock, MapPin, Globe, 
  CheckCircle2, Compass, Feather, Star, ChevronRight 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, subSection?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
  onSelectServiceDetails?: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Devoted to Women) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-8 pb-16 bg-gradient-to-b from-[#FAF5F0] via-[#FBF7F3] to-[#F7EDE8]">
        {/* Delicate background sacred geometries */}
        <MandalaBackground position="center" opacity={0.06} scale={1.2} />
        <MandalaBackground position="top-right" opacity={0.04} scale={0.9} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              {/* Eyebrow / Sacred Calling */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7EDE8] border border-[#E8B4B0]/50 text-[#8E4A49]">
                <Sparkles className="w-3.5 h-3.5 text-[#B86B65]" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                  A sanctuary devoted to women
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3E322F] font-normal leading-[1.15] tracking-tight">
                Nurture the body. <br />
                Honor the spirit. <br />
                <span className="font-serif italic font-normal text-[#8E4A49] block mt-1">
                  Awaken feminine energy.
                </span>
              </h1>

              {/* Decorative flourish */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-[1px] bg-[#C58580]/40" />
                <DisanthaLogo variant="mark" size="sm" />
                <div className="w-12 h-[1px] bg-[#C58580]/40" />
              </div>

              {/* Subtitle / Promise */}
              <p className="text-base sm:text-lg text-[#6E5652] max-w-xl leading-relaxed font-light">
                Through ThetaHealing®, Usui Reiki, Sacred Womb Care, and Loving Circles, we create an intimate, confidential container for deep remembrance, emotional release, and feminine blossoming.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('about', 'dani')}
                  className="w-full sm:w-auto border border-[#B86B65]/50 hover:border-[#B86B65] text-[#8E4A49] hover:bg-[#FAF5F0] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-medium transition-colors text-center"
                >
                  Meet Dani
                </button>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#7A6258] border-t border-[#E8B4B0]/30 w-full">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B86B65]" />
                  <span>Trauma-Informed Space</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B86B65]" />
                  <span>In-Person Sanctuary (FL)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B86B65]" />
                  <span>Online Global Sessions</span>
                </div>
              </div>
            </div>

            {/* Right Image / Visual Art Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Background ambient halo */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#E8B4B0]/40 to-[#FAF5F0]/80 rounded-3xl blur-xl" />
                
                {/* Main Serene Image Card */}
                <div className="relative rounded-2xl overflow-hidden border border-[#E8B4B0]/40 shadow-xl bg-white aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80"
                    alt="Serene woman in meditation and prayer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2321]/40 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#FAF5F0]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#E8B4B0]/40 flex items-center justify-between">
                    <div>
                      <p className="font-serif italic text-sm text-[#3E322F]">"Your healing journey begins here."</p>
                      <p className="text-[10px] text-[#8E4A49] uppercase tracking-wider font-semibold">Sanctuary Open</p>
                    </div>
                    <button
                      onClick={() => onOpenBooking()}
                      className="bg-[#C58580] hover:bg-[#B86B65] text-white p-2 rounded-full transition-colors"
                      aria-label="Book session"
                    >
                      <Calendar className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Floating Calliandra Botanical Accent */}
                <div className="absolute -top-5 -right-5 hidden sm:flex items-center gap-3 bg-[#FAF5F0]/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-[#E8B4B0]/50 text-left">
                  <CalliandraFlower size="sm" variant="circle" />
                  <div>
                    <span className="font-serif italic text-xs font-semibold text-[#8E4A49] block leading-tight">Calliandra dysantha</span>
                    <span className="text-[9px] uppercase tracking-wider text-[#7A6258] block mt-0.5">Flor do Cerrado • Jalapão</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE MEANING BEHIND DISANTHA (Calliandra dysantha & Jalapão, Brazil) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF5F0] relative border-y border-[#E8B4B0]/25">
        <MandalaBackground position="left" opacity={0.05} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Calliandra Flower Botanical Art & Jalapão Story */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative bg-[#F7EDE8]/80 p-6 sm:p-8 rounded-3xl border border-[#E8B4B0]/40 shadow-md max-w-md w-full text-center space-y-4">
                <CalliandraFlower size="hero" variant="natural" className="mx-auto" />
                <div className="pt-3 border-t border-[#E8B4B0]/30">
                  <span className="font-serif italic text-xl text-[#8E4A49] block font-medium">
                    Calliandra dysantha
                  </span>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#7A6258] block mt-1 font-medium">
                    Nativa do Jalapão • Cerrado Brasileiro
                  </span>
                  <p className="text-xs sm:text-sm text-[#6E5652] mt-2 italic font-light leading-relaxed">
                    "Delicadeza radiante que nasce de raízes profundas em solo resiliente."
                  </p>
                </div>
              </div>
            </div>

            {/* Right: The Brand Philosophy */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
                The Sacred Origin
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#3E322F] font-normal leading-snug">
                Why Disantha? <br />
                <span className="font-serif italic text-[#8E4A49]">Strength in Vulnerability & Blossoming.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#6E5652] leading-relaxed font-light">
                The name <strong>Disantha</strong> draws its soul directly from <em>Calliandra dysantha</em>, a rare and breathtaking blossom found in the heart of Brazil’s wild Jalapão savannas.
              </p>
              <p className="text-sm sm:text-base text-[#6E5652] leading-relaxed font-light">
                In a land of intense sun and arid soil, this flower does not harden or close itself off. Instead, it sinks its roots deeply into subterranean springs, trusting the natural cycle—and when ready, bursts into a crown of radiant pink filaments.
              </p>
              <div className="p-4 rounded-xl bg-[#F7EDE8] border-l-4 border-[#C58580] text-xs sm:text-sm text-[#5C4A46] italic">
                "We do not heal by becoming rigid against life’s storms. We heal by grounding deeply into our truth, softening our hearts, and blossoming into our sacred feminine power."
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about', 'story')}
                  className="text-xs uppercase tracking-[0.2em] font-bold text-[#8E4A49] hover:text-[#B86B65] transition-colors flex items-center gap-2 group"
                >
                  <span>Read the full story of Disantha</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MEET DANI (Healer. Guide. Woman. Devoted to Your Journey) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#FAF5F0] to-[#F7EDE8] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image on Left with Sacred Mandala Frame */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div className="relative max-w-sm w-full">
                {/* Mandala behind photo */}
                <div className="absolute -inset-6 flex items-center justify-center opacity-20 pointer-events-none">
                  <DisanthaLogo variant="mark" size="xl" />
                </div>

                <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8B4B0]/50 shadow-2xl bg-white aspect-[9/16] max-w-sm mx-auto">
                  <DaniPortrait className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2321]/15 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Content on Right */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
                Meet Dani
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#3E322F] font-normal leading-tight">
                Healer. Guide. Woman. <br />
                <span className="font-serif italic text-[#8E4A49]">Devoted to Your Journey.</span>
              </h2>

              <div className="flex items-center gap-2">
                <DisanthaLogo variant="mark" size="sm" />
                <div className="w-8 h-[1px] bg-[#C58580]/40" />
              </div>

              <p className="text-sm sm:text-base text-[#6E5652] leading-relaxed font-light">
                Dani is an intuitive healer, certified ThetaHealing® Practitioner, Usui Reiki Master, and sacred feminine facilitator. With deep reverence for ancestral wisdom and emotional neuroscience, she holds a grounded, loving container for women ready to reclaim their voice and release subconscious burdens.
              </p>
              <p className="text-sm sm:text-base text-[#6E5652] leading-relaxed font-light">
                Her work bridges gentle energy medicine with practical integration—helping you release what no longer serves you and reconnect with your true, untamed essence.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('about', 'dani')}
                  className="bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm"
                >
                  Learn More About Dani
                </button>
                <button
                  onClick={() => onOpenBooking()}
                  className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8E4A49] hover:underline"
                >
                  Book with Dani →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HEALING EXPERIENCES OVERVIEW (Services for Body, Mind & Spirit) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#FAF5F0] relative">
        <MandalaBackground position="center" opacity={0.04} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
              Ways to Heal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3E322F] font-normal">
              Services for Body, Mind & Spirit
            </h2>
            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="w-10 h-[1px] bg-[#C58580]/40" />
              <DisanthaLogo variant="mark" size="sm" />
              <div className="w-10 h-[1px] bg-[#C58580]/40" />
            </div>
            <p className="text-sm text-[#6E5652] max-w-lg mx-auto">
              Every offering is held as a sacred ritual, customized to your unique somatic, emotional, and energetic blueprint.
            </p>
          </div>

          {/* 4 Featured Services Grid matching layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-white/80 rounded-2xl overflow-hidden border border-[#E8B4B0]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Service Image with Top Badge Icon */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Floating Circular Mark */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FAF5F0] border border-[#E8B4B0] shadow-sm flex items-center justify-center text-[#8E4A49]">
                    <DisanthaLogo variant="mark" size="sm" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-7 flex-1 flex flex-col justify-between text-center space-y-3">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-[#3E322F]">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#6E5652] mt-2 leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8B4B0]/20 flex flex-col space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#7A6258]">
                      <span>{service.duration}</span>
                      <span className="font-serif font-bold text-sm text-[#8E4A49]">{service.price}</span>
                    </div>

                    <button
                      onClick={() => onOpenBooking(service.id)}
                      className="w-full mt-2 py-2 text-xs uppercase tracking-wider font-semibold text-[#8E4A49] hover:text-[#FAF5F0] hover:bg-[#C58580] rounded-full border border-[#C58580]/40 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Book Session</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm"
            >
              View All Services & Ceremonies
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FEATURED EXPERIENCE: THETAHEALING® SPOTLIGHT */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#F7EDE8] relative border-y border-[#E8B4B0]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF5F0] rounded-3xl p-8 sm:p-12 border border-[#E8B4B0]/50 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#B86B65]" />
                  Featured Sacred Modality
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#3E322F] font-normal">
                  ThetaHealing® Subconscious Reprogramming
                </h3>
                <p className="text-sm text-[#6E5652] leading-relaxed">
                  Over 90% of our daily behaviors, emotional loops, and fears originate in the subconscious mind. ThetaHealing® allows you to shift core beliefs, heal lineage trauma, and anchor deep soul sovereignty while resting in a tranquil theta brainwave state.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#5C4A46]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B86B65]" />
                    <span>Instant energetic belief downloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B86B65]" />
                    <span>Ancestral & Genetic healing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B86B65]" />
                    <span>Releasing fears and self-sabotage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B86B65]" />
                    <span>Available worldwide via Zoom</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4 text-center border-t lg:border-t-0 lg:border-l border-[#E8B4B0]/30 pt-6 lg:pt-0 lg:pl-8">
                <DisanthaLogo variant="mark" size="lg" />
                <span className="font-serif text-2xl font-bold text-[#8E4A49]">$180 <span className="text-xs font-normal text-[#7A6258]">/ 75 min</span></span>
                <button
                  onClick={() => onNavigate('thetahealing')}
                  className="w-full bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  Explore ThetaHealing®
                </button>
                <button
                  onClick={() => onOpenBooking('thetahealing')}
                  className="text-xs text-[#8E4A49] hover:underline font-medium"
                >
                  Book ThetaHealing® Session →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. VOICES OF TRANSFORMATION (Testimonials Matching Image 2) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#FAF5F0] relative">
        <MandalaBackground position="right" opacity={0.05} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3E322F] font-normal">
              Voices of Transformation
            </h2>
            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="w-10 h-[1px] bg-[#C58580]/40" />
              <DisanthaLogo variant="mark" size="sm" />
              <div className="w-10 h-[1px] bg-[#C58580]/40" />
            </div>
            <p className="font-serif italic text-lg text-[#8E4A49] pt-2">
              Real Women. Real Stories. Real Healing.
            </p>
            <p className="text-xs text-[#7A6258] max-w-md mx-auto">
              I am deeply honored to walk alongside these incredible women on their healing journey.
            </p>
          </div>

          {/* Testimonial Cards Grid (6 cards matching Image 2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-[#F7EDE8]/60 rounded-2xl p-7 border border-[#E8B4B0]/40 shadow-xs flex flex-col justify-between space-y-6 hover:bg-[#F7EDE8] transition-colors"
              >
                {/* Quote Icon */}
                <div>
                  <span className="font-serif text-4xl text-[#C58580] leading-none block">“</span>
                  <p className="text-xs sm:text-sm text-[#5C4A46] leading-relaxed italic mt-1">
                    {item.quote}
                  </p>
                </div>

                {/* Author Info with Avatar */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-[#E8B4B0]/25">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-11 h-11 rounded-full object-cover border border-[#C58580]/40 shadow-xs"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#3E322F] uppercase tracking-wider">
                      {item.author}
                    </h4>
                    <span className="text-[11px] text-[#8E4A49] block font-medium">
                      {item.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Story Banner */}
          <div className="mt-16 bg-[#F7EDE8] rounded-3xl p-8 sm:p-10 border border-[#E8B4B0]/50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#3E322F]">
                Your Story Can Be The Next One Here
              </h3>
              <p className="text-xs text-[#6E5652]">
                You deserve to feel supported, empowered, and deeply connected to yourself.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end space-y-2">
              <button
                onClick={() => onOpenBooking()}
                className="bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm flex items-center gap-2"
              >
                <span>Book Your Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="font-script text-xl text-[#8E4A49]">
                I can't wait to meet you. ♡
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CLOSING INVITATION BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 bg-gradient-to-r from-[#D99B95] via-[#C58580] to-[#B86B65] text-[#FAF5F0] relative overflow-hidden text-center">
        <MandalaBackground position="center" opacity={0.12} scale={1.5} />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] opacity-90 font-medium">
            You deserve to feel whole, balanced and empowered.
          </p>
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal">
            Your healing journey begins here.
          </h2>
          <div className="pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#FAF5F0] hover:bg-white text-[#8E4A49] px-9 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book Your Session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
