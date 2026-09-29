import { Job, Company } from '../types/job';

export const FEATURED_COMPANIES: Company[] = [
  {
    id: 1,
    name: 'TechNova Systems',
    logo: '🚀',
    industry: 'Cloud Infrastructure & AI',
    location: 'San Francisco, CA',
    openJobsCount: 12,
    rating: 4.8,
    description: 'Pioneering next-generation enterprise AI orchestration engines and high-throughput systems.'
  },
  {
    id: 2,
    name: 'Nexus Dynamics',
    logo: '⚡',
    industry: 'FinTech & Real-Time Payments',
    location: 'New York, NY',
    openJobsCount: 15,
    rating: 4.7,
    description: 'Building ultra-low-latency financial settlement platforms powering millions of global transactions.'
  },
  {
    id: 3,
    name: 'CloudScale Networks',
    logo: '☁️',
    industry: 'DevOps & Distributed Systems',
    location: 'Seattle, WA',
    openJobsCount: 8,
    rating: 4.9,
    description: 'Empowering engineering teams with autonomous multi-cloud scalability and observability.'
  },
  {
    id: 4,
    name: 'DataStream AI',
    logo: '🔮',
    industry: 'Data Science & Machine Learning',
    location: 'San Francisco, CA',
    openJobsCount: 7,
    rating: 4.6,
    description: 'Transforming petabyte-scale data pipelines into actionable machine intelligence in real time.'
  },
  {
    id: 5,
    name: 'Quantum Labs',
    logo: '🧬',
    industry: 'DeepTech & Quantum Computing',
    location: 'San Francisco, CA',
    openJobsCount: 6,
    rating: 4.9,
    description: 'Pushing boundaries in quantum error mitigation, cryptography, and quantum simulation.'
  },
  {
    id: 6,
    name: 'Sentinel Shield',
    logo: '🛡️',
    industry: 'Cybersecurity & Threat Defense',
    location: 'New York, NY',
    openJobsCount: 10,
    rating: 4.8,
    description: 'Zero-trust cybersecurity defenses and AI-driven automated incident containment systems.'
  }
];

