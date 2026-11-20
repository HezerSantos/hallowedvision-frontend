import React from "react";
import "./PricingHeader.scss";

const PricingHeader: React.FC = () => {
  return (
    <header className="pricing-header">
      <div className="pricing-header__content">
        <span className="pricing-header__eyebrow">YOUR VISION, YOUR WAY</span>

        <h1>
          Start Your Journey
          <span> Today.</span>
        </h1>

        <p>Thoughtfully designed packages to bring your next idea to life.</p>

        <div className="pricing-header__divider" />
      </div>
    </header>
  );
};

export default PricingHeader;
