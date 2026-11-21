import TermsNav from "../../components/Terms/TermsNav";
import TermsHeader from "../../components/Terms/TermsHeader";
import TermsContent from "../../components/Terms/TermsContent";
import "./Terms.scss";
const Terms: React.FC = () => {
  return (
    <>
      <div className="page-section term__wrapper-parent">
        <div className="terms__wrapper page-section__child">
          <div className="terms__nav-wrapper">
            <TermsNav />
          </div>
          <div className="terms__content">
            <TermsHeader />
            <TermsContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
