# TECH ODYSSEY 2026 — ROUND 2 DEBUGGING WEBSITE #5
## CAREERHUB — ORGANIZER BUG MAP (CONFIDENTIAL)

> **CONFIDENTIAL — ORGANIZER USE ONLY**  
> Do NOT expose or share this document with participants.  
> Target Repository: `web5` (`CAREERHUB`)  
> Total Intentional Bugs: **7**

---

### BUG 1
- **BUG ID:** BUG-01
- **Feature:** Keyword Search
- **Expected behavior:** Entering a keyword (e.g., "Python", "Frontend", "Cloud", "Developer") in the hero or search bar should return all job postings whose title, description, or skills contain the search term.
- **Actual behavior:** Searching for standard job titles or keywords (e.g., "Python") returns 0 jobs or fails to display relevant postings.
- **Root cause:** In `src/app/page.tsx`, the keyword search filter logic inverts the substring search condition: `kw.includes(job.title.toLowerCase())` is checked instead of `job.title.toLowerCase().includes(kw)`. Because `"python".includes("python developer")` evaluates to `false`, matching jobs are incorrectly excluded.
- **Reproduction:**
  1. Open the CareerHub homepage.
  2. In the hero search bar, type `Python` into the keyword input.
  3. Click **Search Jobs** (or press Enter).
  4. Notice that "Python Developer" at TechNova Systems is missing and "No matching jobs found" is displayed.
- **Fix:** In `src/app/page.tsx`, update the keyword filter inside `filteredJobs`:
  ```ts
  // Before:
  const matches = kw.includes(job.title.toLowerCase());
  // After:
  const matches = job.title.toLowerCase().includes(kw) || 
                  job.skills.some(skill => skill.toLowerCase().includes(kw));
  ```
- **Test:** Type "Python" in the search box and click "Search Jobs". The "Python Developer" and "AI/ML Intern" postings are properly listed.

---

### BUG 2
- **BUG ID:** BUG-02
- **Feature:** Location Filter
- **Expected behavior:** Selecting a location from the Location dropdown (e.g., "San Francisco, CA") should filter the list to only show positions located in that selected city.
- **Actual behavior:** Selecting a specific location hides all positions in that location and only returns jobs in other cities.
- **Root cause:** In `src/app/page.tsx`, the location filter condition contains an inverted equality check: `if (job.location === filters.location) return false;` instead of `if (job.location !== filters.location) return false;`.
- **Reproduction:**
  1. Go to the filter sidebar on the left.
  2. In the **Location** dropdown, choose `San Francisco, CA`.
  3. Inspect the displayed jobs: All San Francisco roles (Python Developer, AI/ML Intern, DevOps Engineer, Mobile App Engineer) are hidden, and roles in New York, Austin, and Seattle are shown instead.
- **Fix:** In `src/app/page.tsx`, invert the condition:
  ```ts
  // Before:
  if (filters.location && filters.location !== 'All') {
    if (job.location === filters.location) {
      return false;
    }
  }
  // After:
  if (filters.location && filters.location !== 'All') {
    if (job.location !== filters.location) {
      return false;
    }
  }
  ```
- **Test:** Select "San Francisco, CA" from the Location filter. Only jobs located in San Francisco, CA should appear in the results list.

---

### BUG 3
- **BUG ID:** BUG-03
- **Feature:** Minimum Salary Filter
- **Expected behavior:** Selecting a minimum salary tier (e.g., "$100,000+") should filter jobs and only return positions with a salary greater than or equal to $100,000.
- **Actual behavior:** Selecting a minimum salary returns low-paying roles and excludes high-paying roles that meet or exceed the salary threshold.
- **Root cause:** In `src/app/page.tsx`, the salary filter uses inverted relational comparison logic: `if (job.salary > filters.minSalary) return false;`, which discards any job paying more than the selected minimum instead of discarding jobs paying less.
- **Reproduction:**
  1. Locate the **Minimum Salary** dropdown in the filter sidebar.
  2. Select `$100,000+`.
  3. Observe the results: High-paying roles ($110k, $120k, $130k, $140k, $175k) are excluded, while lower-paying roles ($60k, $65k, $85k, $92k, $95k) are displayed.
- **Fix:** In `src/app/page.tsx`, correct the comparison operator:
  ```ts
  // Before:
  if (filters.minSalary > 0) {
    if (job.salary > filters.minSalary) {
      return false;
    }
  }
  // After:
  if (filters.minSalary > 0) {
    if (job.salary < filters.minSalary) {
      return false;
    }
  }
  ```
- **Test:** Select "$100,000+". Verify that all displayed roles show salaries >= $100,000 (e.g. $110,000, $115,000, $140,000, etc.).

---

### BUG 4
- **BUG ID:** BUG-04
- **Feature:** Job Application Selection ("Apply Now")
- **Expected behavior:** Clicking the "Apply Now" button on any job card should open the Application modal pre-configured for that specific job.
- **Actual behavior:** Clicking "Apply Now" on any job card (e.g. "DevOps Engineer", "Frontend Developer", "Data Analyst") always opens the modal for the first job in the catalog ("Python Developer").
- **Root cause:** In `src/app/page.tsx`, the `handleApplyNow` function hardcodes the selected job to `jobs[0]`: `const target = jobs[0] || job; setSelectedApplyJob(target);` instead of using the clicked `job`.
- **Reproduction:**
  1. Scroll down to job #9, "DevOps Engineer" at Quantum Labs, or job #2, "Frontend Developer" at Nexus Dynamics.
  2. Click the blue **Apply Now** button on that card.
  3. Observe the header of the opened modal: It says `Applying for Python Developer` at `TechNova Systems` instead of the selected job.
