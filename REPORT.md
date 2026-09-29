# TECH ODYSSEY 2026 — ROUND 2 DEBUGGING REPORT
## Website #5: CAREERHUB

- **Repository Cloned From:** `https://github.com/trithish0-star/web5.git`
- **Submitted Repository:** [https://github.com/Kabilan1907/Careerhub.git](https://github.com/Kabilan1907/Careerhub.git)
- **Branch:** `main`
- **Verification Status:** `npm run lint` passed (0 errors, 0 warnings), `npm run build` successful

---

## 1. Executive Summary

CAREERHUB is a modern recruitment and job search web platform built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. During the debugging challenge, **7 intentional functional bugs** and **2 ESLint compile-time errors (plus 9 unused import warnings)** were identified, analyzed, and completely resolved.

All fixes were verified through local runtime testing on `http://localhost:3000`, full ESLint validation, and Next.js Turbopack production compilation.

---

## 2. Intentional Challenge Bugs (BUG-01 to BUG-07)

### BUG-01: Keyword Search Inversion
- **Bug ID:** BUG-01
- **File:** `src/app/page.tsx`
- **Feature:** Keyword Search in Hero / Filter Bar
- **Description:** Searching for standard terms (e.g., "Python", "Developer") returned 0 results or "No matching jobs found".
- **Root Cause:** The search condition inverted the substring matching logic by executing `kw.includes(job.title.toLowerCase())` instead of checking if the job title, company, skills, or description contained the search keyword.
- **Code Changes:**
```diff
- // Before:
- const kw = filters.keyword.toLowerCase().trim();
- const matches = kw.includes(job.title.toLowerCase());
- if (!matches) return false;

+ // After:
+ const kw = filters.keyword.toLowerCase().trim();
+ const matches =
+   job.title.toLowerCase().includes(kw) ||
+   job.company.toLowerCase().includes(kw) ||
+   job.skills.some((skill) => skill.toLowerCase().includes(kw)) ||
+   job.description.toLowerCase().includes(kw);
+ if (!matches) return false;
```
- **Verification:** Searching "Python" properly returns all matching roles such as "Python Developer" at TechNova Systems and "AI/ML Intern".

---

### BUG-02: Location Filter Inversion
- **Bug ID:** BUG-02
- **File:** `src/app/page.tsx`
- **Feature:** City / Location Filter
- **Description:** Selecting a city (e.g., "San Francisco, CA") hid all jobs in that selected city and only showed jobs from other cities.
- **Root Cause:** The filter condition used an inverted equality check `job.location === filters.location`, which excluded matching jobs instead of retaining them.
- **Code Changes:**
```diff
- // Before:
- if (filters.location && filters.location !== 'All') {
-   if (job.location === filters.location) {
-     return false;
-   }
- }

+ // After:
+ if (filters.location && filters.location !== 'All') {
+   if (job.location !== filters.location) {
+     return false;
+   }
+ }
```
- **Verification:** Selecting "San Francisco, CA" exclusively displays roles in San Francisco.

---

### BUG-03: Minimum Salary Filter Inverted Comparison
- **Bug ID:** BUG-03
- **File:** `src/app/page.tsx`
- **Feature:** Minimum Annual Salary Threshold
- **Description:** Selecting a minimum salary tier (e.g., "$100,000+") displayed low-paying roles and eliminated higher-paying positions.
- **Root Cause:** The filter compared `job.salary > filters.minSalary`, returning `false` for jobs paying more than the minimum threshold.
- **Code Changes:**
```diff
- // Before:
- if (filters.minSalary > 0) {
-   if (job.salary > filters.minSalary) {
-     return false;
-   }
- }

+ // After:
+ if (filters.minSalary > 0) {
+   if (job.salary < filters.minSalary) {
+     return false;
+   }
+ }
```
- **Verification:** Selecting "$100,000+" displays only roles with salaries >= $100k ($110k, $120k, $140k, etc.).

---

### BUG-04: "Apply Now" Job Selection Hardcoded
- **Bug ID:** BUG-04
- **File:** `src/app/page.tsx`
- **Feature:** Job Application Modal Trigger
- **Description:** Clicking "Apply Now" on any job card opened the application modal pre-selected for the first job in the catalog ("Python Developer") regardless of which card was clicked.
- **Root Cause:** `handleApplyNow` hardcoded `const target = jobs[0] || job;` and set `selectedApplyJob` to `target`.
- **Code Changes:**
```diff
- // Before:
- const handleApplyNow = (job: Job) => {
-   const target = jobs[0] || job;
-   setSelectedApplyJob(target);
-   setIsApplyModalOpen(true);
- };

+ // After:
+ const handleApplyNow = (job: Job) => {
+   setSelectedApplyJob(job);
+   setIsApplyModalOpen(true);
+ };
```
- **Verification:** Clicking "Apply Now" on any card (e.g., "DevOps Engineer", "Frontend Developer") opens the modal configured for that specific role and employer.

---

### BUG-05: Resume File Upload Validation Bypass
- **Bug ID:** BUG-05
- **File:** `src/components/ApplicationModal.tsx`
- **Feature:** Resume Document Upload Validation
- **Description:** Non-document files (`.png`, `.jpg`, `.txt`, `.exe`) were accepted as valid resumes without blocking form submission.
- **Root Cause:** When `isSupported` evaluated to `false`, the code printed a warning to `console.warn(...)` without returning or resetting the file state, then called `setResumeFile(file)`.
- **Code Changes:**
```diff
- // Before:
- const isSupported = allowedExtensions.includes(extension);
- if (!isSupported) {
-   console.warn(`File format ${extension} uploaded.`);
- }
- setResumeFile(file);
- setFormError('');

+ // After:
+ const isSupported = allowedExtensions.includes(extension);
+ if (!isSupported) {
+   setFormError('Invalid file type. Only .pdf, .doc, and .docx files are permitted.');
+   setResumeFile(null);
+   return;
+ }
+ setResumeFile(file);
+ setFormError('');
```
- **Verification:** Uploading unsupported file types triggers an error alert and clears the file selection. Uploading `.pdf`, `.doc`, or `.docx` succeeds.

---

### BUG-06: Application Required Field Validation Incomplete
- **Bug ID:** BUG-06
- **File:** `src/components/ApplicationModal.tsx`
- **Feature:** Application Form Required Fields Check
- **Description:** The form could be submitted with required fields (Email, Phone) empty as long as Full Name was entered.
- **Root Cause:** The validation used logical AND (`&&`): `if (!fullName.trim() && !email.trim() && !phone.trim())`, which only triggered if all fields were simultaneously blank.
- **Code Changes:**
```diff
- // Before:
- if (!fullName.trim() && !email.trim() && !phone.trim()) {
-   setFormError('Please complete all required fields before submitting.');
-   return;
- }

+ // After:
+ if (!fullName.trim() || !email.trim() || !phone.trim() || !resumeFile) {
+   setFormError('Please complete all required fields and attach your resume.');
+   return;
+ }
```
- **Verification:** Missing any of Full Name, Email, Phone, or Resume blocks form submission with an explicit error message.

---

### BUG-07: Mobile Responsive Card Overflow & Overlap
- **Bug ID:** BUG-07
- **File:** `src/components/JobCard.tsx`
- **Feature:** Mobile Viewport Card Layout
- **Description:** On mobile viewports (<390px, such as iPhone SE / 375px), job cards overflowed horizontally past the viewport edge and overlapped vertically.
- **Root Cause:** The card container included `min-w-[390px] md:min-w-0 -mb-8 md:mb-0 relative z-10`. The `min-w-[390px]` forced horizontal overflow, while `-mb-8` pulled adjacent cards upward, covering card contents.
- **Code Changes:**
```diff
- // Before:
- className="job-card bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group min-w-[390px] md:min-w-0 -mb-8 md:mb-0 relative z-10"

+ // After:
+ className="job-card bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group w-full mb-0 relative"
```
- **Verification:** On small mobile screens (375px), cards fit flush within screen boundaries and have standard vertical margins without any overlapping.

---

## 3. ESLint & Code Quality Fixes

### A. Unescaped HTML Entities in JSX
- **File:** `src/app/page.tsx:317`
- **Issue:** Double quotes in `<p>© 2026 CAREERHUB Inc. "Find your next opportunity."</p>` failed the `react/no-unescaped-entities` ESLint rule.
- **Fix:** Escaped with `&quot;`:
  ```tsx
  <p>© 2026 CAREERHUB Inc. &quot;Find your next opportunity.&quot;</p>
  ```

### B. Unused Imports Cleaned
The following unused imports were removed to ensure zero linter warnings:
- `src/components/ApplicationsModal.tsx`: Removed `CheckCircle2`
- `src/components/JobCard.tsx`: Removed `Check`
- `src/components/JobDetailsModal.tsx`: Removed `Briefcase`
- `src/components/ProfileModal.tsx`: Removed `User`, `Award`, `Briefcase`
- `src/components/SavedJobsModal.tsx`: Removed `DollarSign`, `MapPin`
- `src/components/SuccessModal.tsx`: Removed `ExternalLink`

---

## 4. Verification & Build Results

| Check | Command | Status | Result |
|---|---|---|---|
| **Linter** | `npm run lint` | ✅ PASSED | 0 errors, 0 warnings |
| **Production Build** | `npm run build` | ✅ PASSED | Compiled with Next.js Turbopack in 949ms |
| **Dev Server** | `npm run dev` | ✅ PASSED | Active on `http://localhost:3000` |
| **Git Push** | `git push -u origin main` | ✅ PASSED | Pushed to `Kabilan1907/Careerhub` |
