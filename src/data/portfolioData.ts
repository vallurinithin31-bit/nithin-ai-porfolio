import {
  PersonalInfo,
  AboutHighlight,
  ExperienceData,
  SkillCategory,
  Project,
  AILabItem,
  ApproachStep,
  EducationData,
  Certificate,
  HeroNode
} from '../types';

/**
 * =======================================================================
 * CENTRALIZED PORTFOLIO DATA CONFIGURATION
 * NITHIN SAI VALLURI — AI/ML Engineer • AI Product Builder • AI Automation
 * =======================================================================
 */

export const personalInfo: PersonalInfo = {
  name: "NITHIN SAI VALLURI",
  primaryPositioning: "AI/ML Engineer • AI Product Builder • AI Automation Developer",
  shortIntro: "I build practical AI-powered products, intelligent workflows, and automation systems that turn ideas into useful experiences.",
  heroHeadline: "Building Intelligent Products With AI.",
  heroStatement: "I build AI-powered products, intelligent workflows, and automation systems.",
  heroSupporting: "Computer Science Engineering student specializing in AI & ML, exploring the intersection of Generative AI, AI agents, automation, analytics and product development.",
  heroParagraph: "I'm Nithin Sai Valluri, a Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning. I work with Python, SQL, LLMs, AI agents, prompt engineering and AI-assisted development to build practical technology solutions.",
  aboutHeading: "Building Beyond Code.",
  aboutText: "I am a B.Tech Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning, with a strong interest in building practical AI products and intelligent automation systems.\n\nMy work sits at the intersection of AI engineering, product thinking, automation and analytics. I enjoy taking an idea, understanding the underlying problem, experimenting with AI technologies and turning the concept into a working prototype.\n\nI am particularly interested in Generative AI, LLM applications, AI agents, workflow automation, prompt engineering and AI-assisted software development.",
  educationDegree: "B.Tech — Computer Science & Engineering (AI & ML)",
  location: "Andhra Pradesh, India",
  resumePath: "/resume/Nithin_Sai_Valluri_Resume.pdf",
  resumeFileName: "Nithin_Sai_Valluri_Resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/nithin-sai-valluri-a947b0410/",
    github: "https://github.com/vallurinithin31-bit",
    email: "vallurinithin989@gmail.com",
    phone: "+91 81214 67245",
    location: "Andhra Pradesh, India",
    driveCertificates: "https://drive.google.com/drive/folders/1wuKqIYfjg9ChGK_-vwSm9cNlOi9Xa8Z6?usp=sharing"
  }
};

export const heroNodes: HeroNode[] = [
  {
    id: "node-python",
    label: "Python",
    description: "Core computational language for ML models, data pipelines & backend APIs.",
    category: "Language & ML",
    color: "#38bdf8"
  },
  {
    id: "node-ai",
    label: "AI",
    description: "Supervised & unsupervised algorithms, neural architectures & predictive modeling.",
    category: "Artificial Intelligence",
    color: "#818cf8"
  },
  {
    id: "node-llms",
    label: "LLMs",
    description: "Large language model integration, reasoning pipelines & conversational interfaces.",
    category: "Generative AI",
    color: "#a855f7"
  },
  {
    id: "node-agents",
    label: "Agents",
    description: "Autonomous multi-step execution, tool-calling interfaces & decision logic.",
    category: "Agentic Systems",
    color: "#6366f1"
  },
  {
    id: "node-sql",
    label: "SQL",
    description: "Relational database architecture, analytical querying & data transformation.",
    category: "Data Systems",
    color: "#06b6d4"
  },
  {
    id: "node-automation",
    label: "Automation",
    description: "Streamlined end-to-end task pipelines, cron orchestrations & workflow automation.",
    category: "Workflows",
    color: "#c084fc"
  },
  {
    id: "node-analytics",
    label: "Analytics",
    description: "Exploratory data analysis, KPI dashboards & user conversion pattern discovery.",
    category: "Product & Data",
    color: "#38bdf8"
  },
  {
    id: "node-rag",
    label: "RAG",
    description: "Retrieval-Augmented Generation with vector embeddings & semantic search.",
    category: "Architecture",
    color: "#a855f7"
  },
  {
    id: "node-prompt",
    label: "Prompt Engineering",
    description: "Structured context framing, few-shot prompting, and deterministic schema outputs.",
    category: "LLM Engineering",
    color: "#818cf8"
  }
];

