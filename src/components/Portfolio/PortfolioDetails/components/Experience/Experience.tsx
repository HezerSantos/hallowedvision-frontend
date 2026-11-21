import ExperienceItemLoader from "./ExperienceItemLoader/ExperienceItemLoader";
import ExperienceItem, {
  ExperienceItemProps,
} from "./ExperiencItem/ExperienceItem";
import "./Experience.scss";
import PortfolioDetailsSection from "../../../common/PortfolioDetailsSection/PortfolioDetailsSection";
export interface ExperienceProps {
  experienceData?: ExperienceItemProps[];
  isLoading: boolean;
}

const Experience = ({ experienceData, isLoading }: ExperienceProps) => {
  return (
    <PortfolioDetailsSection
      header="My Experience"
      subtitle="What I have been a part of so far."
      number="03"
      contentClass="experience-container"
    >
      {isLoading ? (
        <>
          <ExperienceItemLoader entries={2} />
          <ExperienceItemLoader entries={3} />
        </>
      ) : (
        <>
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
        </>
      )}
    </PortfolioDetailsSection>
  );
};

export default Experience;
