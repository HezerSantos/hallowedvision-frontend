import {
  FaBagShopping,
  FaBusinessTime,
  FaPersonHalfDress,
  FaBoxOpen,
} from "react-icons/fa6";
import { FaWrench } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

import "./ProjectPreview.scss";

const ProjectPreview = () => {
  return (
    <section className="project-preview">
      <div className="project-preview__header">
        <div className="project-preview__heading">
          <span className="project-preview__eyebrow">
            WHAT WE BRING TO THE TABLE
          </span>

          <h2>
            Built around
            <br />
            <span>your vision.</span>
          </h2>
        </div>

        <p className="project-preview__description">
          Every project has a purpose. We bring the creativity, craftsmanship,
          and technical expertise to turn your ideas into something real.
        </p>
      </div>

      <div className="project-preview__marquee">
        <div className="project-preview__track">
          <div className="project-preview__group">
            <div className="project-preview__item">
              <FaBagShopping />
              <span>E-Commerce</span>
            </div>

            <div className="project-preview__item">
              <FaBusinessTime />
              <span>Business</span>
            </div>

            <div className="project-preview__item">
              <FaPersonHalfDress />
              <span>Personal</span>
            </div>

            <div className="project-preview__item">
              <FaWrench />
              <span>Craftsmanship</span>
            </div>

            <div className="project-preview__item">
              <FaBoxOpen />
              <span>Out of the Box</span>
            </div>

            <div className="project-preview__item">
              <MdSecurity />
              <span>Security</span>
            </div>
          </div>

          <div className="project-preview__group" aria-hidden="true">
            <div className="project-preview__item">
              <FaBagShopping />
              <span>E-Commerce</span>
            </div>

            <div className="project-preview__item">
              <FaBusinessTime />
              <span>Business</span>
            </div>

            <div className="project-preview__item">
              <FaPersonHalfDress />
              <span>Personal</span>
            </div>

            <div className="project-preview__item">
              <FaWrench />
              <span>Craftsmanship</span>
            </div>

            <div className="project-preview__item">
              <FaBoxOpen />
              <span>Out of the Box</span>
            </div>

            <div className="project-preview__item">
              <MdSecurity />
              <span>Security</span>
            </div>
          </div>
        </div>
      </div>

      <div className="project-preview__projects">
        <div className="project-preview__projects-heading">
          <div>
            <span className="project-preview__eyebrow">
              OUR AREAS OF EXPERTISE
            </span>
            <h3>Different ideas. One vision.</h3>
          </div>

          <span className="project-preview__project-count">01 — 04</span>
        </div>

        <div className="project-preview__grid">
          <div className="project-preview__card project-preview__card--business">
            <div className="project-preview__card-content">
              <span className="project-preview__card-number">01</span>
              <div className="project-preview__card-title">
                <span>01 / BUSINESS</span>
                <h4>Business</h4>
              </div>
            </div>
          </div>

          <div className="project-preview__card project-preview__card--ecommerce">
            <div className="project-preview__card-content">
              <span className="project-preview__card-number">02</span>
              <div className="project-preview__card-title">
                <span>02 / COMMERCE</span>
                <h4>E-Commerce</h4>
              </div>
            </div>
          </div>

          <div className="project-preview__card project-preview__card--personal">
            <div className="project-preview__card-content">
              <span className="project-preview__card-number">03</span>
              <div className="project-preview__card-title">
                <span>03 / INDIVIDUAL</span>
                <h4>Personal</h4>
              </div>
            </div>
          </div>

          <div className="project-preview__card project-preview__card--service">
            <div className="project-preview__card-content">
              <span className="project-preview__card-number">04</span>
              <div className="project-preview__card-title">
                <span>04 / SOLUTIONS</span>
                <h4>Service</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPreview;
