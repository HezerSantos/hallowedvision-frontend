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
import { useParams } from "react-router-dom"


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
                }
            }
        }

        fetchData(true)
    }, [])

    return(
        <>
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