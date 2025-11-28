import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
interface ProjectHeaderProps {
    projectName: string,
    demoLink: string,
    githubLink: string,
    month: string,
    year: string
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({projectName, demoLink, githubLink, month, year}) => {
    return(
        <>
            <header className="page-section">
                <div className="page-section__child project-header">
                    <h1>
                        {projectName}
                    </h1>
                    <Link className="header-link" to={demoLink}>
                        <FaExternalLinkAlt />
                        <p>Live Demo</p>
                    </Link>
                    <Link className="header-link" to={githubLink}>
                        <FaGithub />
                        <p>Github</p>
                    </Link>
                    <p>{month} {year}</p>
                </div>
            </header>
        </>
    )
}

export default ProjectHeader