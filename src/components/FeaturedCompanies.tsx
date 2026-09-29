'use client';

import React from 'react';
import { Company } from '../types/job';
import { Star, MapPin, Briefcase } from 'lucide-react';

interface FeaturedCompaniesProps {
  companies: Company[];
  onSelectCompany: (companyName: string) => void;
}

export const FeaturedCompanies: React.FC<FeaturedCompaniesProps> = ({
  companies,
  onSelectCompany,
}) => {
  return (
    <section id="companies" className="py-10 bg-slate-50/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Featured Employers
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Top technology brands actively recruiting on CareerHub
            </p>
          </div>
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-2 sm:mt-0">
            Direct Hiring Partners
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {company.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">{company.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{company.rating}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                  {company.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{company.location}</span>
                </div>
                <button
                  onClick={() => onSelectCompany(company.name)}
                  className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50/70 hover:bg-blue-100/70 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{company.openJobsCount} Openings</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
