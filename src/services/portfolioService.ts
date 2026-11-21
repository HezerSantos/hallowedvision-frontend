import { api } from "./apiService";

interface PortfolioProject {
  id: number;
  name: string;
  description: string;
  demoUrl: string;
  type: string;
  imageUrl: string;
  languages: string[];
}

interface ExperienceItem {
  header?: { name: string; imageUrl: string };
  meta: {
    position: string;
    type: "Full-time" | "Part-time" | "Internship";
    location: string;
    remote: boolean;
  };
  bullets?: string[];
  period: { start: number; end?: number };
  child?: ExperienceItem;
}

interface PortfolioResponse {
  profileImageUrl: string;
  portfolioProjects: PortfolioProject[];
  experiences: ExperienceItem[];
}

export interface ProjectResponse {
  name: string;
  demoUrl: string;
  githubUrl: string;
  imageOne: string | undefined;
  imageTwo: string | undefined;
  aboutDescription: string;
  extendedDescription: string | null;
  technologies: string[];
  gallery: (string | undefined)[];
  month: string | null;
  year: string | null;
}

const portfolio = api.injectEndpoints({
  endpoints: (builder) => ({
    getPortfolio: builder.query<PortfolioResponse, void>({
      query: () => ({
        url: "/portfolio",
      }),
    }),
    getProjectById: builder.query<ProjectResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/portfolio/${id}`,
      }),
    }),
  }),
});

export const { useGetPortfolioQuery, useGetProjectByIdQuery } = portfolio;
