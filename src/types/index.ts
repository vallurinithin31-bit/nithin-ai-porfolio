export interface PersonalInfo {
  name: string;
  primaryPositioning: string;
  shortIntro: string;
  heroHeadline: string;
  heroStatement: string;
  heroSupporting: string;
  heroParagraph: string;
  aboutHeading: string;
  aboutText: string;
  educationDegree: string;
  location: string;
  resumePath: string;
  resumeFileName: string;
  socials: {
    linkedin: string;
    github: string;
    email: string;
    phone?: string;
    location: string;
    driveCertificates?: string;
  };
}

export interface AboutHighlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface ExperienceData {
  company: string;
  companyAlt?: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  metricCards: {
    title: string;
    highlight: string;
    description: string;
    icon: string;
  }[];
  priorExperience?: {
    id: string;
    role: string;
    organization: string;
    duration: string;
    description: string;
    responsibilities: string[];
  }[];
}

export interface SkillItem {
  name: string;
  explanation: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Voice AI' | 'AI Agents' | 'Automation' | 'Analytics' | 'Workflow AI' | 'All';
  shortDescription: string;
  problem: string;
  solution: string;
  features: string[];
  contribution: string;
  outcome: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  disclaimer?: string;
  note?: string;
}

export interface AILabItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  status: string;
  iconName: string;
}

export interface ApproachStep {
  step: string;
  stage: string;
  title: string;
  description: string;
  actionPoints: string[];
}

export interface EducationData {
  degree: string;
  specialization: string;
  status: string;
  institution?: string;
  year: string;
  coursework: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image?: string;
  credentialId?: string;
  credentialUrl?: string;
  downloadUrl?: string;
  description: string;
  skills: string[];
  isPlaceholder?: boolean;
}

export interface HeroNode {
  id: string;
  label: string;
  description: string;
  category: string;
  color: string;
}

