import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { DisanthaLogo } from './DisanthaLogo';
import { Menu, X, Sparkles, Calendar, ChevronDown, Heart, MapPin, Globe } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, subSection?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; hasDropdown?: boolean }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT', hasDropdown: true },
    { id: 'services', label: 'SERVICES', hasDropdown: true },
    { id: 'thetahealing', label: 'THETAHEALING®' },
    { id: 'journal', label: 'JOURNAL' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <>
      {/* Top sacred announcement bar */}
      <div className="bg-[#B86B65] text-[#FAF5F0] text-xs py-1.5 px-4 tracking-wider uppercase font-medium flex items-center justify-between border-b border-[#FAF5F0]/10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-4 text-[11px] opacity-90">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#F7EDE8]" /> Fort Lauderdale, Florida
            </span>
            <span className="w-1 h-1 rounded-full bg-[#F7EDE8]/60" />
            <span className="flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-[#F7EDE8]" /> Worldwide Online Sessions
            </span>
          </div>

          <div className="mx-auto sm:mx-0 flex items-center gap-2 text-[11px]">
            <Sparkles className="w-3 h-3 text-[#F7EDE8] animate-pulse" />
            <span>A sacred sanctuary devoted to women</span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-[11px]">
            <button 
              onClick={() => onOpenBooking()}
              className="underline underline-offset-2 hover:text-[#F7EDE8] transition-colors"
            >
              In-Person & Virtual Appointments Open
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF5F0]/95 backdrop-blur-md shadow-xs py-2.5 border-b border-[#E8B4B0]/20' 
            : 'bg-[#FAF5F0] py-4 border-b border-[#FAF5F0]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center text-left focus:outline-hidden group"
          >
            <DisanthaLogo variant="horizontal" size="sm" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              
              if (item.id === 'about') {
                return (
                  <div 
                    key={item.id} 
                    className="relative"
                    onMouseEnter={() => setAboutDropdownOpen(true)}
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <button
                      onClick={() => onNavigate('about')}
                      className={`text-[12px] font-medium tracking-[0.2em] uppercase transition-colors py-2 flex items-center gap-1 ${
                        isActive ? 'text-[#B86B65] font-semibold' : 'text-[#5C4A46] hover:text-[#B86B65]'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3 opacity-70" />
                    </button>

                    {aboutDropdownOpen && (
                      <div className="absolute left-0 mt-0 w-60 bg-[#FAF5F0] rounded-lg shadow-xl border border-[#E8B4B0]/30 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <button
                          onClick={() => {
                            setAboutDropdownOpen(false);
                            onNavigate('about', 'story');
                          }}
                          className="w-full text-left px-4 py-2.5 text-xs text-[#3E322F] hover:bg-[#F7EDE8] hover:text-[#B86B65] transition-colors flex flex-col"
                        >
                          <span className="font-medium tracking-wide">The Story of Disantha</span>
                          <span className="text-[10px] text-[#7A6258] mt-0.5">Origin, Calliandra flower & Jalapão</span>
                        </button>
                        <button
                          onClick={() => {
                            setAboutDropdownOpen(false);
                            onNavigate('about', 'dani');
                          }}
                          className="w-full text-left px-4 py-2.5 text-xs text-[#3E322F] hover:bg-[#F7EDE8] hover:text-[#B86B65] transition-colors flex flex-col border-t border-[#E8B4B0]/15"
                        >
                          <span className="font-medium tracking-wide">Meet Dani</span>
                          <span className="text-[10px] text-[#7A6258] mt-0.5">Healer, guide & sacred space holder</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              if (item.id === 'services') {
                return (
                  <div 
                    key={item.id} 
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => onNavigate('services')}
                      className={`text-[12px] font-medium tracking-[0.2em] uppercase transition-colors py-2 flex items-center gap-1 ${
                        isActive ? 'text-[#B86B65] font-semibold' : 'text-[#5C4A46] hover:text-[#B86B65]'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3 opacity-70" />
                    </button>

                    {servicesDropdownOpen && (
                      <div className="absolute left-0 mt-0 w-72 bg-[#FAF5F0] rounded-lg shadow-xl border border-[#E8B4B0]/30 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <button
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onNavigate('services', 'private');
                          }}
                          className="w-full text-left px-4 py-2.5 text-xs text-[#3E322F] hover:bg-[#F7EDE8] hover:text-[#B86B65] transition-colors flex flex-col"
                        >
                          <span className="font-medium tracking-wide">Private Healing Sessions</span>
                          <span className="text-[10px] text-[#7A6258] mt-0.5">ThetaHealing®, Usui Reiki & Guidance</span>
                        </button>
                        <button
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onNavigate('services', 'rituals');
                          }}
                          className="w-full text-left px-4 py-2.5 text-xs text-[#3E322F] hover:bg-[#F7EDE8] hover:text-[#B86B65] transition-colors flex flex-col border-t border-[#E8B4B0]/15"
                        >
                          <span className="font-medium tracking-wide">Sacred Rituals & Blessings</span>
                          <span className="text-[10px] text-[#7A6258] mt-0.5">Womb Care & Mother's Blessing</span>
                        </button>
                        <button
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onNavigate('services', 'community');
                          }}
                          className="w-full text-left px-4 py-2.5 text-xs text-[#3E322F] hover:bg-[#F7EDE8] hover:text-[#B86B65] transition-colors flex flex-col border-t border-[#E8B4B0]/15"
                        >
                          <span className="font-medium tracking-wide">Community & Circles</span>
                          <span className="text-[10px] text-[#7A6258] mt-0.5">Sacred Women's Circles & Sound Baths</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-[12px] font-medium tracking-[0.2em] uppercase transition-colors relative py-1 ${
                    isActive 
                      ? 'text-[#B86B65] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#B86B65]' 
                      : 'text-[#5C4A46] hover:text-[#B86B65]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Session</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#5C4A46] hover:text-[#B86B65] focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF5F0] border-t border-[#E8B4B0]/30 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm uppercase tracking-widest py-2 border-b border-[#E8B4B0]/20 ${
                  currentPage === 'home' ? 'text-[#B86B65] font-bold' : 'text-[#3E322F]'
                }`}
              >
                Home
              </button>

              <div className="border-b border-[#E8B4B0]/20 pb-2">
                <button
                  onClick={() => {
                    onNavigate('about');
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left text-sm uppercase tracking-widest py-2 ${
                    currentPage === 'about' ? 'text-[#B86B65] font-bold' : 'text-[#3E322F]'
                  }`}
                >
                  About
                </button>
                <div className="pl-4 space-y-2 mt-1">
                  <button
                    onClick={() => {
                      onNavigate('about', 'story');
                      setMobileMenuOpen(false);
                    }}
                    className="text-xs text-[#7A6258] hover:text-[#B86B65] block text-left"
                  >
                    ↳ The Story of Disantha & Jalapão
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('about', 'dani');
                      setMobileMenuOpen(false);
                    }}
                    className="text-xs text-[#7A6258] hover:text-[#B86B65] block text-left"
                  >
                    ↳ Meet Dani (Founder & Healer)
                  </button>
                </div>
              </div>

              <div className="border-b border-[#E8B4B0]/20 pb-2">
                <button
                  onClick={() => {
                    onNavigate('services');
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left text-sm uppercase tracking-widest py-2 ${
                    currentPage === 'services' ? 'text-[#B86B65] font-bold' : 'text-[#3E322F]'
                  }`}
                >
                  Healing Experiences & Services
                </button>
                <div className="pl-4 space-y-2 mt-1">
                  <button
                    onClick={() => {
                      onNavigate('services', 'private');
                      setMobileMenuOpen(false);
                    }}
                    className="text-xs text-[#7A6258] hover:text-[#B86B65] block text-left"
                  >
                    ↳ Private Sessions (ThetaHealing, Reiki)
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('services', 'rituals');
                      setMobileMenuOpen(false);
                    }}
                    className="text-xs text-[#7A6258] hover:text-[#B86B65] block text-left"
                  >
                    ↳ Sacred Rituals (Womb Care, Mother's Blessing)
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('services', 'community');
                      setMobileMenuOpen(false);
                    }}
                    className="text-xs text-[#7A6258] hover:text-[#B86B65] block text-left"
                  >
                    ↳ Community Circles & Sound Baths
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  onNavigate('thetahealing');
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm uppercase tracking-widest py-2 border-b border-[#E8B4B0]/20 ${
                  currentPage === 'thetahealing' ? 'text-[#B86B65] font-bold' : 'text-[#3E322F]'
                }`}
              >
                ThetaHealing®
              </button>

              <button
                onClick={() => {
                  onNavigate('journal');
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm uppercase tracking-widest py-2 border-b border-[#E8B4B0]/20 ${
                  currentPage === 'journal' ? 'text-[#B86B65] font-bold' : 'text-[#3E322F]'
                }`}
              >
                Journal / Blog
              </button>

              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm uppercase tracking-widest py-2 border-b border-[#E8B4B0]/20 ${
                  currentPage === 'contact' ? 'text-[#B86B65] font-bold' : 'text-[#3E322F]'
                }`}
              >
                Contact
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-center mt-4 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Session</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
};