- **Fix:** In `src/app/page.tsx`, update `handleApplyNow`:
  ```ts
  // Before:
  const handleApplyNow = (job: Job) => {
    const target = jobs[0] || job;
    setSelectedApplyJob(target);
    setIsApplyModalOpen(true);
  };
  // After:
  const handleApplyNow = (job: Job) => {
    setSelectedApplyJob(job);
    setIsApplyModalOpen(true);
  };
  ```
- **Test:** Click "Apply Now" on "DevOps Engineer". The modal displays "Applying for DevOps Engineer - Quantum Labs".

---

### BUG 5
- **BUG ID:** BUG-05
- **Feature:** Resume File Upload Type Validation
- **Expected behavior:** The application form must only permit documents ending in `.pdf`, `.doc`, or `.docx`. Uploading any other file type (e.g. `.png`, `.jpg`, `.txt`, `.exe`) should be rejected with an error message.
- **Actual behavior:** Files with unapproved extensions (such as `.png`, `.txt`, `.exe`, or `.json`) are accepted as valid resumes.
- **Root cause:** In `src/components/ApplicationModal.tsx`, the `handleFileChange` method tests `allowedExtensions.includes(extension)`, but when the check fails it only logs a warning via `console.warn(...)` without halting execution or returning early. `setResumeFile(file)` is called regardless.
- **Reproduction:**
  1. Click **Apply Now** on any job card.
  2. Click the Resume upload area.
  3. Select any non-document file, such as an image (`avatar.png`), text file (`notes.txt`), or executable.
  4. Notice the file is accepted and displays a green file-ready state without any error.
- **Fix:** In `src/components/ApplicationModal.tsx`, enforce the return in `handleFileChange`:
  ```ts
  // Before:
  const isSupported = allowedExtensions.includes(extension);
  if (!isSupported) {
    console.warn(`File format ${extension} uploaded.`);
  }
  setResumeFile(file);
  // After:
  const isSupported = allowedExtensions.includes(extension);
  if (!isSupported) {
    setFormError('Invalid file type. Only .pdf, .doc, and .docx files are permitted.');
    setResumeFile(null);
    return;
  }
  setResumeFile(file);
  ```
- **Test:** Try to upload `sample.png` or `test.txt`. The application modal displays an error and rejects the upload. Uploading a `.pdf` is accepted.

---

### BUG 6
- **BUG ID:** BUG-06
- **Feature:** Application Form Required Field Validation
- **Expected behavior:** Full Name, Email, and Phone are required fields. The user must not be able to submit the application if any required field is left empty.
- **Actual behavior:** The user can submit an application with required fields (e.g., Email and Phone) left blank as long as at least one field contains text.
- **Root cause:** In `src/components/ApplicationModal.tsx`, the `handleSubmit` validation uses logical AND (`&&`) instead of logical OR (`||`): `if (!fullName.trim() && !email.trim() && !phone.trim())`. This condition only triggers if all three fields are simultaneously empty.
- **Reproduction:**
  1. Open the application modal for any job.
  2. In the **Full Name** field, type `John Doe`.
  3. Leave **Email Address** and **Phone Number** completely empty.
  4. Click **Submit Application**.
  5. The application is successfully submitted, generating an Application ID and showing the success modal.
- **Fix:** In `src/components/ApplicationModal.tsx`, correct the validation condition:
  ```ts
  // Before:
  if (!fullName.trim() && !email.trim() && !phone.trim()) {
    setFormError('Please complete all required fields before submitting.');
    return;
  }
  // After:
  if (!fullName.trim() || !email.trim() || !phone.trim() || !resumeFile) {
    setFormError('Please complete all required fields and attach your resume.');
    return;
  }
  ```
- **Test:** Enter only Full Name and click "Submit Application". The form shows an error and blocks submission until Email, Phone, and Resume are provided.

---

### BUG 7
- **BUG ID:** BUG-07
- **Feature:** Responsive Mobile Job Cards Layout
- **Expected behavior:** On mobile screen viewports (< 640px), job cards should fit within the screen width and stack cleanly with standard vertical spacing.
- **Actual behavior:** On mobile devices (viewports < 390px, such as iPhone SE / 375px), job cards overflow horizontally past the screen boundary and overlap adjacent cards vertically.
- **Root cause:** In `src/components/JobCard.tsx`, the card container contains classes `min-w-[390px] md:min-w-0 -mb-8 md:mb-0 relative z-10`. The `min-w-[390px]` forces horizontal overflow on small mobile viewports, while `-mb-8 md:mb-0` pulls subsequent cards up by 2rem, overlapping content.
- **Reproduction:**
  1. Open Chrome DevTools and toggle Device Toolbar (e.g. set viewport width to 375px or iPhone SE).
  2. Scroll down to the available jobs section.
  3. Notice that cards exceed the viewport width causing horizontal overflow, and the bottom section of each card is overlapped by the card beneath it.
- **Fix:** In `src/components/JobCard.tsx`, replace the conflicting classes:
  ```tsx
  // Before:
  className="job-card bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group min-w-[390px] md:min-w-0 -mb-8 md:mb-0 relative z-10"
  // After:
  className="job-card bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group w-full mb-0 relative"
  ```
- **Test:** Inspect in mobile viewport (375px width). Cards fit within screen width without horizontal scrollbars, and cards have clean separation between each other.
