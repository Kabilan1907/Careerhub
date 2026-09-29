'use client';

import React, { useState } from 'react';
import { Briefcase, Bookmark, FileText, User, Menu, X, Building2 } from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  appliedCount: number;
  onOpenSaved: () => void;
  onOpenApplications: () => void;
  onOpenProfile: () => void;
  onNavigateHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  appliedCount,
  onOpenSaved,
  onOpenApplications,
  onOpenProfile,
  onNavigateHome,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  CAREER<span className="text-blue-600">HUB</span>
                </span>
                <span className="hidden sm:block text-[11px] text-slate-500 font-medium -mt-1">
                  Find your next opportunity.
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
              <button
                onClick={onNavigateHome}
                className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Jobs
              </button>
              <a
                href="#companies"
                className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                Companies
              </a>
              <button
                onClick={onOpenSaved}
                className="relative px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Bookmark className="w-4 h-4" />
                <span>Saved Jobs</span>
                {savedCount > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                    {savedCount}
                  </span>
                )}
              </button>
              <button
                onClick={onOpenApplications}
                className="relative px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Applications</span>
                {appliedCount > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                    {appliedCount}
                  </span>
                )}
              </button>
            </nav>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenProfile}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all cursor-pointer shadow-2xs"
            >
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                A
              </div>
              <span>Profile</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <button
            onClick={() => {
              onNavigateHome();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
          >
            Browse Jobs
          </button>
          <a
            href="#companies"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
          >
            <Building2 className="w-4 h-4" />
            <span>Companies</span>
          </a>
          <button
            onClick={() => {
              onOpenSaved();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Bookmark className="w-4 h-4" />
              <span>Saved Jobs</span>
            </span>
            {savedCount > 0 && (
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                {savedCount}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              onOpenApplications();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Applications</span>
            </span>
            {appliedCount > 0 && (
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                {appliedCount}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              onOpenProfile();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2"
          >
            <User className="w-4 h-4" />
            <span>My Profile</span>
          </button>
        </div>
      )}
    </header>
  );
};
