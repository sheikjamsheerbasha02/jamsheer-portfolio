import type { ProfessionalExperience } from "@/types/portfolio";

export const professionalExperience: ProfessionalExperience[] = [
  {
    role: "Backend Developer",
    company: "Sahal Webads Pvt Ltd.",
    startDate: "2023",
    isCurrent: true,
    responsibilities: [
      {
        category: "backend",
        description: "Developing and maintaining backend modules.",
      },
      {
        category: "backend",
        description: "Ensuring system reliability and performance.",
      },
      {
        category: "data",
        description: "Managing database operations, data validation, and data updates.",
      },
      {
        category: "backend",
        description: "Handling errors and resolving technical issues.",
      },
      {
        category: "api",
        description: "Supporting API integration.",
      },
      {
        category: "collaboration",
        description: "Coordinating with testing and support teams for smooth deployment.",
      },
    ],
  },
  {
    role: "Manual Tester",
    isCurrent: false,
    responsibilities: [
      {
        category: "testing",
        description: "Designing and executing test cases.",
      },
      {
        category: "testing",
        description: "Verifying application functionality.",
      },
      {
        category: "testing",
        description: "Identifying, documenting, and tracking defects until closure.",
      },
      {
        category: "testing",
        description: "Performing functional and regression testing.",
      },
      {
        category: "testing",
        description: "Preparing testing reports and checking compliance with requirements.",
      },
    ],
  },
  {
    role: "Technical Support Coordinator",
    isCurrent: false,
    responsibilities: [
      {
        category: "support",
        description: "Coordinating technical teams and clients.",
      },
      {
        category: "support",
        description: "Monitoring service requests and ensuring timely issue closure.",
      },
      {
        category: "support",
        description: "Providing status updates and maintaining service documentation.",
      },
      {
        category: "collaboration",
        description: "Improving workflow communication.",
      },
    ],
  },
  {
    role: "Customer Support Executive",
    isCurrent: false,
    responsibilities: [
      {
        category: "support",
        description: "Responding to customer queries and resolving complaints.",
      },
      {
        category: "support",
        description: "Maintaining customer-interaction records.",
      },
      {
        category: "support",
        description: "Assisting with product usage and troubleshooting.",
      },
    ],
  },
  {
    role: "Sales Executive",
    isCurrent: false,
    responsibilities: [
      {
        category: "support",
        description: "Handling customer enquiries and explaining product features.",
      },
      {
        category: "support",
        description: "Assisting customers with decisions and following up on service requests.",
      },
    ],
  },
];
