import { ReactNode } from "react";
import "./PortfolioDetailsSection.scss";

interface PortfolioSectionHeaderProps {
  header: string;
  subtitle: string;
  number: string;
}

export const PortfolioSectionHeader: React.FC<PortfolioSectionHeaderProps> = ({
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

interface PortfolioDetailsSectionProps {
  children: ReactNode;
  header: string;
  subtitle: string;
  number: string;
  contentClass: string;
}

export const PortfolioDetailsContainer = ({
  children,
  base,
}: {
  children: ReactNode;
  base: boolean;
}) => {
  return (
    <section
      className={`page-section__child portfolio-details portfolio-details--${base ? "base" : "full"}`}
    >
      {children}
    </section>
  );
};

const PortfolioDetailsSection = ({
  children,
  header,
  subtitle,
  number,
  contentClass,
}: PortfolioDetailsSectionProps) => {
  return (
    <div className="portfolio-details__section">
      <PortfolioSectionHeader
        header={header}
        subtitle={subtitle}
        number={number}
      />
      <div className={`portfolio-details__content ${contentClass}`}>
        {children}
      </div>
    </div>
  );
};

export default PortfolioDetailsSection;
