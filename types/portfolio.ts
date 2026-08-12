export const EXPERIENCE_TYPES = ["professional", "personal", "training"] as const;
export type ExperienceType = (typeof EXPERIENCE_TYPES)[number];

export const EXPERIENCE_RESPONSIBILITY_CATEGORIES = [
  "backend",
  "data",
  "api",
  "testing",
  "support",
  "collaboration",
] as const;
export type ExperienceResponsibilityCategory =
  (typeof EXPERIENCE_RESPONSIBILITY_CATEGORIES)[number];

export const TECHNICAL_CAPABILITY_CATEGORIES = [
  "backend",
  "database",
  "api",
  "testing",
  "support",
  "frontend",
  "tooling",
] as const;
export type TechnicalCapabilityCategory =
  (typeof TECHNICAL_CAPABILITY_CATEGORIES)[number];

export interface Profile {
  name: string;
  professionalTitle: string;
  positioningStatement: string;
  currentRole: string;
  currentEmploymentStatus: "employed";
  seekingOpportunities: false;
}

export interface ExperienceResponsibility {
  category: ExperienceResponsibilityCategory;
  description: string;
}

export interface ProfessionalExperience {
  role: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  isCurrent: boolean;
  responsibilities: ExperienceResponsibility[];
}

export interface TechnicalCapability {
  name: string;
  category: TechnicalCapabilityCategory;
  context: string;
  experienceType: ExperienceType;
  notes?: string;
}

export interface Education {
  institution: string;
  qualification: string;
  field?: string;
  startDate?: string;
  endDate?: string;
  result?: string;
}

export interface Training {
  title: string;
  provider?: string;
  duration?: string;
  date?: string;
  category: string;
}

export const PROFESSIONAL_LINK_TYPES = ["linkedin", "email", "resume"] as const;
export type ProfessionalLinkType = (typeof PROFESSIONAL_LINK_TYPES)[number];

export interface ProfessionalLink {
  type: ProfessionalLinkType;
  label: string;
  url?: string;
  external: boolean;
}

export interface ResumeMetadata {
  label: string;
  path?: string;
  available: boolean;
  downloadable: boolean;
  openInNewTab: boolean;
}

export interface Project {
  name: string;
  description: string;
  problem?: string;
  role?: string;
  technologies?: string[];
  backendResponsibilities?: string[];
  database?: string;
  apiResponsibilities?: string[];
  technicalDecisions?: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  results?: string[];
}

export interface PortfolioContent {
  profile: Profile;
  professionalExperience: ProfessionalExperience[];
  technicalCapabilities: TechnicalCapability[];
  education: Education[];
  training: Training[];
  professionalLinks: ProfessionalLink[];
  resume: ResumeMetadata;
}
