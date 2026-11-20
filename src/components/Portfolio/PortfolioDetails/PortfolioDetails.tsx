import React from "react";
import { FaCode, FaDatabase, FaLock, FaClipboard } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

import "./PortfolioDetails.scss";

interface WorkElementProps {
  icon: React.ReactElement;
  header: string;
  description: string;
}

const PdcWorkElement: React.FC<WorkElementProps> = ({
  icon,
  header,
  description,
}) => {
  return (
    <div className="pdc-work__element">
      <div className="pdc-work__icon">{icon}</div>
      <div className="pdc-work__text">
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

interface PortfolioSectionHeaderProps {
  header: string;
  subtitle: string;
  number: string;
}

const PortfolioSectionHeader: React.FC<PortfolioSectionHeaderProps> = ({
  header,
  subtitle,
  number,
}) => {
  return (
    <div className="portfolio__section-header">
      <span className="portfolio__section-number">{number}</span>
      <div>
        <h2>{header}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

const PortfolioDetails: React.FC = () => {
  return (
    <section className="page-section__child portfolio-details">
      <div className="portfolio-details__section">
        <PortfolioSectionHeader
          header="Education"
          subtitle="The foundation behind my work."
          number="01"
        />

        <div className="portfolio-details__content pdc-education">
          <div className="pdc-education__top">
            <span className="pdc-education__status">
              <span />
              In Progress
            </span>
            <span className="pdc-education__date">2022 — Present</span>
          </div>

          <div className="pdc-education__main">
            <div className="pdc-education__icon">
              <FaGraduationCap />
            </div>

            <div>
              <h3>Bachelor of Science</h3>
              <h4>Computer Science</h4>
              <p className="pdc-education__school">University of Memphis</p>
            </div>
          </div>

          <div className="pdc-education__divider" />

          <p className="pdc-education__description">
            Building a foundation in software development, algorithms, and
            system design. Focused on creating practical solutions through
            thoughtful engineering and continuous learning.
          </p>
        </div>
      </div>

      <div className="portfolio-details__section">
        <PortfolioSectionHeader
          header="What I Do"
          subtitle="Areas I enjoy working in."
          number="02"
        />

        <div className="portfolio-details__content pdc-work">
          <PdcWorkElement
            icon={<FaCode />}
            header="Web Development"
            description="Building responsive, full-stack web experiences."
          />

          <PdcWorkElement
            icon={<FaDatabase />}
            header="Database Design"
            description="Structuring data and developing reliable APIs."
          />

          <PdcWorkElement
            icon={<FaLock />}
            header="Security"
            description="Implementing authentication and secure application practices."
          />

          <PdcWorkElement
            icon={<FaClipboard />}
            header="CMS"
            description="Developing manageable content-driven experiences."
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetails;
