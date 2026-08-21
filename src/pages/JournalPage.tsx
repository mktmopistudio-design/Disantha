import React, { useState } from 'react';
import { PageId, BlogPost } from '../types';
import { journalData } from '../data/journalData';
import { DisanthaLogo } from '../components/DisanthaLogo';
import { MandalaBackground } from '../components/MandalaBackground';
import { 
  Search, BookOpen, Clock, Calendar, ArrowRight, 
  Sparkles, X, Heart, Share2, Tag, CheckCircle2, Download 
} from 'lucide-react';

interface JournalPageProps {
  onNavigate: (page: PageId, subSection?: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingArticle, setReadingArticle] = useState<BlogPost | null>(null);
  const [guideDownloaded, setGuideDownloaded] = useState(false);

  const categories = [
    'All',
    'Disantha Stories',
    'ThetaHealing®',
    'Feminine Wellness',
    'Spirituality',
    'Healing & Transformation'
  ];

  const filteredPosts = journalData.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FAF5F0] min-h-screen py-12 relative overflow-hidden">
      <MandalaBackground position="top-right" opacity={0.04} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase">
            Wisdom & Reflections
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#3E322F] font-normal">
            The Sacred Journal
          </h1>
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="w-10 h-[1px] bg-[#C58580]/40" />
            <DisanthaLogo variant="mark" size="sm" />
            <div className="w-10 h-[1px] bg-[#C58580]/40" />
          </div>
          <p className="text-sm text-[#6E5652] max-w-md mx-auto">
            Essays on subconscious belief rewiring, feminine pelvic wisdom, lunar rituals, and soul remembrance.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/70 p-4 rounded-2xl border border-[#E8B4B0]/40 shadow-xs">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#C58580] text-[#FAF5F0] shadow-xs'
                    : 'bg-[#F7EDE8] text-[#5C4A46] hover:bg-[#E8B4B0]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#9C827D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles & themes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF5F0] border border-[#E8B4B0]/40 rounded-full pl-9 pr-4 py-1.5 text-xs text-[#3E322F] focus:outline-hidden focus:border-[#B86B65]"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setReadingArticle(post)}
              className="bg-white/80 rounded-2xl overflow-hidden border border-[#E8B4B0]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 bg-[#FAF5F0]/90 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#8E4A49] border border-[#E8B4B0]/30">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-[#7A6258]">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-medium text-[#3E322F] leading-snug group-hover:text-[#B86B65] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#6E5652] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#E8B4B0]/20 text-xs font-semibold uppercase tracking-wider text-[#8E4A49]">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Free Morning Ritual Guide Box */}
        <div className="bg-[#F7EDE8] rounded-3xl p-8 sm:p-12 border border-[#E8B4B0]/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#B86B65] uppercase flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Free Sacred Gift
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#3E322F]">
              Download the 7-Day Sacred Morning Ritual Guide
            </h3>
            <p className="text-xs sm:text-sm text-[#6E5652] leading-relaxed">
              Simple 10-minute grounding somatic practices, tea rituals, and Theta affirmations to align your day with peace.
            </p>
          </div>

          <div className="flex-shrink-0">
            {guideDownloaded ? (
              <div className="bg-[#FAF5F0] px-6 py-3 rounded-full border border-[#C58580] text-xs font-semibold text-[#8E4A49] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B86B65]" />
                <span>Guide sent to your email!</span>
              </div>
            ) : (
              <button
                onClick={() => setGuideDownloaded(true)}
                className="bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Get Free Guide</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FULL ARTICLE READER MODAL */}
      {/* ========================================================================= */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 bg-[#2D2321]/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#FAF5F0] w-full max-w-3xl rounded-2xl shadow-2xl border border-[#E8B4B0]/40 overflow-hidden max-h-[92vh] flex flex-col">
            {/* Header / Banner */}
            <div className="relative h-56 sm:h-72 overflow-hidden flex-shrink-0">
              <img
                src={readingArticle.image}
                alt={readingArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2321]/90 via-black/40 to-transparent" />
              
              <button
                onClick={() => setReadingArticle(null)}
                className="absolute top-4 right-4 p-2 bg-[#FAF5F0]/80 hover:bg-white text-[#3E322F] rounded-full transition-colors"
                aria-label="Close reader"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] bg-[#C58580] px-3 py-0.5 rounded-full font-semibold">
                  {readingArticle.category}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium leading-tight">
                  {readingArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-rose-200">
                  <span>By {readingArticle.author}</span>
                  <span>•</span>
                  <span>{readingArticle.date}</span>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-[#3E322F]">
              <p className="font-serif italic text-lg text-[#8E4A49] leading-relaxed border-l-2 border-[#C58580] pl-4">
                "{readingArticle.excerpt}"
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#5C4A46] leading-relaxed font-light">
                {readingArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-[#E8B4B0]/30 flex flex-wrap items-center gap-2 text-xs">
                <Tag className="w-3.5 h-3.5 text-[#B86B65]" />
                {readingArticle.tags.map((t, i) => (
                  <span key={i} className="bg-[#F7EDE8] text-[#8E4A49] px-2.5 py-1 rounded-md text-[11px]">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Reader Footer */}
            <div className="p-4 sm:p-6 bg-[#F7EDE8] border-t border-[#E8B4B0]/30 flex items-center justify-between">
              <button
                onClick={() => setReadingArticle(null)}
                className="text-xs text-[#7A6258] hover:text-[#3E322F]"
              >
                Back to Journal
              </button>
              <button
                onClick={() => {
                  setReadingArticle(null);
                  onOpenBooking();
                }}
                className="bg-[#C58580] hover:bg-[#B86B65] text-[#FAF5F0] px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                Book a Session with Dani
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
