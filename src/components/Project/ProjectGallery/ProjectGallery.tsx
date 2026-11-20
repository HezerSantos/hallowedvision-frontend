import { useEffect, useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import "./ProjectGallery.scss";

interface ProjectGalleryProps {
  galleryImages: (string | undefined)[] | undefined;
}

const ProjectGallery = ({ galleryImages }: ProjectGalleryProps) => {
  const imageList =
    galleryImages?.filter((image): image is string => Boolean(image)) ?? [];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [galleryImages]);

  const shiftLeft = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? imageList.length - 1 : previous - 1,
    );
  };

  const shiftRight = () => {
    setCurrentIndex((previous) =>
      previous === imageList.length - 1 ? 0 : previous + 1,
    );
  };

  if (imageList.length === 0) return null;

  return (
    <section className="page-section">
      <div className="page-section__child project-gallery">
        <div className="project-gallery__heading">
          <div>
            <span>03 / Visual Showcase</span>
            <h2>Project Gallery</h2>
          </div>

          <span className="project-gallery__count">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(imageList.length).padStart(2, "0")}
          </span>
        </div>

        <div className="project-gallery__carousel">
          <div className="project-gallery__viewport">
            <div
              className="project-gallery__track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {imageList.map((imageUrl, index) => (
                <div
                  className="project-gallery__slide"
                  key={`${imageUrl}-${index}`}
                >
                  <img
                    src={imageUrl}
                    alt={`Project gallery image ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {imageList.length > 1 && (
            <div className="project-gallery__controls">
              <span className="project-gallery__hint">
                Explore the project visuals
              </span>

              <div className="project-gallery__navigation">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={shiftLeft}
                >
                  <CiCircleChevLeft />
                </button>

                <div className="project-gallery__indicators">
                  {imageList.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={
                        currentIndex === index
                          ? "project-gallery__indicator project-gallery__indicator--active"
                          : "project-gallery__indicator"
                      }
                      aria-label={`Go to image ${index + 1}`}
                      aria-current={currentIndex === index ? "true" : undefined}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  aria-label="Next image"
                  onClick={shiftRight}
                >
                  <CiCircleChevRight />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
