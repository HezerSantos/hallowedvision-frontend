import NavBar from "../../components/universal/navBar"
import ProjectHeader from "./components/projectHeader"
import '../../assets/styles/project/project.css'
const Project: React.FC = () => {
    return(
        <>
            <NavBar />
            <ProjectHeader 
                projectName="SAHNTEK"
                demoLink=""
                githubLink=""
                year="2025"
                month="March"
            />
        </>
    )
}

export default Project