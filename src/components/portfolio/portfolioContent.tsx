import React from "react"
import PortfolioSectionHeader from "./portfolioSectionHeader"
import { Link } from "react-router-dom"
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { DiMysql } from "react-icons/di";


interface PortfolioItemProps {
    imageUrl: string,
    title: string,
    type: string,
    demoUrl: string,
    technologies: string[],
    description: string
}

const technologyMap: Map<string, React.ReactElement> = new Map()


technologyMap.set("HTML", <FaHtml5 />)
technologyMap.set("CSS", <FaCss3Alt />)
technologyMap.set("JavaScript", <FaJs />)
technologyMap.set("ReactJS", <FaReact />)
technologyMap.set("Express.js", <SiExpress />)
technologyMap.set("Node.js", <FaNode />)
technologyMap.set("Python", <FaPython />)
technologyMap.set("SQL", <DiMysql />)


interface TechnologyItemProps {
    techName: string,
    icon: React.ReactElement | undefined
}
const TechnologyItem: React.FC<TechnologyItemProps> = ({techName, icon}) => {
    return(
        <>
            <div className="technology-item">
                {icon}
                <p>{techName}</p>
            </div>
        </>
    )
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({imageUrl, title, type, demoUrl, technologies, description}) => {
    return(
        <>
            <div className="portfolio-item">
                <div>
                    <img src={imageUrl} alt={title} />
                </div>
                <div className="portfolio-item__description">
                    <div className="portfolio-item__description-header">
                        <h1>{title} | {type} Application</h1>
                        <Link to={demoUrl}>Live Demo</Link>
                    </div>
                    <div className="portfolio-item__description-technology">
                        <h2>Technologies</h2>
                        <div>
                            {technologies.map((technology, index) => {
                                const element: React.ReactElement | undefined = technologyMap.get(technology)
                                return(
                                    <TechnologyItem 
                                        key={index}
                                        icon={element}
                                        techName={technology}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="portfolio-item__description-description">
                        <h2>Description</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const LoadingPortfolioItem: React.FC = () => {
    return(
        <>
        <div className="portfolio-item">
                <div>
                    <div className="image-skeleton loading-skeleton">
                    </div>
                </div>
                <div className="portfolio-item__description skleton-gap-override">
                    <div className="portfolio-item__description-header">
                        <div className="heading-skeleton loading-skeleton"></div>
                        <div className="link-skeleton loading-skeleton"></div>
                    </div>
                    <div className="portfolio-item__description-technology">
                        <h2 className="heading-skeleton loading-skeleton"></h2>
                        <div>
                            <div className="technology-skeleton">
                                <div className="ts-svg loading-skeleton">

                                </div>
                                <div className="ts-text loading-skeleton">

                                </div>
                            </div>
                            <div className="technology-skeleton">
                                <div className="ts-svg loading-skeleton">

                                </div>
                                <div className="ts-text loading-skeleton">

                                </div>
                            </div>
                            <div className="technology-skeleton">
                                <div className="ts-svg loading-skeleton">

                                </div>
                                <div className="ts-text loading-skeleton">

                                </div>
                            </div>
                            <div className="technology-skeleton">
                                <div className="ts-svg loading-skeleton">

                                </div>
                                <div className="ts-text loading-skeleton">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item__description-description">
                        <div className="heading-skeleton loading-skeleton"></div>
                        <div className="text-skeleton loading-skeleton"></div>
                        <div className="text-skeleton loading-skeleton"></div>
                    </div>
                </div>
            </div>
        </>
    )
}


interface PortfolioProjectsDataType {
    id: number,
    name: string,
    description: string,
    demoUrl: string,
    type: string,
    imageUrl: string,
    languages: string[]
}

interface PortfolioContentProps {
    portfolioItems: PortfolioProjectsDataType[] | null
    isLoading: boolean
}

const PortfolioContent: React.FC<PortfolioContentProps> = ({portfolioItems, isLoading}) => {
    return (
        <>
            <section className="page-section__child portfolio-content">
                <PortfolioSectionHeader header="From Idea to Execution"/>
                <div className="portfolio-content__container">
                    {!isLoading? (
                        <>
                            {portfolioItems?.map(item => {
                                return(
                                    <PortfolioItem 
                                        key={`P${item.id}`}
                                        imageUrl={item.imageUrl}
                                        title={item.name}
                                        type={item.type}
                                        demoUrl={item.demoUrl}
                                        technologies={item.languages}
                                        description={item.description}
                                    />
                                )
                            })}
                        </>
                    ) : (
                       <>
                        <LoadingPortfolioItem />
                        <LoadingPortfolioItem />
                        <LoadingPortfolioItem />
                        <LoadingPortfolioItem />
                       </>
                    )}
                </div>
            </section>
        </>
    )
}

export default PortfolioContent