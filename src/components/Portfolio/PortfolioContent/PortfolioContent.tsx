import React from "react";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaCloudflare,
} from "react-icons/fa6";
import { SiExpress, SiSocketdotio } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { GrStripe } from "react-icons/gr";
import { BiLogoTypescript } from "react-icons/bi";

import "./PortfolioContent.scss";
import RectangleLoader from "../../common/RectangleLoader/RectangleLoader";

interface PortfolioItemProps {
  imageUrl: string;
  title: string;
  type: string;
  demoUrl: string;
  technologies: string[];
  description: string;
  pId: number;
}

const technologyMap: Map<string, React.ReactElement> = new Map([
  ["HTML", <FaHtml5 />],
  ["CSS", <FaCss3Alt />],
  ["JavaScript", <FaJs />],
  ["ReactJS", <FaReact />],
  ["Express.js", <SiExpress />],
  ["Node.js", <FaNode />],
  ["Python", <FaPython />],
  ["SQL", <DiMysql />],
  ["Stripe", <GrStripe />],
  ["WebSocket", <SiSocketdotio />],
  ["Cloudflare R2", <FaCloudflare />],
  ["TypeScript", <BiLogoTypescript />],
]);

interface TechnologyItemProps {
  techName: string;
  icon: React.ReactElement | undefined;
}

const TechnologyItem: React.FC<TechnologyItemProps> = ({ techName, icon }) => {
  return (
    <div className="technology-item">
      <span className="technology-item__icon">{icon}</span>
      <span className="technology-item__name">{techName}</span>
    </div>
  );
};

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  imageUrl,
  title,
  type,
  demoUrl,
  technologies,
  description,
  pId,
}) => {
  return (
    <article className="portfolio-item">
      <div className="portfolio-item__image">
        <img src={imageUrl} alt={title} />
        <span className="portfolio-item__image-overlay" />
      </div>

      <div className="portfolio-item__description">
        <div className="portfolio-item__description-header">
          <div>
            <span className="portfolio-item__type">{type} Application</span>
            <h2>{title}</h2>
          </div>

          <Link
            className="portfolio-item__demo-link"
            to={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="portfolio-item__description-technology">
          <h3>Technologies</h3>

          <div className="portfolio-item__technology-list">
            {technologies.map((technology, index) => (
              <TechnologyItem
                key={`${technology}-${index}`}
                icon={technologyMap.get(technology)}
                techName={technology}
              />
            ))}
          </div>
        </div>

        <div className="portfolio-item__description-description">
          <h3>About the Project</h3>
          <p>{description}</p>
        </div>

        <Link className="portfolio-item__details-link" to={`/portfolio/${pId}`}>
          Explore Project
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
};

const LoadingPortfolioItem: React.FC = () => {
  return (
    <article className="portfolio-item portfolio-item--loading">
      <div className="portfolio-item__image">
        <RectangleLoader width="100%" height="100%" borderRadius="0.75rem" />
      </div>

      <div className="portfolio-item__description">
        <div className="portfolio-item__description-header">
          <div className="portfolio-item__loading-heading">
            <RectangleLoader width="7rem" height="0.75rem" />
            <RectangleLoader
              width="65%"
              height="1.75rem"
              margin="0.75rem 0 0"
            />
          </div>

          <RectangleLoader width="6rem" height="2rem" borderRadius="0.5rem" />
        </div>

        <div className="portfolio-item__description-technology">
          <RectangleLoader width="7rem" height="1rem" />

          <div className="portfolio-item__loading-technologies">
            {Array.from({ length: 4 }).map((_, index) => (
              <div className="portfolio-item__loading-technology" key={index}>
                <RectangleLoader
                  width="2rem"
                  height="2rem"
                  borderRadius="0.5rem"
                />
                <RectangleLoader width="3.5rem" height="0.6rem" />
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio-item__description-description">
          <RectangleLoader width="8rem" height="1rem" />
          <RectangleLoader width="100%" height="0.75rem" />
          <RectangleLoader width="85%" height="0.75rem" />
          <RectangleLoader width="65%" height="0.75rem" />
        </div>

        <RectangleLoader width="100%" height="2.5rem" borderRadius="0.5rem" />
      </div>
    </article>
  );
};

interface PortfolioProjectsDataType {
  id: number;
  name: string;
  description: string;
  demoUrl: string;
  type: string;
  imageUrl: string;
  languages: string[];
}

interface PortfolioContentProps {
  portfolioItems?: PortfolioProjectsDataType[] | null;
  isLoading: boolean;
}

const PortfolioContent: React.FC<PortfolioContentProps> = ({
  portfolioItems,
  isLoading,
}) => {
  return (
    <section className="page-section__child portfolio-content">
      <div className="portfolio-content__container">
        {isLoading ? (
          <>
            <LoadingPortfolioItem />
            <LoadingPortfolioItem />
            <LoadingPortfolioItem />
            <LoadingPortfolioItem />
          </>
        ) : (
          portfolioItems?.map((item) => (
            <PortfolioItem
              key={`P${item.id}`}
              imageUrl={item.imageUrl}
              title={item.name}
              type={item.type}
              demoUrl={item.demoUrl}
              technologies={item.languages}
              description={item.description}
              pId={item.id}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default PortfolioContent;
