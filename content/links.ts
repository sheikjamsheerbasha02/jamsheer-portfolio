import type { ProfessionalLink, ResumeMetadata } from "@/types/portfolio";

export const professionalLinks: ProfessionalLink[] = [
  {
    type: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/sheik-jamsheer-basha-t-59a3171ab",
    external: true,
  },
  {
    type: "email",
    label: "Email",
    url: "mailto:sheikjamsheerbasha@gmail.com",
    external: false,
  },
  {
    type: "resume",
    label: "Resume",
    external: false,
  },
];

export const resume: ResumeMetadata = {
  label: "Resume",
  available: false,
  downloadable: false,
  openInNewTab: false,
};
