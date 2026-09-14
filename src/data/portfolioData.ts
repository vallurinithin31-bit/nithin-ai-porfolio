import {
  PersonalInfo,
  Education,
  SkillCategory,
  Project,
  Certificate,
  ExperienceItem,
  AchievementItem
} from '../types';

/**
 * =======================================================================
 * CENTRALIZED PORTFOLIO DATA CONFIGURATION
 * =======================================================================
 * Updated with Valluri Nithin Sai's verified resume data, live GitHub
 * repository, LinkedIn profile, email, phone, and complete authentic certificates.
 */

export const personalInfo: PersonalInfo = {
  name: "Valluri Nithin Sai",
  title: "Artificial Intelligence & Machine Learning Student | AI/ML Enthusiast | Python Developer",
  educationStatus: "B.Tech Student (2024 - 2028)",
  intro: "A motivated B.Tech student specializing in Artificial Intelligence and Machine Learning, with a strong foundation in Python and basic web technologies. Passionate about building real-world AI solutions, with hands-on experience in machine learning concepts, data analysis, and beginner-level project development. Actively exploring advanced topics like LLMs, agentic AI systems, and automation tools such as n8n.",
  aboutText: "A motivated B.Tech (3rd year) student specializing in Artificial Intelligence and Machine Learning, with a strong foundation in Python, and basic web technologies. Passionate about building real-world AI solutions, with hands-on experience in machine learning concepts, data analysis, and beginner-level project development. Actively exploring advanced topics like LLMs, agentic AI systems, and automation tools such as n8n. Eager to secure internships and enhance practical skills through continuous learning, project building, and participation in innovative tech initiatives. Known for a problem-solving mindset, curiosity to learn emerging technologies, and a goal-driven approach toward becoming a skilled AI/ML engineer.",
  profileImage: "/images/profile.jpg",
  profileImageFallback: "/images/profile-avatar.svg",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Valluri_Nithin_Sai_Resume.pdf",
  phone: "+91-8121467245",
  socials: {
    linkedin: "https://www.linkedin.com/in/nithin-sai-valluri-a947b0410",
    github: "https://github.com/vallurinithin31-bit",
    instagram: "https://www.instagram.com/valluri_nani_/",
    email: "vallurinithin989@gmail.com",
    location: "Vijayawada, India",
    phone: "+918121467245",
    driveCertificates: "https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing"
  }
};

export const educationInfo: Education = {
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Artificial Intelligence & Machine Learning",
  status: "2024 - 2028 (Undergraduate)",
  institution: "Amrita Sai Institute of Science and Technology",
  year: "2024 - 2028",
  previousEducation: [
    {
      level: "INTERMEDIATE (M.P.C)",
      institution: "SR Junior College, Hyderabad"
    },
    {
      level: "SCHOOL (CBSE)",
      institution: "SREE VIDYA PEETHI (CBSE) KIMS INSTITUTION, Narketpally"
    }
  ]
};

