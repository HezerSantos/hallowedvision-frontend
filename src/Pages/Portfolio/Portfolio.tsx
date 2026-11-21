import React from "react";
import PortfolioHeader from "../../components/Portfolio/PortfolioHeader/PortfolioHeader";

import { useGetPortfolioQuery } from "../../services/portfolioService";
import PortfolioDetails from "../../components/Portfolio/PortfolioDetails/PortfolioDetails";
import "./Portfolio.scss";
import PortfolioContent from "../../components/Portfolio/PortfolioContent/PortfolioContent";
const Portfolio: React.FC = () => {
  const { data, isLoading } = useGetPortfolioQuery();
  return (
    <>
      <PortfolioHeader
        isLoading={isLoading}
        profileImage={data?.profileImageUrl ?? ""}
      />
      <main className="portfolio">
        <PortfolioDetails
          experienceData={data?.experiences}
          isLoading={isLoading}
        />
        <PortfolioContent
          portfolioItems={data?.portfolioProjects}
          isLoading={isLoading}
        />
      </main>
    </>
  );
};

export default Portfolio;
