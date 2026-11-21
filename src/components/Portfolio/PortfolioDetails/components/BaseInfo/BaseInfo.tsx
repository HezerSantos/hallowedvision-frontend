import { FaCode, FaDatabase, FaLock, FaClipboard } from "react-icons/fa";
import PortfolioDetailsSection from "../../../common/PortfolioDetailsSection/PortfolioDetailsSection";
import "./BaseInfo.scss";

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

export default BaseInfo;
