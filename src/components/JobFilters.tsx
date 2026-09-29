'use client';

import React from 'react';
import { FilterState } from '../types/job';
import { LOCATIONS, SALARY_RANGES, EXPERIENCE_LEVELS, JOB_TYPES, WORKPLACE_TYPES } from '../data/mockData';
import { Filter, RotateCcw, DollarSign, MapPin, Briefcase, GraduationCap, Laptop } from 'lucide-react';

interface JobFiltersProps {
  filters: FilterState;
  onFilterChange: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  onClearFilters: () => void;
  activeFilterCount: number;
}

export const JobFilters: React.FC<JobFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  activeFilterCount,
}) => {
  return (
    <aside className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-blue-600" />
          <h3 className="font-bold text-slate-900 text-base">Filter Jobs</h3>
          {activeFilterCount > 0 && (
            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
              {activeFilterCount}
            </span>
          )}
        </div>
        {activeFilterCount > 0 && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-rose-600 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Location Filter */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          <span>Location</span>
        </label>
        <select
          value={filters.location}
          onChange={(e) => onFilterChange('location', e.target.value)}
          className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-hidden transition-all cursor-pointer"
        >
          {LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>
              {loc === 'All' ? 'All Locations' : loc}
            </option>
          ))}
        </select>
      </div>

      {/* Salary Filter */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
          <DollarSign className="w-3.5 h-3.5 text-slate-400" />
          <span>Minimum Salary</span>
        </label>
        <select
          value={filters.minSalary}
          onChange={(e) => onFilterChange('minSalary', Number(e.target.value))}
          className="w-full text-sm rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-hidden transition-all cursor-pointer"
        >
          {SALARY_RANGES.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Experience Filter */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
          <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
          <span>Experience Level</span>
        </label>
        <div className="space-y-1.5">
          {EXPERIENCE_LEVELS.map((exp) => (
            <label
              key={exp}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm cursor-pointer transition-colors ${
                filters.experience === exp
                  ? 'bg-blue-50 text-blue-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <input
                type="radio"
                name="experience"
                value={exp}
                checked={filters.experience === exp}
                onChange={() => onFilterChange('experience', exp)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 accent-blue-600"
              />
              <span>{exp === 'All' ? 'All Experience Levels' : exp}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Job Type Filter */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
          <Briefcase className="w-3.5 h-3.5 text-slate-400" />
          <span>Employment Type</span>
        </label>
        <div className="space-y-1.5">
          {JOB_TYPES.map((type) => (
            <label
              key={type}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm cursor-pointer transition-colors ${
                filters.jobType === type
                  ? 'bg-blue-50 text-blue-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <input
                type="radio"
                name="jobType"
                value={type}
                checked={filters.jobType === type}
                onChange={() => onFilterChange('jobType', type)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 accent-blue-600"
              />
              <span>{type === 'All' ? 'All Types' : type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Workplace Type (Remote / On-site) */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
          <Laptop className="w-3.5 h-3.5 text-slate-400" />
          <span>Workplace Model</span>
        </label>
        <div className="space-y-1.5">
          {WORKPLACE_TYPES.map((wp) => (
            <label
              key={wp}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm cursor-pointer transition-colors ${
                filters.workplaceType === wp
                  ? 'bg-blue-50 text-blue-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <input
                type="radio"
                name="workplaceType"
                value={wp}
                checked={filters.workplaceType === wp}
                onChange={() => onFilterChange('workplaceType', wp)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 accent-blue-600"
              />
              <span>{wp === 'All' ? 'All Workplace Models' : wp}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};
