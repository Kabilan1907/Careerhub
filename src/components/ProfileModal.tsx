'use client';

import React from 'react';
import { X, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedCount: number;
  appliedCount: number;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  savedCount,
  appliedCount,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-100 p-6 sm:p-7 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
            AM
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-xl font-bold text-slate-900">Alex Morgan</h3>
              <CheckCircle className="w-4 h-4 text-blue-600 fill-blue-100" />
            </div>
            <p className="text-xs text-slate-500 font-medium">Software Engineer • Open to Work</p>
          </div>
        </div>

        {/* Profile Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-center">
            <p className="text-2xl font-extrabold text-blue-700">{savedCount}</p>
            <p className="text-xs text-slate-500 font-medium">Saved Jobs</p>
          </div>
          <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 text-center">
            <p className="text-2xl font-extrabold text-emerald-700">{appliedCount}</p>
            <p className="text-xs text-slate-500 font-medium">Applications</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 mb-6 text-xs sm:text-sm">
          <div className="flex items-center gap-3 text-slate-600">
            <Mail className="w-4 h-4 text-slate-400" />
            <span>alex.morgan@example.com</span>
          </div>
          <div className="flex items-center gap-3 text-slate-600">
            <Phone className="w-4 h-4 text-slate-400" />
            <span>+1 (555) 234-5678</span>
          </div>
          <div className="flex items-center gap-3 text-slate-600">
            <MapPin className="w-4 h-4 text-slate-400" />
            <span>San Francisco Bay Area, CA</span>
          </div>
        </div>

        {/* Skills Tag */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Primary Skills
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {['TypeScript', 'React', 'Next.js', 'Python', 'Docker', 'AWS'].map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
        >
          Close Profile
        </button>
      </div>
    </div>
  );
};