export const currentlyLearningList: { name: string; tag: string }[] = [
  { name: "Machine Learning", tag: "Core ML" },
  { name: "Deep Learning", tag: "Neural Nets" },
  { name: "LLMs & RAG Systems", tag: "Language Models" },
  { name: "Agentic AI Systems", tag: "Autonomous Agents" },
  { name: "n8n Automation", tag: "Workflow Automation" },
  { name: "Data Analysis & Pandas", tag: "Analytics" },
  { name: "Data Structures in Python", tag: "Algorithms" },
  { name: "Python Development", tag: "Programming" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Languages",
    iconName: "Code2",
    description: "Core languages and analytical computational frameworks.",
    skills: [
      { name: "Python", status: "proficient" },
      { name: "DSA with Python", status: "proficient" },
      { name: "Pandas", status: "proficient" },
      { name: "NumPy", status: "proficient" },
      { name: "Matplotlib", status: "proficient" },
      { name: "HTML5", status: "proficient" },
      { name: "CSS3", status: "proficient" },
      { name: "JavaScript", status: "proficient" },
      { name: "SQL / MySQL / SQLite", status: "proficient" }
    ]
  },
  {
    title: "AI & Machine Learning",
    iconName: "BrainCircuit",
    description: "Core ML principles, statistical analysis, and predictive modeling.",
    skills: [
      { name: "AI Fundamentals (IBM)", status: "proficient" },
      { name: "Supervised Learning", status: "proficient" },
      { name: "Regression Analysis", status: "proficient" },
      { name: "Classification", status: "proficient" },
      { name: "Data Cleaning", status: "proficient" },
      { name: "Descriptive Statistics", status: "proficient" },
      { name: "Hypothesis Testing", status: "proficient" },
      { name: "Data Preprocessing", status: "proficient" }
    ]
  },
  {
    title: "Generative AI & Automation",
    iconName: "Sparkles",
    description: "RAG systems, large language models, voice health agents, and automation workflows.",
    skills: [
      { name: "Intelligent RAG Systems", status: "proficient" },
      { name: "LLMs (Large Language Models)", status: "learning" },
      { name: "Agentic AI Systems", status: "learning" },
      { name: "Voice AI & Health Agents", status: "learning" },
      { name: "n8n Automation Tools", status: "learning" },
      { name: "Prompt Engineering", status: "learning" }
    ]
  },
  {
    title: "Web Technologies & Frameworks",
    iconName: "Boxes",
    description: "Full-stack frameworks and REST API service architectures.",
    skills: [
      { name: "Django", status: "proficient" },
      { name: "Node.js", status: "proficient" },
      { name: "Express.js", status: "proficient" },
      { name: "REST APIs", status: "proficient" },
      { name: "CRUD Operations", status: "proficient" },
      { name: "Database Architecture", status: "proficient" }
    ]
  },
  {
    title: "Tools, Platforms & Soft Skills",
    iconName: "Terminal",
    description: "Development environments, version control, and professional competencies.",
    skills: [
      { name: "Git & GitHub", status: "proficient" },
      { name: "VS Code", status: "proficient" },
      { name: "Jupyter Notebook", status: "proficient" },
      { name: "Excel Analytics", status: "proficient" },
      { name: "Analytical Thinking", status: "proficient" },
      { name: "Problem Solving (IBM)", status: "proficient" },
      { name: "Communication Dynamics (IBM)", status: "proficient" },
      { name: "Presentation Skills", status: "proficient" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "sales-performance-analysis",
    title: "Sales Performance Dashboard and Analysis",
    category: "Data Analysis",
    badge: "Python & Excel Analytics",
    featured: true,
    shortDescription: "Analyzed 10,000 plus retail sales records using Python (Pandas) and Excel to identify top products, seasonal trends, and regional patterns.",
    problemStatement: "Retail businesses need actionable insights from large transaction logs to detect revenue drivers, inventory demands, and geographic growth opportunities.",
    features: [
      "Analyzed over 10,000+ retail sales transactions using Python (Pandas) and Excel",
      "Identified top-performing products and revenue-generating categories",
      "Extracted seasonal trend fluctuations and regional market performance patterns",
      "Built clean, actionable visualization charts using Matplotlib and analytical summaries"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Excel", "Data Cleaning"],
    image: "/images/projects/sales-dashboard.svg",
    githubUrl: "https://github.com/vallurinithin31-bit/My-Projects",
    liveUrl: ""
  },
  {
    id: "ai-voice-health-assistant",
    title: "AI Voice Agent Health Assistant",
    category: "Agentic AI",
    badge: "Voice & Healthcare AI",
    featured: true,
    shortDescription: "Developed a voice-based AI health assistant that provides basic health guidance and personalized reminders through natural voice interaction.",
    problemStatement: "Accessing quick daily wellness reminders and simple health awareness is difficult with standard complex medical portals. This assistant uses natural speech to provide accessible triage guidance.",
    features: [
      "Natural voice interaction allowing users to describe symptoms conversationally",
      "Simple health suggestions and wellness awareness tips",
      "Personalized daily care schedules and timely medication reminders",
      "Engineered with strict safety guardrails and healthcare disclaimers"
    ],
    technologies: ["Python", "Voice AI", "Agentic AI", "NLP", "Audio Processing"],
    disclaimer: "This assistant provides basic health guidance and wellness awareness. It is not a substitute for professional clinical medical advice.",
    image: "/images/projects/health-agent.svg",
    githubUrl: "https://github.com/vallurinithin31-bit/My-Projects",
    liveUrl: ""
  },
  {
    id: "nexora-social-media",
    title: "Nexora: Full-Stack Social Media Platform",
    category: "Full-Stack Web",
    badge: "Web Applications",
    featured: true,
    shortDescription: "A full-stack social media application featuring user authentication, posts, comments, likes, dynamic feeds, and relational database management.",
    problemStatement: "Built during the CodeAlpha Web Development Internship to engineer high-throughput community interactions and secure user authentication flows.",
    features: [
      "User authentication, profile management, and secure session handling",
      "Real-time post publishing, commenting engine, and interactive likes",
      "Relational database schema design with MySQL / SQLite",
      "Responsive UI built with HTML5, CSS3, JavaScript, and backend REST APIs"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Python", "Django", "MySQL", "REST APIs"],
    image: "/images/projects/nexora.svg",
    githubUrl: "https://github.com/vallurinithin31-bit/My-Projects",
    liveUrl: ""
  },
  {
    id: "nexus-and-taskforge",
    title: "Nexus (E-Commerce) & TaskForge (Project Management)",
    category: "Full-Stack Web",
    badge: "Enterprise Web Systems",
    featured: false,
    shortDescription: "Two enterprise-grade web applications: Nexus for e-commerce shopping cart & order workflows, and TaskForge for team project & task collaboration.",
    problemStatement: "Demonstrating end-to-end CRUD operations, shopping cart calculations, order state machines, and multi-user task assignments.",
    features: [
      "Nexus E-Commerce: Product catalog, dynamic shopping cart, and order placement workflow",
      "TaskForge Project Management: Task assignments, status boards, and team collaboration",
      "RESTful API architectures integrated with Express.js / Django backends",
      "Version controlled with Git and GitHub"
    ],
    technologies: ["JavaScript", "Node.js", "Express.js", "MySQL", "SQLite", "Git / GitHub"],
    image: "/images/projects/taskforge.svg",
    githubUrl: "https://github.com/vallurinithin31-bit/My-Projects",
    liveUrl: ""
  }
];

export const certificatesData: Certificate[] = [
  {
    id: "cert-rag-systems",
    title: "Build Intelligent RAG Systems Workshop",
    issuer: "Codegnan IT Solutions Pvt Ltd",
    date: "14th June 2026",
    category: "Generative AI",
    image: "/certificates/codegnan_rag_systems.jpg",
    credentialId: "CG_Build_RAG_System_June_1781",
    credentialUrl: "https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing",
    downloadUrl: "/certificates/codegnan_rag_systems.jpg",
    description: "Certificate of Participation for building Intelligent Retrieval-Augmented Generation (RAG) systems with vector embeddings, LLMs, and document indexing pipelines.",
    skills: ["RAG Systems", "Generative AI", "LLMs", "Vector Embeddings", "Codegnan"],
    isPlaceholder: false
  },
  {
    id: "cert-ibm-ai-fundamentals",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025 - 2026",
    category: "Artificial Intelligence",
    image: "/certificates/ibm_ai_fundamentals.jpg",
    credentialId: "PLAN-7913EE1DB030",
    credentialUrl: "https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing",
    downloadUrl: "/certificates/ibm_ai_fundamentals.jpg",
    description: "Official IBM SkillsBuild Completion Certificate in Artificial Intelligence Fundamentals, covering cognitive computing concepts, ML workflows, and AI architectures.",
    skills: ["Artificial Intelligence", "AI Fundamentals", "Machine Learning Basics", "IBM SkillsBuild"],
    isPlaceholder: false
  },
  {
    id: "cert-internshala-ai-analytics",
    title: "AI Data Analytics Internship Selection",
    issuer: "Internshala / InAmigos Foundation",
    date: "May 29, 2026",
    category: "Internships",
    image: "/certificates/internshala_ai_analytics.jpg",
    credentialId: "ccnwh9lkpkx",
    credentialUrl: "https://internshala.com/verify_certificate",
    downloadUrl: "/certificates/internshala_ai_analytics.jpg",
    description: "Officially selected for the AI Data Analytics Internship at InAmigos Foundation through Internshala from Amrita Sai Institute of Science and Technology, validating practical analytical and ML capabilities.",
    skills: ["AI Data Analytics", "Data Analysis", "Python", "Statistical Modeling", "Internshala"],
    isPlaceholder: false
  },
  {
    id: "cert-code-hunt-merit",
    title: "Certificate of Merit – CODE HUNT 2.0",
    issuer: "JNTU-GV CEV(A) / Yukta Devsquad",
    date: "2025 - 2026",
    category: "Competitions & Hackathons",
    image: "/certificates/code_hunt_merit.jpg",
    credentialId: "JNTUGV-CEVA-CODEHUNT-2.0",
    credentialUrl: "https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing",
    downloadUrl: "/certificates/code_hunt_merit.jpg",
    description: "Awarded Certificate of Merit for excelling in the state-level coding contest CODE HUNT 2.0 organized by Yukta Devsquad & Dept. of Information Technology at JNTU-GV College of Engineering Vizianagaram(A).",
    skills: ["Competitive Coding", "Algorithms", "Data Structures", "Problem Solving", "Python"],
    isPlaceholder: false
  },
  {
    id: "cert-cynohub-python",
    title: "Programming Fundamentals with Python",
    issuer: "CynoHub Academy",
    date: "June 7, 2026",
    category: "Python",
    image: "/certificates/cynohub_python.jpg",
    credentialId: "CYNO-0F21VE-1XAPGM",
    credentialUrl: "https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing",
    downloadUrl: "/certificates/cynohub_python.jpg",
    description: "Comprehensive certified training in Python programming, covering foundational syntax, control flow, functions, OOP concepts, and algorithmic problem solving.",
    skills: ["Python", "Programming Fundamentals", "Data Structures", "OOP in Python", "CynoHub"],
    isPlaceholder: false
  },
  {
    id: "cert-codegnan-dsa-python",
    title: "DSA With Python - 1 Workshop",
    issuer: "Codegnan IT Solutions Pvt Ltd",
    date: "19th July 2026",
    category: "Workshops",
    image: "/certificates/codegnan_dsa_python.jpg",
    credentialId: "CG_DSA with PY_July_2026",
    credentialUrl: "https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing",
    downloadUrl: "/certificates/codegnan_dsa_python.jpg",
    description: "Hands-on participation in the intensive Data Structures & Algorithms with Python workshop focusing on arrays, stacks, queues, searching, and sorting complexities.",
    skills: ["Data Structures & Algorithms", "Python DSA", "Algorithmic Problem Solving", "Codegnan"],
    isPlaceholder: false
  },
  {
    id: "cert-elevatex-hackathon",
    title: "12-Hour Hackathon – ElevateX Participation",
    issuer: "Codegnan Community Hub, Vijayawada",
    date: "25th January 2026",
    category: "Competitions & Hackathons",
    image: "/certificates/elevatex_hackathon.jpg",
    credentialId: "CODEGNAN-ELEVATEX-2026",
    credentialUrl: "https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing",
    downloadUrl: "/certificates/elevatex_hackathon.jpg",
    description: "Actively built and presented technical solutions during the intensive 12-Hour Hackathon ElevateX hosted by Codegnan Community Hub in Vijayawada, demonstrating rapid prototyping and collaborative innovation.",
    skills: ["Hackathon", "Rapid Prototyping", "Team Collaboration", "AI/ML Solutions", "Codegnan"],
    isPlaceholder: false
  },
  {
    id: "cert-ibm-problem-solving",
    title: "Customer Engagement: Problem Solving & Process Controls",
    issuer: "IBM SkillsBuild",
    date: "Sep 10, 2025",
    category: "Professional Skills",
    image: "/certificates/ibm_problem_solving.jpg",
    credentialId: "80ffec29-73ca-48c3-b669-5bf81acdfcfb",
    credentialUrl: "https://www.credly.com/badges/80ffec29-73ca-48c3-b669-5bf81acdfcfb",
    downloadUrl: "/certificates/ibm_problem_solving.jpg",
    description: "In recognition of the commitment to achieve professional excellence in analytical problem solving, business process controls, and customer engagement frameworks by IBM SkillsBuild.",
    skills: ["Problem Solving", "Process Controls", "Analytical Thinking", "IBM SkillsBuild", "Credly Verified"],
    isPlaceholder: false
  },
  {
    id: "cert-ibm-communication",
    title: "Customer Engagement: Communication & Personality Dynamics",
    issuer: "IBM SkillsBuild",
    date: "Sep 10, 2025",
    category: "Professional Skills",
    image: "/certificates/ibm_communication.jpg",
    credentialId: "aac6dab3-63c0-460d-9b00-9b50a092b75f",
    credentialUrl: "https://www.credly.com/badges/aac6dab3-63c0-460d-9b00-9b50a092b75f",
    downloadUrl: "/certificates/ibm_communication.jpg",
    description: "Professional certification from IBM SkillsBuild validating effective communication strategies, team personality dynamics, presentation delivery, and workplace collaboration.",
    skills: ["Business Communication", "Personality Dynamics", "Presentation Skills", "IBM SkillsBuild", "Credly Verified"],
    isPlaceholder: false
  },
  {
    id: "cert-codealpha-webdev",
    title: "Web Development Internship Certificate",
    issuer: "CodeAlpha",
    date: "July 2026 – August 2026",
    category: "Web Development",
    image: "/certificates/code_hunt_merit.jpg",
    credentialId: "CODEALPHA-DEV-2026",
    credentialUrl: "https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing",
    downloadUrl: "https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing",
    description: "Completed an intensive web development internship developing full-stack applications (Nexora, Nexus, TaskForge) utilizing Python, Django, Express.js, JavaScript, and MySQL/SQLite databases.",
    skills: ["HTML5", "CSS3", "JavaScript", "Python", "Django", "Node.js", "Express.js", "MySQL", "REST APIs", "Git"],
    isPlaceholder: false
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-codealpha",
    role: "Web Development Intern",
    organization: "CodeAlpha",
    duration: "July 2026 – August 2026",
    type: "Internship",
    description: "Engaged in hands-on full-stack software development, building three complete production-grade web applications: Nexora (Social Media), Nexus (E-Commerce), and TaskForge (Project Management).",
    focus: [
      "Full-Stack Web Development (HTML, CSS, JavaScript, Django, Express.js)",
      "Database Design & Relational Modeling (MySQL, SQLite)",
      "Secure REST API Design & Authentication",
      "Git & GitHub Version Control & Team Workflows"
    ],
    responsibilities: [
      "Developed three full-stack web applications: Nexora (Social Media), Nexus (E-Commerce), and TaskForge (Project Management) using HTML, CSS, JavaScript, Django/Express.js, and MySQL/SQLite.",
      "Built responsive frontends and integrated secure backend services using REST APIs.",
      "Implemented authentication, CRUD operations, relational database design, and scalable backend architecture.",
      "Developed features including posts, comments, likes, shopping cart, order management, task assignment, and collaborative workflows.",
      "Utilized Git/GitHub for version control while enhancing expertise in full-stack development and database management."
    ],
    isPlaceholder: false
  },
  {
    id: "exp-self-directed-aiml",
    role: "AI & Machine Learning Project Development",
    organization: "Amrita Sai Institute of Science & Technology / Independent Projects",
    duration: "2024 – Present",
    type: "Self-Directed",
    description: "Developing practical AI and machine learning systems with a focus on data analytics, voice health agents, and exploring emerging technologies including LLMs and n8n automation.",
    focus: [
      "Data Analytics & Feature Engineering (Pandas, NumPy, Matplotlib)",
      "Machine Learning Algorithms & Regression Analysis",
      "AI Voice Health Assistant & Conversational Agent Systems",
      "Workflow Automation with n8n and Python scripts"
    ],
    responsibilities: [
      "Analyzed 10,000+ retail transactions with Python (Pandas) to extract revenue trends and seasonal patterns.",
      "Architected the AI Voice Agent Health Assistant with symptom triage guidance and medicine reminders.",
      "Continuous experimentation with Large Language Models, agentic frameworks, and automation platforms."
    ],
    isPlaceholder: false
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "achieve-codehunt",
    title: "Certificate of Merit – CODE HUNT 2.0 Coding Contest",
    category: "AI/ML Milestone",
    date: "2025 - 2026",
    description: "Awarded Merit Certificate by JNTU-GV College of Engineering Vizianagaram(A) and Yukta Devsquad for competitive programming and algorithmic problem solving excellence.",
    tags: ["Competitive Coding", "Algorithms", "JNTU-GV", "Merit"],
    link: "https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing",
    isPlaceholder: false
  },
  {
    id: "achieve-rag-workshop",
    title: "Intelligent RAG Systems System Architecture Milestone",
    category: "AI/ML Milestone",
    date: "June 2026",
    description: "Certified in building scalable Retrieval-Augmented Generation (RAG) architectures with vector stores and LLMs with Codegnan.",
    tags: ["RAG Systems", "Generative AI", "LLMs", "Vector Search"],
    link: "https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing",
    isPlaceholder: false
  },
  {
    id: "achieve-elevatex",
    title: "12-Hour Hackathon – ElevateX Participation",
    category: "Hackathon",
    date: "25th January 2026",
    description: "Built and pitched rapid technology prototypes in a high-intensity 12-hour hackathon organized by Codegnan Community Hub in Vijayawada.",
    tags: ["Hackathon", "Codegnan", "Rapid Prototyping", "Teamwork"],
    link: "https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing",
    isPlaceholder: false
  },
  {
    id: "achieve-internshala",
    title: "AI Data Analytics Internship Selection – InAmigos Foundation",
    category: "Certification",
    date: "May 2026",
    description: "Secured competitive AI Data Analytics internship via Internshala, validating applied data science, statistical analysis, and machine learning skills.",
    tags: ["AI Analytics", "Internshala", "InAmigos Foundation"],
    link: "https://internshala.com/verify_certificate",
    isPlaceholder: false
  },
  {
    id: "achieve-ibm-credly",
    title: "Dual IBM SkillsBuild Professional Excellence Certifications",
    category: "Certification",
    date: "Sep 2025",
    description: "Earned Credly-verified IBM badges in Problem Solving & Process Controls as well as Communication & Personality Dynamics.",
    tags: ["IBM SkillsBuild", "Credly", "Problem Solving", "Communication"],
    link: "https://www.credly.com/badges/80ffec29-73ca-48c3-b669-5bf81acdfcfb",
    isPlaceholder: false
  }
];
