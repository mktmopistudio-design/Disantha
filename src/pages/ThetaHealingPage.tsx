import React from 'react';
import { PageId } from '../types';
import { DisanthaLogo } from '../components/DisanthaLogo';
import { MandalaBackground } from '../components/MandalaBackground';
import { 
  Sparkles, Brain, Heart, Shield, CheckCircle2, ArrowRight, 
  HelpCircle, Clock, Globe, MapPin, Award, RefreshCw 
} from 'lucide-react';

interface ThetaHealingPageProps {
  onNavigate: (page: PageId, subSection?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ThetaHealingPage: React.FC<ThetaHealingPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const explorationTopics = [
    {
      title: 'Healing Generational & Ancestral Vows',
      description: 'Releasing inherited burdens of unworthiness, scarcity, self-sacrifice, and fear passed down through maternal and paternal lineages.'
    },
    {
      title: 'Self-Worth, Visibility & Reclaiming Your Voice',
      description: 'Clearing subconscious fear of judgment, fear of rejection, and the need to stay small to keep others comfortable.'
    },
    {
      title: 'Healthy Boundaries & Codependency Release',
      description: 'Rewiring the subconscious belief that love requires self-abandonment, chronic people-pleasing, or emotional absorption.'
    },
    {
      title: 'Somatic Healing & Physical Vitality',
      description: 'Understanding the emotional root behind chronic physical ailments, hormonal imbalances, and tension stored in the tissues.'
    },
    {
      title: 'Womb Grief, Birth & Relationship Patterns',
      description: 'Purifying energetic cords from past romantic partners, healing birth trauma, and opening the heart to sovereign intimacy.'
    },
    {
      title: 'Abundance & Soul Purpose Alignment',
      description: 'Dissolving subconscious ceilings around wealth, reception, receiving support, and stepping into your true creative dharma.'
    }
  ];

  const stepsHowItWorks = [
    {
      step: '01',
      title: 'Entering the Theta Brainwave State',
      description: 'Dani guides you through a deeply calming, gentle meditation that transitions your brainwaves into the restorative Theta rhythm (4–7 Hz)—the state of deep subconscious receptivity.'
    },
    {
      step: '02',
      title: 'Intuitive Scanning & Root Dialogue',
      description: 'Through loving inquiry and intuitive vision, we trace surface-level struggles (such as anxiety or feeling stuck) down to the bottom core belief formed in childhood or lineage history.'
    },
    {
      step: '03',
      title: 'Muscle Testing / Energetic Verification',
      description: 'Using gentle applied kinesiology (energy muscle testing), your own nervous system confirms whether a subconscious belief is active before and after the healing.'
    },
    {
      step: '04',
      title: 'Instant Energetic Reprogramming',
      description: 'With your verbal consent, old limiting vows and contracts are released and replaced with divine feelings of unconditional love, safety, and empowerment.'
    }
  ];

  return (
    <div className="bg-[#FAF5F0] min-h-screen py-12 relative overflow-hidden">
      <MandalaBackground position="center" opacity={0.05} scale={1.3} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* ========================================================================= */}
        {/* 1. HERO / INTRODUCTION */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7EDE8] border border-[#E8B4B0]/50 text-[#8E4A49]">
              <Sparkles className="w-3.5 h-3.5 text-[#B86B65]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                Signature Energetic Modality
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#3E322F] font-normal leading-[1.15]">
              ThetaHealing® <br />
              <span className="font-serif italic text-[#8E4A49]">Subconscious Rewiring for Soul Freedom</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6E5652] leading-relaxed font-light">
              Access the profound restorative frequency of the Theta brainwave (4–7 Hz) to identify, release, and rewrite the subconscious beliefs holding you back from your highest truth.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenBooking('thetahealing')}
                className="bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all shadow-sm flex items-center gap-2"
              >
                <span>Book a ThetaHealing® Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-[#7A6258] font-medium">$180 • 75 Minutes • Online & In-Person</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden border border-[#E8B4B0]/40 shadow-xl bg-white aspect-[4/5] max-w-sm w-full">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
                alt="ThetaHealing session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2321]/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF5F0]/90 backdrop-blur-md p-4 rounded-xl border border-[#E8B4B0]/40">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#F7EDE8] text-[#8E4A49]">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-sm font-semibold text-[#3E322F]">The Theta Frequency (4–7 Hz)</h2>
                    <p className="text-[11px] text-[#6E5652]">Where deep cellular healing & belief transformation occur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. WHAT IS THETAHEALING®? & THE SCIENCE OF THE 4 LEVELS */}
        {/* ========================================================================= */}
        <div className="bg-[#F7EDE8]/70 rounded-3xl p-8 sm:p-12 border border-[#E8B4B0]/40 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
              Understanding the Subconscious Mind
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3E322F]">
              The 4 Levels of Subconscious Beliefs
            </h2>
            <p className="text-xs sm:text-sm text-[#6E5652]">
              In ThetaHealing®, we work across four distinct levels where beliefs, vows, and emotional programs are stored in your energetic anatomy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/90 p-6 rounded-2xl border border-[#E8B4B0]/30 shadow-xs space-y-2">
              <span className="text-xs font-bold text-[#8E4A49] uppercase tracking-wider block">Level 1</span>
              <h3 className="font-serif text-lg font-medium text-[#3E322F]">Core Level</h3>
              <p className="text-xs text-[#6E5652] leading-relaxed">
                Beliefs taught and accepted from conception through childhood, shaping your early sense of safety, love, and worth.
              </p>
            </div>

            <div className="bg-white/90 p-6 rounded-2xl border border-[#E8B4B0]/30 shadow-xs space-y-2">
              <span className="text-xs font-bold text-[#8E4A49] uppercase tracking-wider block">Level 2</span>
              <h3 className="font-serif text-lg font-medium text-[#3E322F]">Genetic / Lineage</h3>
              <p className="text-xs text-[#6E5652] leading-relaxed">
                Epigenetic memories and ancestral survival programs passed down through DNA from ancestors who endured hardship.
              </p>
            </div>

            <div className="bg-white/90 p-6 rounded-2xl border border-[#E8B4B0]/30 shadow-xs space-y-2">
              <span className="text-xs font-bold text-[#8E4A49] uppercase tracking-wider block">Level 3</span>
              <h3 className="font-serif text-lg font-medium text-[#3E322F]">History Level</h3>
              <p className="text-xs text-[#6E5652] leading-relaxed">
                Deep collective unconscious memories, past life vows of poverty or silence, and cultural programming.
              </p>
            </div>

            <div className="bg-white/90 p-6 rounded-2xl border border-[#E8B4B0]/30 shadow-xs space-y-2">
              <span className="text-xs font-bold text-[#8E4A49] uppercase tracking-wider block">Level 4</span>
              <h3 className="font-serif text-lg font-medium text-[#3E322F]">Soul Level</h3>
              <p className="text-xs text-[#6E5652] leading-relaxed">
                The core essence of who you are; healing soul fragmentation caused by grief, heartbreak, or severe shock.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. HOW A SESSION WORKS (Step by Step) */}
        {/* ========================================================================= */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
              The Sacred Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3E322F]">
              How Your ThetaHealing® Session Unfolds
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stepsHowItWorks.map((step) => (
              <div
                key={step.step}
                className="bg-white/80 p-6 rounded-2xl border border-[#E8B4B0]/40 shadow-xs flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="font-serif text-3xl font-bold text-[#C58580] opacity-80 block">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-[#3E322F] mt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#6E5652] leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. WHAT WOMEN MAY EXPLORE */}
        {/* ========================================================================= */}
        <div className="bg-[#FAF5F0] rounded-3xl p-8 sm:p-12 border border-[#E8B4B0]/50 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
              Areas of Deep Transformation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3E322F]">
              What You Can Heal in ThetaHealing®
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {explorationTopics.map((topic, i) => (
              <div
                key={i}
                className="bg-[#F7EDE8]/60 p-6 rounded-2xl border border-[#E8B4B0]/30 space-y-2 hover:bg-[#F7EDE8] transition-colors"
              >
                <div className="flex items-center gap-2 text-[#8E4A49]">
                  <CheckCircle2 className="w-4 h-4 text-[#B86B65] flex-shrink-0" />
                  <h3 className="font-serif text-base font-semibold text-[#3E322F]">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-xs text-[#6E5652] leading-relaxed pl-6">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. MEET DANI & CTA */}
        {/* ========================================================================= */}
        <div className="bg-gradient-to-r from-[#D99B95] via-[#C58580] to-[#B86B65] text-[#FAF5F0] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-lg">
          <MandalaBackground position="center" opacity={0.15} scale={1.6} />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <Award className="w-10 h-10 mx-auto text-[#FAF5F0]" />
            <h2 className="font-serif text-3xl sm:text-4xl font-normal">
              Ready to Release the Subconscious Weight?
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF5F0]/90 leading-relaxed font-light">
              Dani offers certified ThetaHealing® sessions both in-person at our Fort Lauderdale sanctuary and worldwide over high-definition Zoom video.
            </p>
            <div className="pt-3">
              <button
                onClick={() => onOpenBooking('thetahealing')}
                className="bg-[#FAF5F0] hover:bg-white text-[#8E4A49] px-9 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Book Your ThetaHealing® Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
