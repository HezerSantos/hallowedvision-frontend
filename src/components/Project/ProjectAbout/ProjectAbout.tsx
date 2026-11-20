import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaCloudflare,
} from "react-icons/fa6";
import { SiExpress, SiSocketdotio } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { GrStripe } from "react-icons/gr";
import { BiLogoTypescript } from "react-icons/bi";
import "./ProjectAbout.scss";
interface ProjectAboutProps {
  imageUrl: string | undefined;
  description: string | undefined;
  technologies: string[] | undefined;
}

interface TechnologyItemProps {
  techName: string;
  icon: React.ReactElement | undefined;
}

const technologyMap: Map<string, React.ReactElement> = new Map([
  ["HTML", <FaHtml5 />],
  ["CSS", <FaCss3Alt />],
  ["JavaScript", <FaJs />],
  ["ReactJS", <FaReact />],
  ["Express.js", <SiExpress />],
  ["Node.js", <FaNode />],
  ["Python", <FaPython />],
  ["SQL", <DiMysql />],
  ["Stripe", <GrStripe />],
  ["WebSocket", <SiSocketdotio />],
  ["Cloudflare R2", <FaCloudflare />],
  ["TypeScript", <BiLogoTypescript />],
]);

const TechnologyItem = ({ techName, icon }: TechnologyItemProps) => {
  return (
    <div className="project-technology">
      <span className="project-technology__icon">{icon}</span>
      <span className="project-technology__name">{techName}</span>
    </div>
  );
};

const ProjectAbout = ({
  imageUrl,
  description,
  technologies,
}: ProjectAboutProps) => {
  return (
    <section className="page-section">
      <div className="page-section__child project-about">
        <div className="project-about__image">
          {imageUrl && <img src={imageUrl} alt="Project overview" />}
        </div>

        <div className="project-about__content">
          <div className="project-about__heading">
            <span>01 / Overview</span>
            <h2>About the Project</h2>
          </div>

          <p className="project-about__description">{description}</p>

          <div className="project-technologies">
            <div className="project-technologies__heading">
              <h3>Built With</h3>
              <span>{technologies?.length ?? 0} Technologies</span>
            </div>

            <div className="project-technologies__list">
              {technologies?.map((name) => (
                <TechnologyItem
                  key={name}
                  techName={name}
                  icon={technologyMap.get(name)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAbout;
