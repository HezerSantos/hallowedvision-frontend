import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectHeader.scss";
interface ProjectHeaderProps {
  projectName: string | undefined;
  demoLink: string | undefined;
  githubLink: string | undefined;
  month: string | null | undefined;
  year: string | null | undefined;
}

const ProjectHeader = ({
  projectName,
  demoLink,
  githubLink,
  month,
  year,
}: ProjectHeaderProps) => {
  return (
    <header className="page-section">
      <div className="page-section__child project-header">
        <div className="project-header__title">
          <span className="project-header__eyebrow">Featured Project</span>
          <h1>{projectName}</h1>
        </div>

        <div className="project-header__meta">
          <div className="project-header__links">
            {demoLink && (
              <a
                className="project-header__link"
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
            )}

            {githubLink && (
              <a
                className="project-header__link"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            )}
          </div>

          {(month || year) && (
            <span className="project-header__date">
              {month} {year}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default ProjectHeader;
