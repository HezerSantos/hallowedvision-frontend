import NavBar from "../../components/universal/navBar"
import ProjectHeader from "./components/projectHeader"
import '../../assets/styles/project/project.css'
import ProjectAbout from "./components/projectAbout"

import imageUrl from '../../assets/testImages/projectHighlight.png'
import ProjectDetail from "./components/projectDetail"
const Project: React.FC = () => {
    return(
        <>
            <NavBar />
            <div className="project-page">
                <ProjectHeader 
                    projectName="SAHNTEK"
                    demoLink=""
                    githubLink=""
                    year="2025"
                    month="March"
                />
                <main>
                    <ProjectAbout 
                        imageUrl={imageUrl} 
                        description="Full-featured E-commerce application built to sell computers with speed, security, and reliability. Developed using React for a smooth, responsive user experience across all devices, the platform integrates Stripe for seamless and secure payments, and PostgreSQL for robust data management. It includes CSRF protection and industry-standard security practices to ensure safe transactions"
                        technologies={["HTML", "CSS", "JavaScript", "ReactJS", "Express.js", "Node.js", "SQL", "Stripe", "Cloudflare R2"]}
                    />
                    <ProjectDetail 
                        imageUrl={imageUrl}
                        description="Sahntek offers a seamless platform for browsing and purchasing high-performance, custom-built computers. The site features curated builds organized by performance tiers — Pro, Advanced, and Premium — making it easy for users to find the perfect machine for gaming, streaming, or productivity. A responsive, interactive interface powered by React.JS ensures smooth browsing and dynamic interactions, while Node.JS and Express.JS handle backend logic and APIs with speed and scalability. PostgreSQL reliably manages all product and user data, and Stripe integration enables secure, effortless payments. Every build showcases detailed specifications, pricing, and performance levels, delivering an engaging, trustworthy, and modern shopping experience from start to finish."
                    />
                </main>
            </div>

        </>
    )
}

export default Project