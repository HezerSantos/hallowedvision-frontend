import "./ProjectDetail.scss";
interface ProjectDetailProps {
  imageUrl: string | undefined;
  description: string | null | undefined;
}

const ProjectDetail = ({ imageUrl, description }: ProjectDetailProps) => {
  return (
    <section className="page-section">
      <div className="page-section__child project-detail">
        <div className="project-detail__content">
          <span className="project-detail__eyebrow">02 / Behind the Build</span>
          <h2>Project Details</h2>
          <p>{description}</p>
        </div>

        <div className="project-detail__image">
          {imageUrl && <img src={imageUrl} alt="Project detail" />}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
