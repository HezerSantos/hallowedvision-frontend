import RectangleLoader from "../../../../../common/RectangleLoader/RectangleLoader";
import React from "react";
import "./ExperienceItemLoader.scss";

interface ExperienceItemLoaderProps {
  entries?: number;
}

const ExperienceItemLoader = ({ entries = 3 }: ExperienceItemLoaderProps) => {
  return (
    <>
      <div className="experience-item__header">
        <div className="experience-item__header__image">
          <RectangleLoader width="100%" height="100%" />
        </div>

        <div className="experience-item__header__info">
          <RectangleLoader width="12rem" height="20px" />
          <RectangleLoader width="7rem" height="13px" />
        </div>
      </div>

      <div className="experience-item__content">
        {Array.from({ length: entries }).map((_, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <div className="experience-item__separator">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} />
                ))}
              </div>
            )}

            <div className="experience-item experience-item--loader">
              <RectangleLoader width="65%" height="22px" />
              <RectangleLoader width="5rem" height="25px" />
              <RectangleLoader width="45%" height="13px" />
              <RectangleLoader width="35%" height="13px" />
              <RectangleLoader width="55%" height="13px" />

              <ul>
                {[100, 90, 75, 50, 65].map((width) => (
                  <li key={width}>
                    <RectangleLoader
                      className="experience-item__loader-dot"
                      width="6px"
                      height="6px"
                      borderRadius="50%"
                    />
                    <RectangleLoader width={`${width}%`} height="13px" />
                  </li>
                ))}
              </ul>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default ExperienceItemLoader;
