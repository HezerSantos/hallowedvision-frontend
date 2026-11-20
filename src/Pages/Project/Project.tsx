import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { useGetProjectByIdQuery } from "../../services/portfolioService";

import "./Project.scss";
import ProjectHeader from "../../components/Project/ProjectHeader/ProjectHeader";
import ProjectAbout from "../../components/Project/ProjectAbout/ProjectAbout";
import ProjectDetail from "../../components/Project/ProjectDetail/ProjectDetail";
import ProjectGallery from "../../components/Project/ProjectGallery/ProjectGallery";
import ProjectLoader from "../../components/Project/ProjectLoader/ProjectLoader";

const Project = () => {
  const { id } = useParams();

  const { data: projectData, isLoading } = useGetProjectByIdQuery({
    id: id ?? "",
  });

  return (
    <>
      <Helmet>
        <title>
          {projectData
            ? `Project: ${projectData.name} | HallowedVisions`
            : "Project | HallowedVisions"}
        </title>

        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content={
            projectData
              ? `Explore details about ${projectData.name}, including technologies used, project goals, and visual showcases. A Hallowed Visions development project.`
              : "Explore this Hallowed Visions project."
          }
        />

        <meta
          name="keywords"
          content={
            projectData
              ? `${projectData.name}, web development project, full-stack project, React project, portfolio project, Hallowed Visions`
              : "web development project, Hallowed Visions portfolio"
          }
        />

        <link
          rel="canonical"
          href={
            projectData
              ? `https://www.hallowedvisions.com/portfolio/${id}`
              : "https://www.hallowedvisions.com/portfolio"
          }
        />
      </Helmet>

      {isLoading ? (
        <ProjectLoader />
      ) : projectData ? (
        <div className="project-page">
          <ProjectHeader
            projectName={projectData.name}
            demoLink={projectData.demoUrl}
            githubLink={projectData.githubUrl}
            year={projectData.year}
            month={projectData.month}
          />

          <main className="project-page__main">
            <ProjectAbout
              imageUrl={projectData.imageOne}
              description={projectData.aboutDescription}
              technologies={projectData.technologies}
            />

            <ProjectDetail
              imageUrl={projectData.imageTwo}
              description={projectData.extendedDescription}
            />

            <ProjectGallery galleryImages={projectData.gallery} />
          </main>
        </div>
      ) : (
        <div className="project-not-found">
          <span className="project-not-found__eyebrow">404</span>
          <h1>Project Not Found</h1>
          <p>This project may have been moved or is no longer available.</p>
        </div>
      )}
    </>
  );
};

export default Project;
