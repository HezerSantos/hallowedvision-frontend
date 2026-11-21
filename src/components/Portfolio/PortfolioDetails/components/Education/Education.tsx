import { FaGraduationCap } from "react-icons/fa6";
import PortfolioDetailsSection from "../../../common/PortfolioDetailsSection/PortfolioDetailsSection";
import "./Education.scss";
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

export default Education;
