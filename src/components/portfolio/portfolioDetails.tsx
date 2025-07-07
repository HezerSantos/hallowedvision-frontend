import React from "react";
import PortfolioSectionHeader from "./portfolioSectionHeader"
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
interface workElement {
    icon: React.ReactElement,
    header: string
}

const PdcWorkElement: React.FC<workElement> = ({icon, header}) => {
    return(
        <>
            <div className="pdc-work__element">
                {icon}
                <h1>{header}</h1>
            </div>
        </>
    )
}

const PortfolioDetails: React.FC = () => {
    return(
        <>
            <section className="page-section__child portfolio-details">
                <div>
                    <PortfolioSectionHeader header="Education"/>
                    <div className="portfolio-details__content pdc-education">
                        <p>2022 - Present</p>
                        <h2>Bachelors in Computer Science</h2>
                        <p>University of Memphis</p>
                        <p>
                            Currently pursuing a degree in Computer Science, focusing on software development, algorithms, and system design, with a strong passion for solving real-world problems through technology
                        </p>
                    </div>
                </div>
                <div>
                    <PortfolioSectionHeader header="What I Do"/>
                    <div className="portfolio-details__content pdc-work">
                        <PdcWorkElement 
                            icon={<FaCode />}
                            header="Web Development"
                        />
                        <PdcWorkElement 
                            icon={<FaDatabase />}
                            header="Database Design"
                        />
                        <PdcWorkElement 
                            icon={<FaLock />}
                            header="Security"
                        />
                        <PdcWorkElement 
                            icon={<FaClipboard />}
                            header="CMS"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioDetails