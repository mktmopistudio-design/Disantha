import React, { useState } from 'react';
import { PageId } from '../types';
import { DisanthaLogo } from '../components/DisanthaLogo';
import { CalliandraFlower } from '../components/CalliandraFlower';
import { DaniPortrait } from '../components/DaniPortrait';
import { MandalaBackground } from '../components/MandalaBackground';
import { 
  Sparkles, Heart, Award, Shield, Flower2, ArrowRight, 
  MapPin, CheckCircle2, Compass, Sun, Droplets, BookOpen 
} from 'lucide-react';

interface AboutPageProps {
  initialSubSection?: string;
  onNavigate: (page: PageId, subSection?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  initialSubSection = 'story',
  onNavigate,
  onOpenBooking
}) => {
  const [activeTab, setActiveTab] = useState<'story' | 'dani'>(
    initialSubSection === 'dani' ? 'dani' : 'story'
  );

  return (
    <div className="bg-[#FAF5F0] min-h-screen py-12 relative overflow-hidden">
      <MandalaBackground position="top-right" opacity={0.05} />
      <MandalaBackground position="bottom-left" opacity={0.05} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
            About Our Sanctuary
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#3E322F] font-normal">
            Rooted in Devotion & Blossom
          </h1>
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="w-10 h-[1px] bg-[#C58580]/40" />
            <DisanthaLogo variant="mark" size="sm" />
            <div className="w-10 h-[1px] bg-[#C58580]/40" />
          </div>

          {/* Sub-section Switcher Tabs */}
          <div className="pt-6 flex justify-center">
            <div className="bg-[#F7EDE8] p-1.5 rounded-full border border-[#E8B4B0]/40 inline-flex shadow-xs">
              <button
                onClick={() => setActiveTab('story')}
                className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === 'story'
                    ? 'bg-[#C58580] text-[#FAF5F0] shadow-sm'
                    : 'text-[#6E5652] hover:text-[#B86B65]'
                }`}
              >
                The Story of Disantha
              </button>
              <button
                onClick={() => setActiveTab('dani')}
                className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === 'dani'
                    ? 'bg-[#C58580] text-[#FAF5F0] shadow-sm'
                    : 'text-[#6E5652] hover:text-[#B86B65]'
                }`}
              >
                Meet Dani (Founder & Guide)
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: THE STORY OF DISANTHA */}
        {/* ========================================================================= */}
        {activeTab === 'story' && (
          <div className="space-y-16 animate-in fade-in duration-300">
            {/* Story Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#F7EDE8]/60 p-8 sm:p-12 rounded-3xl border border-[#E8B4B0]/40">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
                  Botanical & Soul Origins
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#3E322F] font-normal leading-snug">
                  The Blossom of Jalapão: <br />
                  <span className="font-serif italic text-[#8E4A49]">Calliandra dysantha</span>
                </h2>
                <p className="text-sm sm:text-base text-[#6E5652] leading-relaxed font-light">
                  In the wild heart of Brazil lies <strong>Jalapão</strong>—a golden expanse of raw savannas, subterranean springs, and fiery sun. It is in this resilient Cerrado landscape that the <em>Calliandra dysantha</em> flower blooms.
                </p>
                <p className="text-sm sm:text-base text-[#6E5652] leading-relaxed font-light">
                  Unlike rainforest flowers sheltered in shade, the Calliandra must survive scorching days and dry seasons. Instead of withering, its roots delve meters into the deep earth to draw pristine water from the cradle of aquifers.
                </p>
                <p className="text-sm sm:text-base text-[#6E5652] leading-relaxed font-light">
                  When its season arrives, it opens into an ethereal crown of delicate pink filaments that shimmer in the sun—the ultimate manifestation of <strong>delicacy rooted in unwavering strength</strong>.
                </p>
              </div>

              <div className="lg:col-span-6 flex flex-col items-center justify-center">
                <div className="bg-[#FAF5F0] p-6 sm:p-8 rounded-3xl border border-[#E8B4B0]/50 shadow-md max-w-md w-full text-center space-y-4">
                  <CalliandraFlower size="hero" variant="natural" className="mx-auto" />
                  <div className="border-t border-[#E8B4B0]/30 pt-3">
                    <span className="font-serif italic text-lg text-[#8E4A49] block">
                      Calliandra dysantha
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A6258] block mt-0.5">
                      Jalapão • Cerrado Brasileiro
                    </span>
                    <p className="font-serif italic text-sm text-[#8E4A49] mt-2">
                      "Softness is not weakness; it is the ultimate expression of courage."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Pillars of Disantha Symbolism */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/80 p-8 rounded-2xl border border-[#E8B4B0]/40 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#F7EDE8] flex items-center justify-center text-[#8E4A49] mb-4">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#3E322F]">
                  1. Deep Grounded Roots
                </h3>
                <p className="text-xs sm:text-sm text-[#6E5652] leading-relaxed">
                  Before we can bloom, we must establish a sanctuary within our own nervous systems. We guide women to anchor their roots into self-trust, somatic safety, and ancestral healing.
                </p>
              </div>

              <div className="bg-white/80 p-8 rounded-2xl border border-[#E8B4B0]/40 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#F7EDE8] flex items-center justify-center text-[#8E4A49] mb-4">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#3E322F]">
                  2. Sovereign Radiance
                </h3>
                <p className="text-xs sm:text-sm text-[#6E5652] leading-relaxed">
                  Like the radiant pink stamens reaching toward the sky, healing is about un-apologetically shedding societal conditioning and allowing your unique feminine essence to take up space.
                </p>
              </div>

              <div className="bg-white/80 p-8 rounded-2xl border border-[#E8B4B0]/40 shadow-xs space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#F7EDE8] flex items-center justify-center text-[#8E4A49] mb-4">
                  <Flower2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#3E322F]">
                  3. Gentle Awakening
                </h3>
                <p className="text-xs sm:text-sm text-[#6E5652] leading-relaxed">
                  Transformation does not require violent striving. True metamorphosis occurs in the softest, most loving spaces where the body feels safe enough to let go of old armor.
                </p>
              </div>
            </div>

            {/* Philosophy & Vision Statement */}
            <div className="bg-[#FAF5F0] rounded-3xl p-8 sm:p-12 border border-[#E8B4B0]/50 text-center max-w-3xl mx-auto space-y-5">
              <DisanthaLogo variant="mark" size="md" className="mx-auto" />
              <h3 className="font-serif text-2xl sm:text-3xl text-[#3E322F]">
                Our Sacred Sanctuary Vision
              </h3>
              <p className="text-sm text-[#6E5652] leading-relaxed">
                At Disantha, we envision a world where every woman is intimately connected to her body’s sacred wisdom, free from subconscious unworthiness, and supported by a timeless sisterhood of women who celebrate her growth.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-sm"
                >
                  Explore Healing Experiences
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: MEET DANI */}
        {/* ========================================================================= */}
        {activeTab === 'dani' && (
          <div className="space-y-16 animate-in fade-in duration-300">
            {/* Bio Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-sm w-full">
                  <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8B4B0]/50 shadow-2xl bg-white aspect-[9/16] max-w-sm mx-auto">
                    <DaniPortrait className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D2321]/15 via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-serif text-2xl font-medium text-[#3E322F]">Dani</h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8E4A49] font-medium mt-0.5">
                      Intuitive Healer & Guide
                    </p>
                    <p className="text-xs text-[#7A6258] mt-1">Fort Lauderdale, FL • Worldwide Online</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
                  Welcome to My Heart
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#3E322F] font-normal leading-tight">
                  "I believe every woman holds her own healer within."
                </h2>
                <p className="text-sm sm:text-base text-[#6E5652] leading-relaxed font-light">
                  Hello beloved sister, I am Dani. My journey into holistic healing was not born in a sterile classroom, but through my own deep initiations of burnout, emotional disconnection, and the profound ache to remember who I was beneath societal expectations.
                </p>
                <p className="text-sm sm:text-base text-[#6E5652] leading-relaxed font-light">
                  When I discovered ThetaHealing® and returned to the medicine of sacred women's circles and womb reconnection, my entire life shifted. The heavy subconscious baggage I had carried for decades simply evaporated—replaced by a deep peace, unwavering intuition, and sovereign power.
                </p>
                <p className="text-sm sm:text-base text-[#6E5652] leading-relaxed font-light">
                  Today, I dedicate my life to holding this sacred, non-judgmental space for women around the world. Whether sitting together in my Florida sanctuary or connecting across oceans through the screen, my heart is devoted to your unfolding.
                </p>
              </div>
            </div>

            {/* Credentials & Certifications Grid */}
            <div className="bg-[#F7EDE8]/80 p-8 sm:p-12 rounded-3xl border border-[#E8B4B0]/40">
              <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
                  Lineage & Training
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#3E322F]">
                  Credentials & Sacred Accreditations
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="bg-white/80 p-6 rounded-2xl border border-[#E8B4B0]/30 shadow-xs space-y-2">
                  <Award className="w-8 h-8 text-[#B86B65] mx-auto" />
                  <h4 className="font-serif text-base font-semibold text-[#3E322F]">
                    ThetaHealing®
                  </h4>
                  <p className="text-xs text-[#7A6258]">
                    Certified Advanced DNA, Dig Deeper & Intuitive Anatomy Practitioner (THInK Institute)
                  </p>
                </div>

                <div className="bg-white/80 p-6 rounded-2xl border border-[#E8B4B0]/30 shadow-xs space-y-2">
                  <Award className="w-8 h-8 text-[#B86B65] mx-auto" />
                  <h4 className="font-serif text-base font-semibold text-[#3E322F]">
                    Usui Reiki Master
                  </h4>
                  <p className="text-xs text-[#7A6258]">
                    Master-Teacher Lineage in Usui Shiki Ryoho Energy Healing & Crystal Attunement
                  </p>
                </div>

                <div className="bg-white/80 p-6 rounded-2xl border border-[#E8B4B0]/30 shadow-xs space-y-2">
                  <Award className="w-8 h-8 text-[#B86B65] mx-auto" />
                  <h4 className="font-serif text-base font-semibold text-[#3E322F]">
                    Womb Blessing Guide
                  </h4>
                  <p className="text-xs text-[#7A6258]">
                    Initiated in the 13th Rite of the Munay-Ki Womb Rite & Botanical Pelvic Steam Care
                  </p>
                </div>

                <div className="bg-white/80 p-6 rounded-2xl border border-[#E8B4B0]/30 shadow-xs space-y-2">
                  <Award className="w-8 h-8 text-[#B86B65] mx-auto" />
                  <h4 className="font-serif text-base font-semibold text-[#3E322F]">
                    Sound Practitioner
                  </h4>
                  <p className="text-xs text-[#7A6258]">
                    Vibrational Sound Therapy & 432Hz Quartz Crystal Alchemy Bowl Facilitator
                  </p>
                </div>
              </div>
            </div>

            {/* My Approach & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 p-8 rounded-2xl border border-[#E8B4B0]/40 space-y-4">
                <h3 className="font-serif text-2xl font-medium text-[#3E322F]">
                  My Healing Approach
                </h3>
                <p className="text-xs sm:text-sm text-[#6E5652] leading-relaxed">
                  I don’t believe in one-size-fits-all fixes. Every woman has a distinct energetic signature and nervous system history. My approach blends:
                </p>
                <ul className="space-y-2 text-xs text-[#5C4A46]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B86B65] flex-shrink-0 mt-0.5" />
                    <span><strong>Trauma-Informed Presence:</strong> You are always in control of your pace and boundaries.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B86B65] flex-shrink-0 mt-0.5" />
                    <span><strong>Energetic Neuroscience:</strong> Reprogramming the subconscious while honoring somatic body responses.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B86B65] flex-shrink-0 mt-0.5" />
                    <span><strong>Devotional Reverence:</strong> Treating your story with unconditional love and strict confidentiality.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/80 p-8 rounded-2xl border border-[#E8B4B0]/40 space-y-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#3E322F]">
                    My Mission For You
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E5652] leading-relaxed mt-2">
                    To guide you back to your own inner knowing, until you no longer need outside validation to trust the wisdom of your heart and womb.
                  </p>
                  <p className="font-script text-2xl text-[#8E4A49] mt-4">
                    I can't wait to walk beside you. ♡ Dani
                  </p>
                </div>

                <button
                  onClick={() => onOpenBooking()}
                  className="w-full bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Begin Your Healing Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
