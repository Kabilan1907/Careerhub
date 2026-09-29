'use client';

import React from 'react';
import { Application } from '../types/job';
import { CheckCircle, X, ArrowRight } from 'lucide-react';

interface SuccessModalProps {
  application: Application | null;
  isOpen: boolean;
  onClose: () => void;
  onViewApplications: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  application,
  isOpen,
  onClose,
  onViewApplications,
}) => {
  if (!isOpen || !application) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-100 p-6 sm:p-8 text-center relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-inner">
          <CheckCircle className="w-10 h-10" />
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
          Application Submitted!
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mb-6">
          Your application has been received by the talent recruitment team.
        </p>

        {/* Application details card */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left space-y-2.5 mb-6 text-xs sm:text-sm">
          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="text-slate-500 font-medium">Application ID</span>
            <span className="font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              {application.id}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500 font-medium">Position</span>
            <span className="font-bold text-slate-900">{application.jobTitle}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500 font-medium">Company</span>
            <span className="font-semibold text-slate-700">{application.companyName}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500 font-medium">Applicant</span>
            <span className="text-slate-800">{application.fullName || 'Anonymous'}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500 font-medium">Status</span>
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {application.status}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => {
              onClose();
              onViewApplications();
            }}
            className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>My Applications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            Browse More Jobs
          </button>
        </div>
      </div>
    </div>
  );
};
