import React from "react";
import { FaCode, FaDatabase, FaLock, FaClipboard } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import "./PortfolioDetails.scss";
import PortfolioDetailsSection, {
  PortfolioDetailsContainer,
} from "../common/PortfolioDetailsSection/PortfolioDetailsSection";
import {
  formatPeriodDiff,
  formatPeriodShort,
  getCurrentPeriod,
  getTotalTime,
} from "../common/helpers";

const Education = () => {
  return (
    <PortfolioDetailsSection
      header="Education"
      subtitle="The foundation behind my work."
      number="01"
      contentClass="pdc-education"
    >
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
        Building a foundation in software development, algorithms, and system
        design. Focused on creating practical solutions through thoughtful
        engineering and continuous learning.
      </p>
    </PortfolioDetailsSection>
  );
};

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

const BaseInfo = () => {
  return (
    <PortfolioDetailsSection
      header="What I Do"
      subtitle="Areas I enjoy working in."
      number="02"
      contentClass="pdc-work"
    >
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
    </PortfolioDetailsSection>
  );
};

export interface ExperienceItemProps {
  header?: { name: string; imageUrl: string };
  meta: {
    position: string;
    type: "Full-time" | "Part-time" | "Internship";
    location: string;
    remote: boolean;
  };
  bullets?: string[];
  period: { start: number; end?: number };
  child?: ExperienceItemProps;
}

const ExperienceItem = ({
  header,
  meta,
  bullets,
  period,
  child,
}: ExperienceItemProps) => {
  return (
    <>
      {header && (
        <div className="experience-item__header">
          <div className="experience-item__header__image">
            <img src={header.imageUrl} alt={header.name} />
          </div>
          <div className="experience-item__header__info">
            <p>{header.name}</p>
            <p>{getTotalTime(period, child)}</p>
          </div>
        </div>
      )}
      <div className="experience-item__content">
        {child && (
          <>
            <ExperienceItem
              key={child.period.start}
              meta={child.meta}
              bullets={child.bullets}
              period={child.period}
              child={child.child}
            />
            <div className="experience-item__separator">
              {[...Array(5)].map((_, i) => (
                <div key={i}></div>
              ))}
            </div>
          </>
        )}
        <div
          className={`experience-item ${
            !period.end && period.start <= getCurrentPeriod()
              ? "experience-item--current"
              : ""
          }`}
        >
          <p>{meta.position}</p>
          <p>{meta.type}</p>
          <p>{meta.location}</p>
          {meta.remote && <p>Remote</p>}
          <p>
            {formatPeriodShort(period.start)} -{" "}
            {period.end ? formatPeriodShort(period.end) : "Present"}{" "}
            {formatPeriodDiff(period.start, period.end || getCurrentPeriod())}
          </p>
          <ul>
            {bullets?.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

interface ExperienceProps {
  experienceData?: ExperienceItemProps[];
}
const Experience = ({ experienceData }: ExperienceProps) => {
  return (
    <PortfolioDetailsSection
      header="My Experience"
      subtitle="What I have been a part of so far."
      number="03"
      contentClass="experience-container"
    >
      {experienceData?.map((e) => {
        return (
          <ExperienceItem
            key={e.period.start}
            header={e.header}
            meta={e.meta}
            bullets={e.bullets}
            period={e.period}
            child={e.child}
          />
        );
      })}
    </PortfolioDetailsSection>
  );
};

const PortfolioDetails = ({ experienceData }: ExperienceProps) => {
  return (
    <>
      <PortfolioDetailsContainer base={true}>
        <Education />
        <BaseInfo />
      </PortfolioDetailsContainer>
      <PortfolioDetailsContainer base={false}>
        <Experience experienceData={experienceData} />
      </PortfolioDetailsContainer>
    </>
  );
};

export default PortfolioDetails;
