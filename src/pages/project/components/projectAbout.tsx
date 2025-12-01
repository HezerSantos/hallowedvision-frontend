import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";
import { GrStripe } from "react-icons/gr";
import { SiSocketdotio } from "react-icons/si";
import { FaCloudflare } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";

const technologyMap: Map<string, React.ReactElement> = new Map()


technologyMap.set("HTML", <FaHtml5 />)
technologyMap.set("CSS", <FaCss3Alt />)
technologyMap.set("JavaScript", <FaJs />)
technologyMap.set("ReactJS", <FaReact />)
technologyMap.set("Express.js", <SiExpress />)
technologyMap.set("Node.js", <FaNode />)
technologyMap.set("Python", <FaPython />)
technologyMap.set("SQL", <DiMysql />)
technologyMap.set("Stripe", <GrStripe />)
technologyMap.set("WebSocket", <SiSocketdotio />)
technologyMap.set("Cloudflare R2", <FaCloudflare />)
technologyMap.set("TypeScript", <BiLogoTypescript />)

interface ProjectAboutProps {
    imageUrl: string | undefined,
    description: string | undefined,
    technologies: string[] | undefined
}

interface TechnologyItemProps {
    techName: string,
    icon: React.ReactElement | undefined
}
const TechnologyItem: React.FC<TechnologyItemProps> = ({techName, icon}) => {
    return(
        <>
            <div className="project-technology">
                {icon}
                <p>{techName}</p>
            </div>
        </>
    )
}

const ProjectAbout: React.FC<ProjectAboutProps> = ({imageUrl, description, technologies}) => {
    return(
        <>
            <section className="page-section">
                <div className="page-section__child project-about">
                    <div className="about-image">
                        <img src={imageUrl} alt="" />
                    </div>
                    <div className="about-description">
                        <p>About</p>
                        <p>{description}</p>
                        <div className="project-technologies">
                            <p>Technologies</p>
                            <div>
                                {technologies?.map((name, index) => {
                                    return(
                                        <TechnologyItem 
                                            techName={name}
                                            icon={technologyMap.get(name)}
                                            key={index}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectAbout