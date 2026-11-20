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
interface PortfolioResponse {
  profileImageUrl: string;
  portfolioProjects: PortfolioProject[];
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
