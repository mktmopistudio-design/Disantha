import React, { useState } from 'react';
import { PageId } from '../types';
import { DisanthaLogo } from './DisanthaLogo';
import { Mail, MapPin, Instagram, Facebook, Heart, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, subSection?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#FAF5F0] border-t border-[#E8B4B0]/30 text-[#3E322F] relative overflow-hidden">
      {/* Decorative subtle gradient ribbon */}
      <div className="h-1 w-full bg-gradient-to-r from-[#E8B4B0] via-[#C58580] to-[#E8B4B0]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#E8B4B0]/25">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <button 
              onClick={() => onNavigate('home')} 
              className="text-left focus:outline-hidden"
            >
              <DisanthaLogo variant="horizontal" size="md" />
            </button>
            <p className="font-serif italic text-base text-[#6E5652] max-w-sm leading-relaxed">
              "A sanctuary where women heal, awaken, and blossom into the fullest expression of themselves."
            </p>
            <div className="pt-2 text-xs text-[#7A6258] space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B86B65]" />
                <span>Fort Lauderdale, Florida (In-Person Sanctuary)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B86B65]" />
                <a href="mailto:hello@disanthawellness.com" className="hover:text-[#B86B65] transition-colors">
                  hello@disanthawellness.com
                </a>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase font-bold text-[#8E4A49]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#5C4A46]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#B86B65] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about', 'dani')} className="hover:text-[#B86B65] transition-colors">
                  About Dani
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about', 'story')} className="hover:text-[#B86B65] transition-colors">
                  The Story of Disantha
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#B86B65] transition-colors">
                  Healing Experiences
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'rituals')} className="hover:text-[#B86B65] transition-colors">
                  Womb Care Rituals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('thetahealing')} className="hover:text-[#B86B65] transition-colors">
                  ThetaHealing®
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('journal')} className="hover:text-[#B86B65] transition-colors">
                  Sacred Journal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Offerings & Connect */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase font-bold text-[#8E4A49]">
              Offerings
            </h4>
            <ul className="space-y-2 text-xs text-[#5C4A46]">
              <li>
                <button onClick={() => onOpenBooking('thetahealing')} className="hover:text-[#B86B65] transition-colors">
                  ThetaHealing® Sessions
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('reiki-healing')} className="hover:text-[#B86B65] transition-colors">
                  Usui Reiki Energy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('womb-care')} className="hover:text-[#B86B65] transition-colors">
                  Womb Blessing Ritual
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('mothers-blessings')} className="hover:text-[#B86B65] transition-colors">
                  Mother's Blessings
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('sacred-womens-circle')} className="hover:text-[#B86B65] transition-colors">
                  Sacred Women's Circles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#B86B65] transition-colors">
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Community */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm tracking-[0.2em] uppercase font-bold text-[#8E4A49]">
              Join the Sacred Circle
            </h4>
            <p className="text-xs text-[#6E5652] leading-relaxed">
              Receive gentle moon musings, meditation audio gifts, and invitations to intimate circles directly in your inbox.
            </p>

            {subscribed ? (
              <div className="bg-[#F7EDE8] border border-[#C58580]/40 rounded-xl p-3 text-xs text-[#8E4A49] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B86B65] flex-shrink-0" />
                <span>Welcome to our sanctuary circle. Check your inbox for your sacred morning guide. ♡</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/80 border border-[#E8B4B0]/60 rounded-full px-4 py-2.5 text-xs text-[#3E322F] placeholder:text-[#9C827D] focus:outline-hidden focus:border-[#B86B65] focus:ring-1 focus:ring-[#B86B65] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 flex-shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            )}

            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-3 text-[#B86B65]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#F7EDE8] hover:bg-[#E8B4B0]/40 flex items-center justify-center transition-colors text-[#8E4A49]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#F7EDE8] hover:bg-[#E8B4B0]/40 flex items-center justify-center transition-colors text-[#8E4A49]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@disanthawellness.com"
                className="w-8 h-8 rounded-full bg-[#F7EDE8] hover:bg-[#E8B4B0]/40 flex items-center justify-center transition-colors text-[#8E4A49]"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7A6258] gap-4">
          <p>© {new Date().getFullYear()} Disantha Holistic Wellness. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => onNavigate('contact')} className="hover:text-[#B86B65] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#B86B65] transition-colors">
              Terms of Service
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#B86B65] transition-colors">
              Cancellation Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
