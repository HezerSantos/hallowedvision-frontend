import { PortfolioDetailsContainer } from "../common/PortfolioDetailsSection/PortfolioDetailsSection";
import Education from "./components/Education/Education";
import BaseInfo from "./components/BaseInfo/BaseInfo";
import Experience, {
  ExperienceProps,
} from "./components/Experience/Experience";

const PortfolioDetails = ({ experienceData, isLoading }: ExperienceProps) => {
  return (
    <>
      <PortfolioDetailsContainer base={true}>
        <Education />
        <BaseInfo />
      </PortfolioDetailsContainer>
      <PortfolioDetailsContainer base={false}>
        <Experience experienceData={experienceData} isLoading={isLoading} />
      </PortfolioDetailsContainer>
    </>
  );
};

export default PortfolioDetails;
