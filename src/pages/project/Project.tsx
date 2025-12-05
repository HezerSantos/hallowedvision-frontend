import NavBar from "../../components/universal/navBar"
import ProjectHeader from "./components/projectHeader"
import '../../assets/styles/project/project.css'
import ProjectAbout from "./components/projectAbout"
import ProjectDetail from "./components/projectDetail"
import ProjectGallery from "./components/projectGallery"
import FooterHV from "../../components/universal/footer"
import { useEffect, useContext, useState } from "react"
import api from "../../app.config"
import axios, { AxiosError } from "axios"
import CsrfContext from "../../context/csrf/csrfContext"
import { useNavigate, useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"


interface ProjectDataType {
    name: string,
    demoUrl: string,
    githubUrl: string,
    imageOne: string,
    imageTwo: string,
    aboutDescription: string,
    extendedDescription: string,
    technologies: string[],
    gallery: string[],
    month: string,
    year: string,
}
const Project: React.FC = () => {
    const [ projectData, setProjectData ] = useState<ProjectDataType | null>(null)
    const [ isLoading, setIsLoading ] = useState(true)
    const csrfContext = useContext(CsrfContext)
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async(retry: boolean, newCsrf: null | string = null) => {
            try{
                const res = await axios.get(`${api.url}/api/portfolio/${params.id}`, {
                    headers: {
                        csrftoken: newCsrf? newCsrf : csrfContext?.csrfToken,
                        ['Server-Id']: "HV002"
                    }
                })
                setProjectData(res.data)
                setIsLoading(false)
            } catch(error){
                const axiosError = error as AxiosError
                if(axiosError.status === 403 && retry){
                    const newCsrf = await csrfContext?.getCsrf()
                    await fetchData(false, newCsrf)
                } else if(axiosError.status === 401 && retry){
                    await axios.get(`${api.url}/api/auth`, {
                        headers: {
                            ['Server-Id']: "HV002"
                        }
                    })
                    await fetchData(true)
                } else if (axiosError.status === 404 ) {
                    navigate("/project-not-found")
                    return
                }
            }
        }

        fetchData(true)
    }, [])

    return(
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
                            ? `Explore details about ${projectData.name} — including technologies used, project goals, and visual showcases. A Hallowed Visions development project.`
                            : "Explore this Hallowed Visions project — full details coming soon."
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
                            ? `https://www.hallowedvisions.com/portfolio/${params.id}`
                            : "https://www.hallowedvisions.com/portfolio"
                    }
                />
            </Helmet>
            <NavBar />
            {!isLoading && (
                <div className="project-page">
                    <ProjectHeader 
                        projectName={projectData?.name}
                        demoLink={projectData?.demoUrl}
                        githubLink={projectData?.githubUrl}
                        year={projectData?.year}
                        month={projectData?.month}
                    />
                    <main>
                        <ProjectAbout 
                            imageUrl={projectData?.imageOne} 
                            description={projectData?.aboutDescription}
                            technologies={projectData?.technologies}
                        />
                        <ProjectDetail 
                            imageUrl={projectData?.imageTwo}
                            description={projectData?.extendedDescription}
                        />
                        <ProjectGallery galleryImages={projectData?.gallery}/>
                    </main>
                    <footer className="page-section">
                        <FooterHV />
                    </footer>
                </div>
            )}

        </>
    )
}

export default Project