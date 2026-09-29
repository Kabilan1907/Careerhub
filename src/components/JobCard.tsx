'use client';

import React from 'react';
import { Job } from '../types/job';
import { MapPin, DollarSign, Clock, Bookmark, ArrowUpRight } from 'lucide-react';

interface JobCardProps {
  job: Job;
  isSaved: boolean;
  onToggleSave: (job: Job) => void;
  onSelectJob: (job: Job) => void;
  onApplyNow: (job: Job) => void;
}

export const JobCard: React.FC<JobCardProps> = ({
  job,
  isSaved,
  onToggleSave,
  onSelectJob,
  onApplyNow,
}) => {
  return (
    <div
      className="job-card bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group w-full mb-0 relative"
    >
      <div>
        {/* Top Header: Company + Save Button */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform shadow-2xs">
              {job.companyLogo}
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {job.company}
              </h4>
              <h3
                onClick={() => onSelectJob(job)}
                className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer"
              >
                {job.title}
              </h3>
            </div>
          </div>

          <button
            onClick={() => onToggleSave(job)}
            title={isSaved ? 'Remove from saved' : 'Save job'}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              isSaved
                ? 'bg-blue-50 border-blue-200 text-blue-600'
                : 'border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-blue-600' : ''}`} />
          </button>
        </div>

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
            <DollarSign className="w-3 h-3 text-emerald-600" />
            {job.salaryFormatted}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
            <MapPin className="w-3 h-3 text-slate-400" />
            {job.location}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
            {job.workplaceType}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 text-xs font-medium border border-purple-100">
            {job.jobType}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-medium border border-amber-100">
            {job.experience}
          </span>
        </div>

        {/* Description snippet */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {job.description}
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 4 && (
            <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-400 text-xs font-medium">
              +{job.skills.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
          <Clock className="w-3.5 h-3.5" />
          <span>{job.postedDate}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectJob(job)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Details
          </button>
          <button
            onClick={() => onApplyNow(job)}
            className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all cursor-pointer flex items-center gap-1"
          >
            <span>Apply Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
