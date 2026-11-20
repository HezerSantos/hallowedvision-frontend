import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./Header.scss";
import { AngelWings } from "../../models/AngelWings";

interface HomeHeaderProps {
  modelUrl: string;
}

const Header: React.FC<HomeHeaderProps> = ({ modelUrl }) => {
  return (
    <header className="home-header">
      <div className="home-header__content">
        <AngelWings modelUrl={modelUrl} />

        <div className="home-header__text">
          <span className="home-header__eyebrow">HALLOWED VISIONS</span>

          <h1>
            Focus on What Matters.
            <br />
            <span>Bring Your Vision to Life.</span>
          </h1>

          <p>
            Thoughtful digital experiences, designed to bring your ideas into
            focus.
          </p>

          <Link to="/packages" className="home-header__button">
            <span>Explore Packages</span>
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
