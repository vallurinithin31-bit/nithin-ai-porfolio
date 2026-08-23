export interface PersonalInfo {
  name: string;
  title: string;
  educationStatus: string;
  intro: string;
  aboutText: string;
  profileImage: string;
  profileImageFallback: string;
  resumeUrl: string;
  resumeFileName: string;
  phone?: string;
  socials: {
    linkedin: string;
    github: string;
    email: string;
    location?: string;
    phone?: string;
    driveCertificates?: string;
  };
}

export interface Education {
  degree: string;
  specialization: string;
  status: string;
  institution?: string;
  year?: string;
  previousEducation?: {
    level: string;
    institution: string;
    details?: string;
  }[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    status: 'proficient' | 'learning';
    icon?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Agentic AI' | 'AI / Healthcare' | 'Machine Learning' | 'Data Analysis' | 'Full-Stack Web' | 'All';
  shortDescription: string;
  problemStatement: string;
  features: string[];
  technologies: string[];
  disclaimer?: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  badge?: string;
  featured?: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Artificial Intelligence' | 'Machine Learning' | 'Data Science' | 'Internships' | 'Competitions & Hackathons' | 'Professional Skills' | 'Web Development' | 'Python' | 'Generative AI' | 'Workshops' | 'Courses' | 'Other' | string;
  image: string;
  credentialId?: string;
  credentialUrl?: string;
  downloadUrl?: string;
  description: string;
  skills: string[];
  isPlaceholder?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  type: 'Self-Directed' | 'Internship' | 'Academic' | 'Upcoming';
  description?: string;
  focus: string[];
  responsibilities?: string[];
  achievements?: string[];
  isPlaceholder?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'Workshop' | 'Course' | 'AI/ML Milestone' | 'Certification' | 'Other';
  date: string;
  description: string;
  tags: string[];
  link?: string;
  isPlaceholder?: boolean;
}
