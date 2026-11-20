import RectangleLoader from "../../common/RectangleLoader/RectangleLoader";
import "./ProjectLoader.scss";

const ProjectLoader = () => {
  return (
    <div className="project-page project-page--loading">
      <header className="project-header project-header--loading">
        <div className="project-header__title">
          <RectangleLoader width="7rem" height="0.85rem" />
          <RectangleLoader width="min(28rem, 65vw)" height="3.5rem" />
        </div>

        <div className="project-header__meta">
          <div className="project-header__links">
            <RectangleLoader
              width="8rem"
              height="2.75rem"
              borderRadius="0.6rem"
            />
            <RectangleLoader
              width="8rem"
              height="2.75rem"
              borderRadius="0.6rem"
            />
          </div>

          <RectangleLoader width="6rem" height="0.85rem" />
        </div>
      </header>

      <main className="project-page__main">
        <section className="page-section">
          <div className="page-section__child project-about project-about--loading">
            <div className="project-about__image">
              <RectangleLoader
                className="project-about__image-loader"
                height="100%"
                borderRadius="0.65rem"
              />
            </div>

            <div className="project-about__content">
              <div className="project-about__heading">
                <RectangleLoader width="7rem" height="0.85rem" />
                <RectangleLoader width="65%" height="2.5rem" />
              </div>

              <div className="project-about__description">
                <RectangleLoader height="0.95rem" />
                <RectangleLoader height="0.95rem" />
                <RectangleLoader height="0.95rem" />
                <RectangleLoader width="82%" height="0.95rem" />
              </div>

              <div className="project-technologies">
                <div className="project-technologies__heading">
                  <RectangleLoader width="8rem" height="1rem" />
                  <RectangleLoader width="4rem" height="0.75rem" />
                </div>

                <div className="project-technologies__list">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <RectangleLoader
                      key={index}
                      width="5.5rem"
                      height="2.25rem"
                      borderRadius="0.55rem"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="page-section__child project-detail project-detail--loading">
            <div className="project-detail__content">
              <RectangleLoader width="7rem" height="0.85rem" />
              <RectangleLoader width="65%" height="2.5rem" />

              <div className="project-detail__description">
                <RectangleLoader height="0.95rem" />
                <RectangleLoader height="0.95rem" />
                <RectangleLoader height="0.95rem" />
                <RectangleLoader width="82%" height="0.95rem" />
              </div>
            </div>

            <div className="project-detail__image">
              <RectangleLoader
                className="project-detail__image-loader"
                height="100%"
                borderRadius="0.65rem"
              />
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="page-section__child project-gallery project-gallery--loading">
            <div className="project-gallery__heading">
              <div>
                <RectangleLoader width="9rem" height="0.85rem" />
                <RectangleLoader width="13rem" height="2.25rem" />
              </div>

              <RectangleLoader width="4rem" height="0.85rem" />
            </div>

            <div className="project-gallery__viewport">
              <RectangleLoader
                className="project-gallery__viewport-loader"
                height="100%"
                borderRadius="0.85rem"
              />
            </div>

            <div className="project-gallery__controls">
              <RectangleLoader width="12rem" height="0.85rem" />

              <div className="project-gallery__navigation">
                <RectangleLoader
                  width="2.75rem"
                  height="2.75rem"
                  borderRadius="0.65rem"
                />
                <RectangleLoader
                  width="2.75rem"
                  height="2.75rem"
                  borderRadius="0.65rem"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectLoader;