export const MOCK_JOBS: Job[] = [
  {
    id: 1,
    title: 'Python Developer',
    company: 'TechNova Systems',
    companyLogo: '🚀',
    location: 'San Francisco, CA',
    salary: 115000,
    salaryFormatted: '$115,000 / yr',
    experience: '3-5 years',
    jobType: 'Full-time',
    workplaceType: 'Remote',
    skills: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis'],
    postedDate: '1 day ago',
    featured: true,
    description: 'We are seeking an experienced Python Developer to design and optimize scalable backend services and asynchronous workers for our flagship distributed platform.',
    responsibilities: [
      'Architect robust REST and gRPC microservices using Python and FastAPI',
      'Optimize complex PostgreSQL queries and implement Redis caching strategies',
      'Collaborate with frontend engineers and infrastructure teams to ensure high uptime',
      'Write clean, well-tested code with rigorous unit and integration coverage'
    ],
    requirements: [
      '3+ years of professional backend development with Python',
      'Solid understanding of concurrency, asyncio, and message queues (Celery/Kafka)',
      'Experience with containerization (Docker) and CI/CD pipelines',
      'Bachelor’s degree in Computer Science or equivalent practical experience'
    ],
    benefits: [
      'Comprehensive health, dental, and vision insurance',
      '$2,500 annual home office & equipment stipend',
      'Unlimited paid time off (PTO) and paid family leave',
      '401(k) matching up to 5%'
    ]
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Nexus Dynamics',
    companyLogo: '⚡',
    location: 'New York, NY',
    salary: 110000,
    salaryFormatted: '$110,000 / yr',
    experience: '0-2 years',
    jobType: 'Full-time',
    workplaceType: 'Hybrid',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
    postedDate: '2 days ago',
    featured: true,
    description: 'Join our digital experience team to craft lightning-fast, pixel-perfect user interfaces for mission-critical banking and payment dashboards.',
    responsibilities: [
      'Develop modern, responsive web applications utilizing React 19 and Next.js',
      'Translate design wireframes and Figma specs into accessible, reusable components',
      'Optimize web performance, Core Web Vitals, and client-side rendering bottlenecks',
      'Participate in design reviews and maintain company-wide design systems'
    ],
    requirements: [
      '1+ years of frontend experience with React and TypeScript',
      'Strong proficiency in modern CSS, Tailwind, and responsive design',
      'Familiarity with state management libraries and RESTful API integration',
      'Strong portfolio demonstrating interactive and responsive web apps'
    ],
    benefits: [
      'Competitive equity package with annual refresh grants',
      'Hybrid work model (2 days office, 3 days remote)',
      'Wellness stipend for gym, yoga, or mental health resources',
      'Catered lunches and commuter benefits'
    ]
  },
  {
    id: 3,
    title: 'AI/ML Intern',
    company: 'DataStream AI',
    companyLogo: '🔮',
    location: 'San Francisco, CA',
    salary: 65000,
    salaryFormatted: '$65,000 / yr',
    experience: '0-2 years',
    jobType: 'Internship',
    workplaceType: 'Remote',
    skills: ['Python', 'PyTorch', 'Scikit-learn', 'LLMs', 'Hugging Face'],
    postedDate: 'Just now',
    featured: true,
    description: 'Looking for a passionate AI/ML Intern eager to experiment with state-of-the-art transformer architectures, retrieval augmented generation (RAG), and data curation.',
    responsibilities: [
      'Fine-tune open-source LLMs on domain-specific datasets and benchmark accuracy',
      'Build evaluation pipelines to measure hallucination rates and model perplexity',
      'Prepare and sanitize training datasets using Python and pandas',
      'Present experimental findings in weekly team research seminars'
    ],
    requirements: [
      'Pursuing or recently completed BS/MS in Computer Science, Data Science, or AI',
      'Hands-on experience with PyTorch, transformers, and NumPy in academic or personal projects',
      'Strong grasp of linear algebra, calculus, and machine learning fundamentals',
      'Demonstrated enthusiasm for generative AI and natural language processing'
    ],
    benefits: [
      'Direct mentorship from Senior AI Research Scientists',
      'Flexible working hours across all US time zones',
      'Full-time return offer opportunity upon internship completion',
      'Free access to GPU clusters and cloud credits'
    ]
  },
  {
    id: 4,
    title: 'Data Analyst',
    company: 'Apex Global',
    companyLogo: '📊',
    location: 'Austin, TX',
    salary: 85000,
    salaryFormatted: '$85,000 / yr',
    experience: '0-2 years',
    jobType: 'Full-time',
    workplaceType: 'On-site',
    skills: ['SQL', 'Tableau', 'Power BI', 'Python', 'Excel'],
    postedDate: '3 days ago',
    featured: false,
    description: 'Seeking a detail-driven Data Analyst to transform complex commercial datasets into executive dashboards, revenue forecasts, and growth insights.',
    responsibilities: [
      'Design, maintain, and publish self-serve BI dashboards in Tableau and Power BI',
      'Write optimized SQL queries across Snowflake and BigQuery data warehouses',
      'Partner with product and marketing leaders to uncover retention drivers',
      'Perform exploratory data analysis to evaluate A/B test outcomes'
    ],
    requirements: [
      'Strong SQL skills with experience writing window functions and complex joins',
      'Proficiency in building dashboards with Tableau or Power BI',
      'Basic knowledge of Python or R for statistical analysis',
      'Strong communication skills with the ability to tell stories with data'
    ],
    benefits: [
      'On-site campus amenities including gym and cafeteria',
      '401(k) retirement plan with corporate match',
      'Generous paid annual leave and holiday calendar',
      'Annual conference attendance and education reimbursement'
    ]
  },
  {
    id: 5,
    title: 'Backend Developer',
    company: 'CloudScale Networks',
    companyLogo: '☁️',
    location: 'Seattle, WA',
    salary: 130000,
    salaryFormatted: '$130,000 / yr',
    experience: '3-5 years',
    jobType: 'Full-time',
    workplaceType: 'Hybrid',
    skills: ['Go', 'Node.js', 'Microservices', 'Redis', 'Kafka'],
    postedDate: '1 day ago',
    featured: true,
    description: 'Join our core platform group to build resilient distributed networking services handling billions of API requests with sub-10ms response times.',
    responsibilities: [
      'Write highly concurrent backend services in Go and Node.js',
      'Implement event-driven streaming architectures using Apache Kafka',
      'Design schema migrations and index tuning for distributed SQL databases',
      'Conduct code reviews and mentor junior engineering peers'
    ],
    requirements: [
      '3+ years building high-traffic distributed backend architectures',
      'Strong knowledge of Go or modern Node.js/TypeScript environments',
      'Familiarity with event streaming and caching tiers',
      'Understanding of Linux OS concepts, networking, and security best practices'
    ],
    benefits: [
      'Comprehensive medical, vision, and dental plans',
      'Hybrid schedule with flexible work arrangement',
      'Generous parental leave for new parents',
      'Relocation assistance package available'
    ]
  },
  {
    id: 6,
    title: 'Cloud Intern',
    company: 'CloudScale Networks',
    companyLogo: '☁️',
    location: 'Seattle, WA',
    salary: 60000,
    salaryFormatted: '$60,000 / yr',
    experience: '0-2 years',
    jobType: 'Internship',
    workplaceType: 'Remote',
    skills: ['AWS', 'Docker', 'Linux', 'Terraform', 'Bash'],
    postedDate: '4 days ago',
    featured: false,
    description: 'Exciting summer internship for an aspiring Cloud/DevOps Engineer to learn Infrastructure-as-Code, container orchestration, and multi-region deployment automation.',
    responsibilities: [
      'Assist with provisioning AWS cloud infrastructure using Terraform scripts',
      'Containerize legacy testing services into lightweight Docker containers',
      'Monitor cloud health alerts and assist in on-call triage protocols',
      'Document infrastructure standards and runbooks for developer onboarding'
    ],
    requirements: [
      'Pursuing degree in Computer Science, IT, or equivalent experience',
      'Basic knowledge of AWS services (EC2, S3, IAM, VPC)',
      'Comfortable using Linux command line and writing shell scripts',
      'Eager to learn modern CI/CD tools like GitHub Actions'
    ],
    benefits: [
      'Hourly competitive stipend and cloud certification voucher bonus',
      'Dedicated mentor and weekly 1:1 career guidance sessions',
      'Remote work flexibility across Continental US',
      'Networking with industry cloud veterans'
    ]
  },
  {
    id: 7,
    title: 'UI/UX Designer',
    company: 'PixelCraft Studios',
    companyLogo: '🎨',
    location: 'New York, NY',
    salary: 95000,
    salaryFormatted: '$95,000 / yr',
    experience: '3-5 years',
    jobType: 'Full-time',
    workplaceType: 'Remote',
    skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Wireframing'],
    postedDate: '2 days ago',
    featured: false,
    description: 'Help shape intuitive SaaS workflows that users love. We need a creative UI/UX Designer who balances aesthetic elegance with data-driven ergonomics.',
    responsibilities: [
      'Produce high-fidelity mockups, design tokens, and clickable prototypes in Figma',
      'Conduct customer interviews, usability audits, and synthesis sessions',
      'Maintain and expand our cross-platform design component library',
      'Work closely with engineers to ensure flawless frontend execution'
    ],
    requirements: [
      '3+ years designing complex web apps and desktop software',
      'Expertise in Figma auto-layout, interactive components, and token variables',
      'Demonstrated portfolio showcasing end-to-end design case studies',
      'Deep understanding of accessibility (WCAG 2.1 AA) compliance'
    ],
    benefits: [
      'Top-tier Apple hardware and home office ergonomics allowance',
      'Flexible hours and true work-life balance',
      'Quarterly team retreats in major cultural cities',
      'Annual education grant for courses and conferences'
    ]
  },
  {
    id: 8,
    title: 'Full Stack Developer',
    company: 'TechNova Systems',
    companyLogo: '🚀',
    location: 'Austin, TX',
    salary: 125000,
    salaryFormatted: '$125,000 / yr',
    experience: '3-5 years',
    jobType: 'Full-time',
    workplaceType: 'Hybrid',
    skills: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'MongoDB'],
    postedDate: '5 days ago',
    featured: true,
    description: 'We need an energetic Full Stack Developer who enjoys bridging user delight with robust API contracts and database efficiency.',
    responsibilities: [
      'Build end-to-end product features from React client views to backend Node services',
      'Design flexible GraphQL schemas and RESTful web hooks',
      'Implement authentication, authorization, and data encryption policies',
      'Lead sprint planning and technical documentation efforts'
    ],
    requirements: [
      '3-5 years of full-stack engineering in commercial web applications',
      'Deep fluency with TypeScript on both frontend (React) and backend (Node.js)',
      'Experience with SQL and NoSQL databases like PostgreSQL and MongoDB',
      'Familiarity with cloud hosting and modern deployment practices'
    ],
    benefits: [
      'Stock options and lucrative equity acceleration milestones',
      'Generous 401(k) matching program',
      'Comprehensive family healthcare coverage',
      'Wellness stipend for fitness memberships and equipment'
    ]
  },
  {
    id: 9,
    title: 'DevOps Engineer',
    company: 'Quantum Labs',
    companyLogo: '🧬',
    location: 'San Francisco, CA',
    salary: 140000,
    salaryFormatted: '$140,000 / yr',
    experience: '5+ years',
    jobType: 'Full-time',
    workplaceType: 'Remote',
    skills: ['Kubernetes', 'Docker', 'CI/CD', 'AWS', 'Terraform', 'Prometheus'],
    postedDate: '1 day ago',
    featured: true,
    description: 'Build and govern bulletproof infrastructure automation. You will manage multiple Kubernetes clusters and zero-downtime deployment pipelines.',
    responsibilities: [
      'Manage multi-region production Kubernetes clusters on AWS (EKS)',
      'Automate complete cloud environments using Terraform and GitOps (ArgoCD)',
      'Deploy observability stacks utilizing Prometheus, Grafana, and OpenTelemetry',
      'Champion security hardening, vulnerability scanning, and disaster recovery'
    ],
    requirements: [
      '5+ years in DevOps, SRE, or cloud infrastructure roles',
      'In-depth knowledge of Kubernetes cluster architecture and Helm charts',
      'Extensive hands-on experience with Terraform modules and state management',
      'Proficiency in scripting with Python or Go for infrastructure tooling'
    ],
    benefits: [
      'Top-tier competitive salary and substantial pre-IPO equity',
      'Comprehensive medical, vision, and mental health coverage',
      'Remote-first freedom with flexible working arrangements',
      '$3,000 annual tech budget for gear and workspace upgrades'
    ]
  },
  {
    id: 10,
    title: 'Cybersecurity Analyst',
    company: 'Sentinel Shield',
    companyLogo: '🛡️',
    location: 'New York, NY',
    salary: 120000,
    salaryFormatted: '$120,000 / yr',
    experience: '3-5 years',
    jobType: 'Full-time',
    workplaceType: 'On-site',
    skills: ['SOC', 'SIEM', 'Penetration Testing', 'Incident Response', 'Splunk'],
    postedDate: '3 days ago',
    featured: false,
    description: 'Defend enterprise infrastructure against advanced persistent threats (APTs). You will monitor telemetry, hunt threats, and harden security posture.',
    responsibilities: [
      'Monitor real-time alerts across SIEM and EDR platforms (Splunk, CrowdStrike)',
      'Investigate security anomalies and execute rapid incident response protocols',
      'Perform regular internal vulnerability scans and coordinate patching cycles',
      'Conduct tabletop threat simulation exercises and red team evaluations'
    ],
    requirements: [
      '3+ years in SOC operations, threat intelligence, or ethical hacking',
      'Industry certifications such as CISSP, CEH, or CompTIA Security+',
      'Familiarity with MITRE ATT&CK framework and common exploit vectors',
      'Strong forensic acumen and analytical troubleshooting ability'
    ],
    benefits: [
      'Subsidized transit pass and on-site parking in Manhattan',
      'Full corporate healthcare package with zero deductible',
      'Continuous security certification and training sponsorship',
      'Catered breakfast and gourmet coffee bar on-site'
    ]
  },
  {
    id: 11,
    title: 'Data Engineer',
    company: 'DataStream AI',
    companyLogo: '🔮',
    location: 'Austin, TX',
    salary: 135000,
    salaryFormatted: '$135,000 / yr',
    experience: '5+ years',
    jobType: 'Full-time',
    workplaceType: 'Remote',
    skills: ['Apache Spark', 'Snowflake', 'Airflow', 'Python', 'Kafka'],
    postedDate: '2 days ago',
    featured: false,
    description: 'Design robust ETL/ELT pipelines streaming hundreds of gigabytes per hour to support analytics and automated model training pipelines.',
    responsibilities: [
      'Build scalable batch and real-time streaming pipelines in Spark and PySpark',
      'Orchestrate complex DAG workflows utilizing Apache Airflow',
      'Design modern dimensional data models within Snowflake and dbt',
      'Enforce data governance, quality contracts, and automated schema validation'
    ],
    requirements: [
      '5+ years experience building data architectures and big data pipelines',
      'Advanced SQL and Python data engineering competencies',
      'Deep knowledge of distributed computing concepts and partition tuning',
      'Experience with cloud data warehouses (Snowflake, BigQuery, or Redshift)'
    ],
    benefits: [
      '100% remote autonomy across anywhere in the United States',
      'Annual equity grant and performance bonus program',
      'Generous parental leave and childcare assistance subsidies',
      'Home gym allowance and wellness subscriptions'
    ]
  },
  {
    id: 12,
    title: 'Java Developer',
    company: 'Apex Global',
    companyLogo: '📊',
    location: 'Seattle, WA',
    salary: 115000,
    salaryFormatted: '$115,000 / yr',
    experience: '3-5 years',
    jobType: 'Full-time',
    workplaceType: 'Hybrid',
    skills: ['Java', 'Spring Boot', 'Kafka', 'MySQL', 'Hibernate'],
    postedDate: '4 days ago',
    featured: false,
    description: 'Looking for a solid Java Engineer to power transactional enterprise workflows, batch processing jobs, and reliable API services.',
    responsibilities: [
      'Develop backend microservices utilizing Java 21 and Spring Boot 3',
      'Integrate message queues with Apache Kafka for asynchronous processing',
      'Optimize relational databases through JPA/Hibernate tuning and query analysis',
      'Collaborate with QA automation to achieve comprehensive test suites'
    ],
    requirements: [
      '3+ years of enterprise Java and Spring ecosystem experience',
      'Strong grasp of Object-Oriented Design principles and design patterns',
      'Hands-on experience with unit testing frameworks (JUnit 5, Mockito)',
      'Experience with Maven/Gradle and CI build tools'
    ],
    benefits: [
      'Competitive compensation package with annual review increments',
      'Comprehensive dental, medical, and optical insurance',
      'Flexible spending accounts (FSA/HSA)',
      'Tuition assistance program for graduate studies'
    ]
  },
  {
    id: 13,
    title: 'Mobile App Engineer',
    company: 'Nexus Dynamics',
    companyLogo: '⚡',
    location: 'San Francisco, CA',
    salary: 128000,
    salaryFormatted: '$128,000 / yr',
    experience: '3-5 years',
    jobType: 'Full-time',
    workplaceType: 'Remote',
    skills: ['React Native', 'Swift', 'Kotlin', 'Redux', 'Mobile CI/CD'],
    postedDate: '6 days ago',
    featured: false,
    description: 'Lead mobile app development for our consumer fintech app used by over 500,000 active users every month across iOS and Android.',
    responsibilities: [
      'Develop seamless cross-platform experiences using React Native and TypeScript',
      'Bridge native iOS (Swift) and Android (Kotlin) modules when needed',
      'Optimize 60fps rendering, memory consumption, and battery footprint',
      'Manage app store submission workflows and OTA release channels'
    ],
    requirements: [
      '3+ years of React Native or native mobile application engineering',
      'Published at least one production app on Apple App Store or Google Play Store',
      'Strong proficiency in mobile state management and offline synchronization',
      'Experience with mobile automated UI testing and crash reporting'
    ],
    benefits: [
      'Cutting-edge mobile test devices provided annually',
      '100% remote workspace flexibility with travel budget',
      'Unlimited paid time off with mandatory 2-week annual vacation',
      'Company matching retirement savings plan'
    ]
  },
  {
    id: 14,
    title: 'Product Manager',
    company: 'TechNova Systems',
    companyLogo: '🚀',
    location: 'New York, NY',
    salary: 145000,
    salaryFormatted: '$145,000 / yr',
    experience: '5+ years',
    jobType: 'Full-time',
    workplaceType: 'Hybrid',
    skills: ['Product Strategy', 'Agile', 'Roadmapping', 'Analytics', 'User Discovery'],
    postedDate: '2 days ago',
    featured: true,
    description: 'Drive the vision and roadmap for developer platform tooling. You will collaborate directly with engineers, designers, and customers to ship high-impact features.',
    responsibilities: [
      'Define quarterly roadmaps and OKRs aligned with business priorities',
      'Write detailed technical product requirements (PRDs) and user stories',
      'Analyze telemetry metrics to measure feature adoption and retention curves',
      'Run customer discovery calls and beta testing cohorts'
    ],
    requirements: [
      '5+ years in technical product management for B2B or developer tools',
      'Demonstrated track record of launching successful SaaS products',
      'Strong data literacy and ability to query metrics independently',
      'Exceptional written, visual, and verbal storytelling capabilities'
    ],
    benefits: [
      'High-tier executive compensation and equity participation',
      'Hybrid office setup in Midtown Manhattan',
      'Comprehensive wellness program including mental health coaching',
      'Annual sabbatical program after 3 years of tenure'
    ]
  },
  {
    id: 15,
    title: 'QA Automation Engineer',
    company: 'Quantum Labs',
    companyLogo: '🧬',
    location: 'Austin, TX',
    salary: 92000,
    salaryFormatted: '$92,000 / yr',
    experience: '0-2 years',
    jobType: 'Full-time',
    workplaceType: 'Remote',
    skills: ['Playwright', 'Cypress', 'Selenium', 'Jest', 'TypeScript'],
    postedDate: '5 days ago',
    featured: false,
    description: 'Ensure our web applications and APIs operate flawlessly under all conditions by building comprehensive end-to-end automation test suites.',
    responsibilities: [
      'Write resilient E2E UI and API automated tests using Playwright and TypeScript',
      'Integrate test pipelines into GitHub Actions CI for pull request validation',
      'Perform exploratory testing on new features before production release',
      'Maintain automated regression test suites and identify flakiness causes'
    ],
    requirements: [
      '1-2 years of software testing or QA automation experience',
      'Familiarity with Playwright, Cypress, or Selenium frameworks',
      'Knowledge of JavaScript/TypeScript and web development basics',
      'Meticulous attention to detail and passion for quality assurance'
    ],
    benefits: [
      'Fully remote position with home office stipend',
      'Comprehensive healthcare, dental, and life insurance',
      'Generous paid holidays and sick time',
      'Online training library and conference tickets'
    ]
  },
  {
    id: 16,
    title: 'Systems Architect',
    company: 'Quantum Labs',
    companyLogo: '🧬',
    location: 'Seattle, WA',
    salary: 175000,
    salaryFormatted: '$175,000 / yr',
    experience: '5+ years',
    jobType: 'Full-time',
    workplaceType: 'Remote',
    skills: ['Distributed Systems', 'Cloud Architecture', 'High Availability', 'Security', 'Kafka'],
    postedDate: '1 day ago',
    featured: true,
    description: 'Define technical blueprint and overarching architectural patterns for petabyte-scale distributed computing and quantum simulation infrastructure.',
    responsibilities: [
      'Lead architectural strategy for global multi-region cloud services',
      'Evaluate emerging technologies and guide technical decisions for engineering groups',
      'Audit systems for latency bottlenecks, security boundaries, and fault tolerance',
      'Publish architectural decision records (ADRs) and mentor staff engineers'
    ],
    requirements: [
      '8+ years in distributed software systems with 3+ years as Lead/Architect',
      'Proven expertise designing resilient, self-healing cloud native systems',
      'Deep mastery of consensus algorithms, CAP theorem, and event streaming',
      'Strong leadership and cross-functional consensus building skills'
    ],
    benefits: [
      'Principal-tier compensation with generous equity package',
      'Complete health, dental, and disability coverage',
      'Unlimited remote flexibility worldwide',
      'Executive coaching and leadership development allowances'
    ]
  }
];

export const LOCATIONS = [
  'All',
  'San Francisco, CA',
  'New York, NY',
  'Austin, TX',
  'Seattle, WA'
];

export const SALARY_RANGES = [
  { label: 'All Salaries', value: 0 },
  { label: '$60,000+', value: 60000 },
  { label: '$80,000+', value: 80000 },
  { label: '$100,000+', value: 100000 },
  { label: '$120,000+', value: 120000 },
  { label: '$150,000+', value: 150000 }
];

export const EXPERIENCE_LEVELS = [
  'All',
  '0-2 years',
  '3-5 years',
  '5+ years'
];

export const JOB_TYPES = [
  'All',
  'Full-time',
  'Part-time',
  'Internship',
  'Contract'
];

export const WORKPLACE_TYPES = [
  'All',
  'Remote',
  'Hybrid',
  'On-site'
];
