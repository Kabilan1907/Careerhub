'use client';

import React, { useState } from 'react';
import { Job, Application } from '../types/job';
import { X, UploadCloud, AlertCircle, FileCheck, CheckCircle2 } from 'lucide-react';

interface ApplicationModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (application: Application) => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  job,
  isOpen,
  onClose,
  onSubmitSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('0-2 years');
  const [coverLetter, setCoverLetter] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !job) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedExtensions = ['.pdf', '.doc', '.docx'];
    const extension = '.' + file.name.split('.').pop()?.toLowerCase();

    // Verification check for resume document
    const isSupported = allowedExtensions.includes(extension);
    if (!isSupported) {
      setFormError('Invalid file type. Only .pdf, .doc, and .docx files are permitted.');
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
    setFormError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Required fields check: Full Name, Email, Phone, and Resume
    if (!fullName.trim() || !email.trim() || !phone.trim() || !resumeFile) {
      setFormError('Please complete all required fields and attach your resume.');
      return;
    }

    setIsSubmitting(true);

    const applicationId = `APP-2026-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

    const newApplication: Application = {
      id: applicationId,
      jobId: job.id,
      jobTitle: job.title,
      companyName: job.company,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      experience,
      resumeFileName: resumeFile ? resumeFile.name : 'resume_unattached.pdf',
      coverLetter: coverLetter.trim(),
      appliedDate: 'Just now',
      status: 'Submitted',
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitSuccess(newApplication);
      // Reset form
      setFullName('');
      setEmail('');
      setPhone('');
      setCoverLetter('');
      setResumeFile(null);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50/50">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Application Portal
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Applying for {job.title}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {job.company} • {job.location} • {job.salaryFormatted}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {formError && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Alex Morgan"
              className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-hidden transition-all"
            />
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@example.com"
                className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-hidden transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-hidden transition-all"
              />
            </div>
          </div>

          {/* Experience level */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Relevant Experience <span className="text-rose-500">*</span>
            </label>
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-hidden transition-all cursor-pointer"
            >
              <option value="0-2 years">Entry Level (0-2 years)</option>
              <option value="3-5 years">Mid Level (3-5 years)</option>
              <option value="5+ years">Senior / Lead (5+ years)</option>
            </select>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Resume / CV (Allowed: .pdf, .doc, .docx) <span className="text-rose-500">*</span>
            </label>
            <div className="relative border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-2xl p-4 text-center bg-slate-50/50 hover:bg-blue-50/20 transition-all cursor-pointer">
              <input
                type="file"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none">
                {resumeFile ? (
                  <>
                    <FileCheck className="w-8 h-8 text-emerald-600" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-900">
                      {resumeFile.name}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {(resumeFile.size / 1024).toFixed(1)} KB • Click to change file
                    </span>
                  </>
                ) : (
                  <>
                    <UploadCloud className="w-8 h-8 text-slate-400" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">
                      Upload your resume
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Supported formats: PDF, DOC, DOCX up to 10MB
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Cover Letter / Note <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <textarea
              rows={3}
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              placeholder="Highlight why you are the ideal fit for this role..."
              className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-hidden transition-all resize-none"
            />
          </div>

          {/* Action buttons */}
          <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submit Application</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
