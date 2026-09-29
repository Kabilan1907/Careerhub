'use client';

import React, { useState, useMemo } from 'react';
import { MOCK_JOBS, FEATURED_COMPANIES } from '../data/mockData';
import { Job, FilterState, SortOption, Application } from '../types/job';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { FeaturedCompanies } from '../components/FeaturedCompanies';
import { JobFilters } from '../components/JobFilters';
import { JobCard } from '../components/JobCard';
import { JobDetailsModal } from '../components/JobDetailsModal';
import { ApplicationModal } from '../components/ApplicationModal';
import { SuccessModal } from '../components/SuccessModal';
import { SavedJobsModal } from '../components/SavedJobsModal';
import { ApplicationsModal } from '../components/ApplicationsModal';
import { ProfileModal } from '../components/ProfileModal';
import { ArrowUpDown, SearchX, Briefcase } from 'lucide-react';

export default function Home() {
  const [jobs] = useState<Job[]>(MOCK_JOBS);

  // Filters State
  const [filters, setFilters] = useState<FilterState>({
    keyword: '',
    location: 'All',
    minSalary: 0,
    experience: 'All',
    jobType: 'All',
    workplaceType: 'All',
  });

  // Hero search inputs (staged until Search is clicked)
  const [heroKeyword, setHeroKeyword] = useState('');
  const [heroLocation, setHeroLocation] = useState('All');

  // Sorting
  const [sortOption, setSortOption] = useState<SortOption>('recent');

  // Saved Jobs
  const [savedJobIds, setSavedJobIds] = useState<number[]>([1, 5]);

  // Applications
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 'APP-2026-9A102',
      jobId: 2,
      jobTitle: 'Frontend Developer',
      companyName: 'Nexus Dynamics',
      fullName: 'Alex Morgan',
      email: 'alex.morgan@example.com',
      phone: '+1 (555) 234-5678',
      experience: '0-2 years',
      resumeFileName: 'Alex_Morgan_Frontend_Resume.pdf',
      appliedDate: 'Yesterday',
      status: 'Under Review',
    },
  ]);

  // Modals state
  const [selectedDetailsJob, setSelectedDetailsJob] = useState<Job | null>(null);
  const [selectedApplyJob, setSelectedApplyJob] = useState<Job | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [recentApplication, setRecentApplication] = useState<Application | null>(null);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [isApplicationsModalOpen, setIsApplicationsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Filter change handlers
  const handleFilterChange = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      keyword: '',
      location: 'All',
      minSalary: 0,
      experience: 'All',
      jobType: 'All',
      workplaceType: 'All',
    });
    setHeroKeyword('');
    setHeroLocation('All');
  };

  const handleHeroSearchSubmit = () => {
    setFilters((prev) => ({
      ...prev,
      keyword: heroKeyword,
      location: heroLocation,
    }));
  };

  const handleHeroTagClick = (tag: string) => {
    setHeroKeyword(tag);
    setFilters((prev) => ({
      ...prev,
      keyword: tag,
    }));
  };

  const handleCompanySelect = (companyName: string) => {
    setHeroKeyword(companyName);
    setFilters((prev) => ({
      ...prev,
      keyword: companyName,
    }));
  };

  // Toggle Save Job
  const handleToggleSave = (job: Job) => {
    setSavedJobIds((prev) =>
      prev.includes(job.id) ? prev.filter((id) => id !== job.id) : [...prev, job.id]
    );
  };

  // Trigger Apply Now
  const handleApplyNow = (job: Job) => {
    setSelectedApplyJob(job);
    setIsApplyModalOpen(true);
  };

  // Submit Application Success
  const handleApplicationSuccess = (newApp: Application) => {
    setApplications((prev) => [newApp, ...prev]);
    setIsApplyModalOpen(false);
    setRecentApplication(newApp);
    setIsSuccessModalOpen(true);
  };

  // Filter Calculation
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Keyword matching
      if (filters.keyword.trim()) {
        const kw = filters.keyword.toLowerCase().trim();
        const matches =
          job.title.toLowerCase().includes(kw) ||
          job.company.toLowerCase().includes(kw) ||
          job.skills.some((skill) => skill.toLowerCase().includes(kw)) ||
          job.description.toLowerCase().includes(kw);
        if (!matches) return false;
      }

      // Location matching
      if (filters.location && filters.location !== 'All') {
        if (job.location !== filters.location) {
          return false;
        }
      }

      // Salary matching
      if (filters.minSalary > 0) {
        if (job.salary < filters.minSalary) {
          return false;
        }
      }

      // Experience matching
      if (filters.experience !== 'All' && job.experience !== filters.experience) {
        return false;
      }

      // Job Type matching
      if (filters.jobType !== 'All' && job.jobType !== filters.jobType) {
        return false;
      }

      // Workplace Type matching
      if (filters.workplaceType !== 'All' && job.workplaceType !== filters.workplaceType) {
        return false;
      }

      return true;
    });
  }, [jobs, filters]);

  // Sort Calculation
  const sortedJobs = useMemo(() => {
    const result = [...filteredJobs];
    switch (sortOption) {
      case 'salary-high':
        return result.sort((a, b) => b.salary - a.salary);
      case 'salary-low':
        return result.sort((a, b) => a.salary - b.salary);
      case 'experience':
        return result.sort((a, b) => a.experience.localeCompare(b.experience));
      case 'recent':
      default:
        return result.sort((a, b) => a.id - b.id);
    }
  }, [filteredJobs, sortOption]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.keyword.trim()) count++;
    if (filters.location !== 'All') count++;
    if (filters.minSalary > 0) count++;
    if (filters.experience !== 'All') count++;
    if (filters.jobType !== 'All') count++;
    if (filters.workplaceType !== 'All') count++;
    return count;
  }, [filters]);

  const savedJobsList = useMemo(() => {
    return jobs.filter((job) => savedJobIds.includes(job.id));
  }, [jobs, savedJobIds]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <Navbar
        savedCount={savedJobIds.length}
        appliedCount={applications.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
        onOpenApplications={() => setIsApplicationsModalOpen(true)}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onNavigateHome={handleClearFilters}
      />

      {/* Hero Section */}
      <Hero
        keywordInput={heroKeyword}
        setKeywordInput={setHeroKeyword}
        locationInput={heroLocation}
        setLocationInput={setHeroLocation}
        onSearchSubmit={handleHeroSearchSubmit}
        onSelectTag={handleHeroTagClick}
      />

      {/* Featured Companies */}
      <FeaturedCompanies
        companies={FEATURED_COMPANIES}
        onSelectCompany={handleCompanySelect}
      />

      {/* Main Job Search & Results Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Filter Sidebar */}
          <div className="w-full lg:w-72 shrink-0">
            <JobFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              activeFilterCount={activeFilterCount}
            />
          </div>

          {/* Right Column: Job Listings */}
          <div className="flex-1 w-full space-y-6">
            {/* Header controls: Results Count & Sort */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <h2 className="font-bold text-slate-900 text-lg">Available Jobs</h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                  {sortedJobs.length} {sortedJobs.length === 1 ? 'position' : 'positions'}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  <span>Sort by:</span>
                </div>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="text-xs sm:text-sm font-medium rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-1.5 text-slate-800 focus:bg-white focus:border-blue-500 focus:outline-hidden transition-all cursor-pointer"
                >
                  <option value="recent">Most Recent</option>
                  <option value="salary-high">Salary: High to Low</option>
                  <option value="salary-low">Salary: Low to High</option>
                  <option value="experience">Experience Level</option>
                </select>
              </div>
            </div>

            {/* Jobs Grid */}
            {sortedJobs.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-2xs">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                  <SearchX className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">No matching jobs found</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                  We could not find any opportunities matching your current search criteria. Try
                  resetting or broadening your filters.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {sortedJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    isSaved={savedJobIds.includes(job.id)}
                    onToggleSave={handleToggleSave}
                    onSelectJob={(j) => setSelectedDetailsJob(j)}
                    onApplyNow={handleApplyNow}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-500 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 CAREERHUB Inc. &quot;Find your next opportunity.&quot;</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-700 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-700 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-700 cursor-pointer">Employer Portal</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <JobDetailsModal
        job={selectedDetailsJob}
        isOpen={Boolean(selectedDetailsJob)}
        onClose={() => setSelectedDetailsJob(null)}
        isSaved={selectedDetailsJob ? savedJobIds.includes(selectedDetailsJob.id) : false}
        onToggleSave={handleToggleSave}
        onApply={(job) => {
          setSelectedDetailsJob(null);
          handleApplyNow(job);
        }}
      />

      <ApplicationModal
        job={selectedApplyJob}
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        onSubmitSuccess={handleApplicationSuccess}
      />

      <SuccessModal
        application={recentApplication}
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        onViewApplications={() => setIsApplicationsModalOpen(true)}
      />

      <SavedJobsModal
        savedJobs={savedJobsList}
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        onRemoveSaved={handleToggleSave}
        onApply={(job) => {
          setIsSavedModalOpen(false);
          handleApplyNow(job);
        }}
        onSelectJob={(job) => {
          setIsSavedModalOpen(false);
          setSelectedDetailsJob(job);
        }}
      />

      <ApplicationsModal
        applications={applications}
        isOpen={isApplicationsModalOpen}
        onClose={() => setIsApplicationsModalOpen(false)}
      />

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        savedCount={savedJobIds.length}
        appliedCount={applications.length}
      />
    </div>
  );
}
