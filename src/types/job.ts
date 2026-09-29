export type JobType = 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
export type WorkplaceType = 'Remote' | 'Hybrid' | 'On-site';
export type ExperienceLevel = '0-2 years' | '3-5 years' | '5+ years';

export interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  salary: number; // numeric annual salary in USD
  salaryFormatted: string;
  experience: ExperienceLevel;
  jobType: JobType;
  workplaceType: WorkplaceType;
  skills: string[];
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  featured?: boolean;
}

export interface Company {
  id: number;
  name: string;
  logo: string;
  industry: string;
  location: string;
  openJobsCount: number;
  rating: number;
  description: string;
}

export interface Application {
  id: string;
  jobId: number;
  jobTitle: string;
  companyName: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  resumeFileName: string;
  coverLetter?: string;
  appliedDate: string;
  status: 'Submitted' | 'Under Review' | 'Shortlisted';
}

export interface FilterState {
  keyword: string;
  location: string;
  minSalary: number;
  experience: string;
  jobType: string;
  workplaceType: string;
}

export type SortOption = 'recent' | 'salary-high' | 'salary-low' | 'experience';