export const aboutHighlights: AboutHighlight[] = [
  {
    id: "ai-engineering",
    title: "AI ENGINEERING",
    subtitle: "Core Intelligent Systems",
    description: "LLMs, AI agents, RAG concepts, prompt engineering and AI workflows designed for speed and reliability.",
    iconName: "BrainCircuit",
    tag: "Models & Agents"
  },
  {
    id: "product-thinking",
    title: "PRODUCT THINKING",
    subtitle: "User-Centric Solutions",
    description: "Turning user and business problems into practical, intuitive technology solutions with clear value.",
    iconName: "Boxes",
    tag: "Value & UX"
  },
  {
    id: "automation",
    title: "AUTOMATION",
    subtitle: "Workflow Optimization",
    description: "Designing intelligent workflows and autonomous pipelines that reduce repetitive manual work.",
    iconName: "Zap",
    tag: "Efficiency & Scale"
  }
];

export const experienceData: ExperienceData = {
  company: "Screen Andragogy Platforms (SAP) / Screen Pitch AI",
  companyAlt: "Screen Pitch AI",
  role: "AI / Product / Growth Intern",
  duration: "Active / Present",
  location: "Remote / Hybrid",
  description: "Working at the intersection of AI, content technology, product workflows and growth analytics.",
  responsibilities: [
    "AI-assisted product development and rapid prototype engineering",
    "AI workflow experimentation and prompt engineering optimization",
    "AI content, storytelling and visual concept generation workflows",
    "Product and user insight analysis to understand prospect behavior",
    "Conversion analysis and outreach campaign pattern discovery",
    "Data preparation and analysis using Python and SQL",
    "AI-agent and automation concepts for streamlined operations",
    "Translating business requirements into working technology solutions",
    "Prototyping interactive AI-powered user experiences"
  ],
  metricCards: [
    {
      title: "AI Workflows",
      highlight: "Chained Prompts & Agents",
      description: "Experimenting with multi-step prompt chains, agentic logic, and AI content generation engines.",
      icon: "Cpu"
    },
    {
      title: "Product Insights",
      highlight: "User Behavior & Friction",
      description: "Mapping prospect touchpoints, analyzing conversion funnels, and uncovering product problem areas.",
      icon: "LineChart"
    },
    {
      title: "Automation",
      highlight: "Intelligent Pipelines",
      description: "Automating data preparation routines and eliminating repetitive manual workflows with Python.",
      icon: "Zap"
    },
    {
      title: "Analytics",
      highlight: "Data-Driven Decisions",
      description: "Conducting exploratory data analysis with SQL and Python to extract actionable growth insights.",
      icon: "Database"
    }
  ],
  priorExperience: [
    {
      id: "prior-webdev",
      role: "Web Development Intern",
      organization: "CodeAlpha",
      duration: "Completed",
      description: "Hands-on full-stack development building scalable applications (Nexora Social, Nexus E-Commerce, TaskForge) utilizing Python, Django, JavaScript, and relational databases.",
      responsibilities: [
        "Built responsive frontends and integrated secure REST APIs",
        "Implemented relational database schemas using MySQL & SQLite",
        "Managed version control and team code collaboration via Git/GitHub"
      ]
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-llm",
    title: "AI & LLM",
    description: "Generative AI, agentic architectures, and prompt systems.",
    iconName: "BrainCircuit",
    skills: [
      { name: "Generative AI", explanation: "Applying diffusion and transformer models for text, vision & structured synthesis." },
      { name: "Prompt Engineering", explanation: "Systematic few-shot context framing, system instructions, and schema enforcement." },
      { name: "LLM Workflows", explanation: "Chaining language model calls for multi-stage reasoning and task completion." },
      { name: "AI Agents", explanation: "Autonomous goal-seeking loops with memory, tool selection, and state machines." },
      { name: "AI Automation", explanation: "Trigger-based intelligent workflows eliminating manual data entry and repetitive tasks." },
      { name: "RAG Concepts", explanation: "Retrieval-Augmented Generation with vector databases and semantic search." },
      { name: "AI-Assisted Development", explanation: "Accelerating software engineering with intelligent coding assistants and copilots." },
      { name: "Vibe Coding", explanation: "Fast conversational prototyping and iterative concept creation powered by AI." }
    ]
  },
  {
    id: "programming-data",
    title: "Programming & Data",
    description: "Core algorithms, database architectures, and data engineering.",
    iconName: "Code2",
    skills: [
      { name: "Python", explanation: "Primary language for AI modeling, data wrangling, automation scripts & APIs." },
      { name: "SQL", explanation: "Relational database queries, aggregations, joins, and schema normalization." },
      { name: "Data Cleaning", explanation: "Handling missing values, outlier detection, and data type normalization." },
      { name: "Data Analysis", explanation: "Statistical modeling, correlation evaluation, and exploratory data analysis." },
      { name: "DSA", explanation: "Data structures & algorithmic problem solving for time and space efficiency." },
      { name: "HTML Basics", explanation: "Semantic document structuring and modern web accessibility fundamentals." }
    ]
  },
  {
    id: "analytics-product",
    title: "Analytics & Product",
    description: "Product discovery, conversion funnels, and metric tracking.",
    iconName: "BarChart3",
    skills: [
      { name: "Product Analytics", explanation: "Measuring user interactions, feature adoption, and retention patterns." },
      { name: "User Insights", explanation: "Extracting qualitative and quantitative patterns from user feedback and logs." },
      { name: "Growth Analysis", explanation: "Identifying acquisition channels, outreach effectiveness, and viral loops." },
      { name: "KPI Tracking", explanation: "Monitoring operational metrics and conversion indicators against goals." },
      { name: "Conversion Analysis", explanation: "Evaluating funnel drop-offs, lead status, and messaging resonance." },
      { name: "Dashboard Development", explanation: "Building clear visual reports with charts for data-driven decision making." },
      { name: "Experimentation", explanation: "Hypothesis testing and A/B test thinking to iteratively refine solutions." }
    ]
  },
  {
    id: "tools",
    title: "Tools & Ecosystem",
    description: "Developer toolchains, environments, and version control.",
    iconName: "Terminal",
    skills: [
      { name: "ChatGPT", explanation: "Advanced conversational prompting, logic verification, and rapid ideation." },
      { name: "AI Coding Tools", explanation: "Leveraging state-of-the-art AI developer environments and CLI agents." },
      { name: "Git", explanation: "Distributed version control, branching strategies, and commit history management." },
      { name: "GitHub", explanation: "Repository hosting, open-source collaboration, and CI/CD actions." },
      { name: "Jupyter Notebook", explanation: "Interactive computational notebooks for rapid EDA and visual experimentation." },
      { name: "Power BI", explanation: "Business intelligence modeling and interactive reporting dashboards." },
      { name: "SQL Tools", explanation: "Database management clients, query profiling, and schema inspection tools." }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "voice-ai-assistant",
    title: "Voice AI Assistant",
    subtitle: "Conversational Voice Interaction & Reminders",
    category: "Voice AI",
    badge: "Voice AI • Python",
    shortDescription: "A voice-based AI assistant designed to interact naturally with users and provide intelligent guidance, reminders and assistance.",
    problem: "Accessing quick daily assistance or simple reminders often requires complex screen navigation, creating friction for users who prefer hands-free, natural conversational interactions.",
    solution: "Engineered a voice-interactive assistant that captures spoken input, evaluates conversational intent, and returns synthesized audio guidance with automated reminder workflows.",
    features: [
      "Natural voice interaction allowing hands-free conversational queries",
      "Intelligent AI responses tailored to daily queries and user needs",
      "Proactive reminder workflows and scheduled alert notifications",
      "Modular Python architecture with lightweight intent classification"
    ],
    contribution: "Engineered the voice capture pipeline, designed the intent matching logic, and implemented the automated reminder dispatch system.",
    outcome: "Deepened practical expertise in voice interface design, speech recognition pipelines, and low-latency audio response workflows.",
    technologies: ["Python", "AI Models", "Voice AI", "NLP", "Audio Processing"],
    image: "/images/projects/health-agent.svg",
    githubUrl: "https://github.com/vallurinithin31-bit/My-Projects"
  },
  {
    id: "janai-life-assistant",
    title: "JanAI — All-in-One Smart Life Assistant",
    subtitle: "Agentic Citizen & Everyday Assistant Concept",
    category: "AI Agents",
    badge: "Agentic AI • Multilingual",
    shortDescription: "An agentic AI assistant concept designed to provide everyday assistance through voice-first interactions across multiple public and personal services.",
    problem: "Navigating fragmented systems for government welfare schemes, job postings, nearby amenities, and everyday awareness is overwhelming and inaccessible for many citizens.",
    solution: "Architected a multi-agent life assistant concept that orchestrates specialized AI agents to deliver clear, voice-guided assistance across multiple everyday domains.",
    features: [
      "Government scheme guidance & eligibility criteria breakdown",
      "Job application assistance and opportunity search support",
      "Everyday conversational Q&A with knowledge retrieval",
      "Health awareness informational guidance with clear disclaimers",
      "Proactive reminder workflows and routine scheduling",
      "Nearby-service guidance and local amenity directions",
      "Multilingual voice interaction for inclusive citizen access"
    ],
    contribution: "Designed the multi-agent routing framework, prompt templates for distinct services, and informational awareness guardrails.",
    outcome: "Mastered multi-agent orchestration, safety guardrail enforcement, and accessible multilingual voice assistant design.",
    technologies: ["AI Agents", "LLMs", "Voice AI", "Automation", "Python"],
    image: "/images/projects/sales-dashboard.svg",
    disclaimer: "Health-related functionality is presented strictly as an informational and awareness feature, not as medical diagnosis or clinical healthcare advice.",
    githubUrl: "https://github.com/vallurinithin31-bit/My-Projects"
  },
  {
    id: "ai-laptop-controller",
    title: "AI Laptop Controller",
    subtitle: "Authorized Personal-Device Automation",
    category: "Automation",
    badge: "Device Automation • Python",
    shortDescription: "An AI-powered laptop control system concept designed to connect a mobile interface and voice agent with a computer for executing permitted actions.",
    problem: "Managing computer functions, executing media controls, or triggering developer scripts remotely without physical access to the keyboard creates unnecessary workflow disruption.",
    solution: "Created a secure personal-device automation bridge that receives voice commands or mobile triggers and executes authorized system actions reliably.",
    features: [
      "Remote mobile-to-PC connection over secure local communication",
      "Voice-activated system control and hotkey execution",
      "Automated script execution and application launch triggers",
      "Strict security perimeter restricted to authorized personal actions"
    ],
    contribution: "Developed the Python background daemon, mobile trigger interface, and permission-restricted command executor.",
    outcome: "Strengthened knowledge of system-level automation, network communication, and safe client-server control protocols.",
    technologies: ["AI", "Voice Agent", "Python", "Automation", "WebSockets"],
    image: "/images/projects/taskforge.svg",
    note: "Designed exclusively for authorized personal-device automation and developer productivity workflows.",
    githubUrl: "https://github.com/vallurinithin31-bit/My-Projects"
  },
  {
    id: "ai-content-workflow",
    title: "AI Content Production Workflow",
    subtitle: "End-to-End Multimedia Creation Pipeline",
    category: "Workflow AI",
    badge: "LLM Workflows • Analytics",
    shortDescription: "An AI-assisted workflow for transforming raw ideas into structured content, scripts, visual concepts and production assets.",
    problem: "Producing consistent multimedia content requires multiple disjointed steps for ideation, scripting, storyboarding, visual prompts, and tracking.",
    solution: "Engineered a structured multi-stage prompt pipeline and workflow tracker that turns raw concepts into formatted scripts, storyboard frames, and visual prompts.",
    features: [
      "Automated AI script generation tailored for short & long formats",
      "Structured storyboard creation with visual scene breakdowns",
      "Centralized prompt libraries for reproducible asset generation",
      "Image and keyframe prompt generation with style consistency",
      "Content workflow management and production status tracking"
    ],
    contribution: "Constructed the multi-stage LLM prompt chains, asset management dashboard, and content status tracking logic.",
    outcome: "Deepened expertise in complex prompt engineering, structured JSON outputs, and creative workflow automation.",
    technologies: ["LLMs", "Prompt Engineering", "AI Workflows", "Product Analytics"],
    image: "/images/projects/nexora.svg",
    githubUrl: "https://github.com/vallurinithin31-bit/My-Projects"
  },
  {
    id: "conversion-analysis-dashboard",
    title: "Conversion Analysis Dashboard",
    subtitle: "Educational Prospect Analytics & Funnel Tracking",
    category: "Analytics",
    badge: "SQL • Python • Analytics",
    shortDescription: "A data-analysis workflow for understanding outreach, responses, interest levels and conversion patterns across educational prospects.",
    problem: "Without systematic analysis of prospect communications, outreach teams cannot identify conversion bottlenecks, high-interest segments, or effective messaging.",
    solution: "Engineered an end-to-end data cleaning, SQL query, and Python analytical pipeline to evaluate prospect responses, categorize interest, and visualize conversion funnels.",
    features: [
      "Prospect tracking across outreach campaigns and touchpoints",
      "Interested vs. Not Interested sentiment and category analysis",
      "Conversion metrics and drop-off rate calculation",
      "College-level and regional segment performance breakdown",
      "Structured contact-data organization and deduplication",
      "Actionable KPI tracking summaries and visualization charts"
    ],
    contribution: "Designed the relational data schema, wrote analytical SQL queries, cleaned raw logs in Python (Pandas), and created the conversion summary dashboard.",
    outcome: "Refined end-to-end analytics workflow from raw unstructured outreach data to actionable business insights.",
    technologies: ["Excel", "SQL", "Python", "Data Analysis", "Analytics"],
    image: "/images/projects/sales-dashboard.svg",
    githubUrl: "https://github.com/vallurinithin31-bit/My-Projects"
  }
];

export const aiLabItems: AILabItem[] = [
  {
    id: "lab-agents",
    title: "AI Agents",
    description: "Multi-agent orchestration, autonomous decision loops, and tool-calling interfaces for multi-step task resolution.",
    tech: ["LangChain", "Agent Loops", "Tool Calling"],
    status: "Active Research",
    iconName: "Bot"
  },
  {
    id: "lab-rag",
    title: "RAG Systems",
    description: "Vector database indexing, semantic document chunking, and hybrid retrieval-augmented generation pipelines.",
    tech: ["ChromaDB", "Embeddings", "Hybrid Search"],
    status: "Prototyping",
    iconName: "Database"
  },
  {
    id: "lab-voice",
    title: "Voice AI",
    description: "Natural speech-to-intent pipelines and latency-optimized conversational voice agents.",
    tech: ["Speech-to-Text", "TTS", "Audio Streams"],
    status: "Experimenting",
    iconName: "Mic"
  },
  {
    id: "lab-automation",
    title: "AI Automation",
    description: "Trigger-based intelligent pipelines, workflow webhooks, and automated system dispatchers.",
    tech: ["Python Daemons", "Webhooks", "Cron Flows"],
    status: "Building",
    iconName: "Zap"
  },
  {
    id: "lab-prompt",
    title: "Prompt Engineering",
    description: "Systematic few-shot context framing, deterministic JSON schema enforcement, and chain-of-thought reasoning.",
    tech: ["Few-Shot", "JSON Schema", "Guardrails"],
    status: "Continuous",
    iconName: "Sparkles"
  },
  {
    id: "lab-llm-apps",
    title: "LLM Applications",
    description: "Domain-specific assistive engines, contextual knowledge synthesis, and conversational product copilots.",
    tech: ["OpenAI / Gemini", "REST APIs", "Context Windows"],
    status: "In Development",
    iconName: "Cpu"
  },
  {
    id: "lab-computer-control",
    title: "Computer Control",
    description: "Authorized device automation protocols, cross-device action triggering, and secure remote system bridges.",
    tech: ["Local Daemons", "Hotkeys", "Socket Auth"],
    status: "Proof of Concept",
    iconName: "Laptop"
  },
  {
    id: "lab-assistants",
    title: "Intelligent Assistants",
    description: "Proactive personal agents with contextual state tracking, calendar awareness, and reminder workflows.",
    tech: ["State Machines", "Memory Stores", "Reminders"],
    status: "Iterating",
    iconName: "BrainCircuit"
  }
];

export const approachSteps: ApproachStep[] = [
  {
    step: "01",
    stage: "IDEA",
    title: "Understand The Problem",
    description: "Deconstruct the core challenge, define clear user value, and establish measurable success criteria before writing code.",
    actionPoints: ["User friction discovery", "Scope & feasibility audit", "Success metric definition"]
  },
  {
    step: "02",
    stage: "RESEARCH",
    title: "Explore Tech & Constraints",
    description: "Investigate available AI models, APIs, dataset schemas, prompt strategies, and architectural constraints.",
    actionPoints: ["Model & library selection", "Data structure mapping", "Latency & cost assessment"]
  },
  {
    step: "03",
    stage: "PROTOTYPE",
    title: "Build Fastest Useful Version",
    description: "Create an interactive minimum viable proof-of-concept to test core AI logic and validate feasibility rapidly.",
    actionPoints: ["Core prompt & model testing", "Mock pipeline assembly", "Immediate feedback capture"]
  },
  {
    step: "04",
    stage: "BUILD",
    title: "Turn Into A Working Product",
    description: "Engineer modular, maintainable Python code, structured endpoints, robust error handling, and intuitive interfaces.",
    actionPoints: ["Clean modular architecture", "API & data integration", "Performance optimization"]
  },
  {
    step: "05",
    stage: "TEST",
    title: "Validate Workflows & Edge Cases",
    description: "Rigorously test prompt variations, edge cases, response quality, failure fallbacks, and execution stability.",
    actionPoints: ["Edge case stress testing", "Prompt output consistency", "Security & safety verification"]
  },
  {
    step: "06",
    stage: "ITERATE",
    title: "Improve Based On Feedback",
    description: "Analyze user feedback, logs, and conversion data to refine prompt chains, improve speed, and enhance usability.",
    actionPoints: ["Log & feedback analysis", "Prompt refinement", "Continuous performance tuning"]
  }
];

export const educationData: EducationData = {
  degree: "B.Tech — Computer Science & Engineering (AI & ML)",
  specialization: "Artificial Intelligence & Machine Learning",
  status: "Undergraduate (2024 – 2028)",
  institution: "Amrita Sai Institute of Science and Technology",
  year: "2024 – 2028",
  coursework: [
    "Artificial Intelligence",
    "Machine Learning",
    "Programming in Python",
    "Data Structures & Algorithms",
    "Database Management Systems (SQL)",
    "Software Engineering & Development"
  ]
};

export const certificationsData: Certificate[] = [
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
  }
];

export const certificatesData = certificationsData;
