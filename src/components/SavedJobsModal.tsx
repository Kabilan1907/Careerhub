'use client';

import React from 'react';
import { Job } from '../types/job';
import { X, Bookmark, Trash2, ArrowUpRight } from 'lucide-react';

interface SavedJobsModalProps {
  savedJobs: Job[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveSaved: (job: Job) => void;
  onApply: (job: Job) => void;
  onSelectJob: (job: Job) => void;
}

export const SavedJobsModal: React.FC<SavedJobsModalProps> = ({
  savedJobs,
  isOpen,
  onClose,
  onRemoveSaved,
  onApply,
  onSelectJob,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-slate-100 flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Bookmark className="w-5 h-5 fill-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Saved Jobs</h3>
              <p className="text-xs text-slate-500">
                {savedJobs.length} {savedJobs.length === 1 ? 'position' : 'positions'} bookmarked
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-3">
          {savedJobs.length === 0 ? (
            <div className="text-center py-12">
              <Bookmark className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-base font-bold text-slate-700">No saved jobs yet</p>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                Click the bookmark icon on any job card to save opportunities you want to revisit later.
              </p>
            </div>
          ) : (
            savedJobs.map((job) => (
              <div
                key={job.id}
                className="p-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xl shrink-0">
                    {job.companyLogo}
                  </div>
                  <div>
                    <h4
                      onClick={() => {
                        onClose();
                        onSelectJob(job);
                      }}
                      className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {job.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {job.company} • {job.location}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-600">
                      <span className="font-semibold text-emerald-600">{job.salaryFormatted}</span>
                      <span>•</span>
                      <span>{job.workplaceType}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => onRemoveSaved(job)}
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onApply(job);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all cursor-pointer flex items-center gap-1"
                  >
                    <span>Apply</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
