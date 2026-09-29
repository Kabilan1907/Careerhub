'use client';

import React from 'react';
import { Job } from '../types/job';
import { X, MapPin, DollarSign, Clock, GraduationCap, Laptop, CheckCircle2, Bookmark, ArrowUpRight } from 'lucide-react';

interface JobDetailsModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (job: Job) => void;
  onApply: (job: Job) => void;
}

export const JobDetailsModal: React.FC<JobDetailsModalProps> = ({
  job,
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
  onApply,
}) => {
  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-5 border-b border-slate-200 flex items-start justify-between gap-4 z-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl shadow-xs">
              {job.companyLogo}
            </div>
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                {job.company}
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {job.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(job)}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                isSaved
                  ? 'bg-blue-50 border-blue-200 text-blue-600'
                  : 'border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-blue-600' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                Salary
              </span>
              <p className="text-sm font-bold text-slate-900">{job.salaryFormatted}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Location
              </span>
              <p className="text-sm font-bold text-slate-900">{job.location}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                <Laptop className="w-3.5 h-3.5 text-blue-500" />
                Workplace
              </span>
              <p className="text-sm font-bold text-slate-900">{job.workplaceType}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
                <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                Experience
              </span>
              <p className="text-sm font-bold text-slate-900">{job.experience}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
              Role Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Skills Required */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2.5">
              Required Tech Stack & Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2.5">
              Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2.5">
              Candidate Requirements
            </h4>
            <ul className="space-y-2">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2.5">
              Perks & Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {job.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 font-medium flex items-center gap-2"
                >
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer */}
        <div className="sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Clock className="w-4 h-4" />
            <span>Posted {job.postedDate}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(job);
              }}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Apply for this Position</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
