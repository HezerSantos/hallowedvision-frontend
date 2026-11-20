import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./QuickContact.scss";

const QuickContact = () => {
  const navigate = useNavigate();

  return (
    <section className="quick-contact">
      <div className="quick-contact__content">
        <span className="quick-contact__eyebrow">
          YOUR NEXT PROJECT STARTS HERE
        </span>

        <h2 className="quick-contact__title">
          Don't Know
          <br />
          Where to <span>Start?</span>
        </h2>

        <p className="quick-contact__subtitle">
          No more boilerplate. Just clone, build, and launch.
        </p>

        <p className="quick-contact__description">
          Get a fully built SaaS website with production-ready code. Everything
          you need to launch faster, customize freely, and own your platform.
        </p>

        <button
          className="quick-contact__button"
          onClick={() => navigate("/packages")}
        >
          <span>SIMPLIFY YOUR LAUNCH</span>
          <FaArrowRight aria-hidden="true" />
        </button>
      </div>

      <div className="quick-contact__visual" aria-hidden="true">
        <div className="quick-contact__visual-overlay" />
        <span className="quick-contact__visual-text">
          IDEAS INTO
          <br />
          REALITY.
        </span>
        <span className="quick-contact__visual-caption">
          DESIGNED TO BUILD. BUILT TO LAST.
        </span>
      </div>

      <span className="quick-contact__decoration" aria-hidden="true">
        HV.
      </span>
    </section>
  );
};

export default QuickContact;
