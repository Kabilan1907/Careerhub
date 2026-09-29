'use client';

import React from 'react';
import { Search, MapPin, Sparkles, TrendingUp } from 'lucide-react';
import { LOCATIONS } from '../data/mockData';

interface HeroProps {
  keywordInput: string;
  setKeywordInput: (val: string) => void;
  locationInput: string;
  setLocationInput: (val: string) => void;
  onSearchSubmit: () => void;
  onSelectTag: (tag: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  keywordInput,
  setKeywordInput,
  locationInput,
  setLocationInput,
  onSearchSubmit,
  onSelectTag,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearchSubmit();
    }
  };

  const trendingTags = ['Python', 'Remote', 'Frontend', 'AI/ML', 'DevOps', 'Internship'];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute -top-20 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-4 shadow-2xs">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Over 1,200 tech opportunities added this week</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Find work that <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              moves you forward.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Discover verified roles at high-growth engineering teams, innovative tech giants, and breakthrough startups.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200 flex flex-col md:flex-row items-stretch gap-2.5">
            {/* Keyword Field */}
            <div className="flex-1 flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-100 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-hidden"
              />
            </div>

            {/* Location Field */}
            <div className="flex-1 flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-100 focus-within:bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
              <select
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                className="w-full bg-transparent text-sm sm:text-base text-slate-900 focus:outline-hidden cursor-pointer"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === 'All' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <button
              onClick={onSearchSubmit}
              className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Search Jobs</span>
            </button>
          </div>

          {/* Trending Searches */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-500">
            <span className="flex items-center gap-1 font-medium text-slate-600">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              Popular:
            </span>
            {trendingTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onSelectTag(tag)}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50 transition-all cursor-pointer text-xs font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-8 border-t border-slate-200/70">
          <div className="text-center p-3 rounded-xl bg-white/70 border border-slate-100 shadow-2xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">16+</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Verified Active Roles</p>
          </div>
          <div className="text-center p-3 rounded-xl bg-white/70 border border-slate-100 shadow-2xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">6</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Top Tier Tech Firms</p>
          </div>
          <div className="text-center p-3 rounded-xl bg-white/70 border border-slate-100 shadow-2xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-indigo-600">$175k</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Top Annual Salary</p>
          </div>
          <div className="text-center p-3 rounded-xl bg-white/70 border border-slate-100 shadow-2xs">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600">100%</p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Free for Applicants</p>
          </div>
        </div>
      </div>
    </section>
  );
};
