import React, { useContext, useEffect, useState } from "react"
import NavBar from "../../components/universal/navBar"
import '../../assets/styles/portfolio/portfolio.css'
import PortfolioHeader from "../../components/portfolio/portfolioHeader"
import PortfolioDetails from "../../components/portfolio/portfolioDetails"
import PortfolioContent from "../../components/portfolio/portfolioContent"
import FooterHV from "../../components/universal/footer"
import axios from "axios"
import api from "../../app.config"
import CsrfContext from "../../context/csrf/csrfContext"
import { AxiosError } from "axios"

interface PortfolioProjectsDataType {
    id: number,
    name: string,
    description: string,
    demoUrl: string,
    type: string,
    imageUrl: string,
    languages: string[]
}

const Portfolio: React.FC = () => {
    const csrfContext = useContext(CsrfContext)
    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    const [ profileImage, setProfileImage ] = useState<string>("")
    const [ portfolioProjectsData, setPortfolioProjectsData ] = useState<PortfolioProjectsDataType[] | null>(null)
    useEffect(() => {
        const fetchData = async(retry: boolean, newCsrf: null | string = null) => {
            try{
                const res = await axios.get(`${api.url}/api/portfolio`, {
                    headers: {
                        csrftoken: newCsrf? newCsrf : csrfContext?.csrfToken
                    }
                })
                setProfileImage(res.data.profileImageUrl)
                setPortfolioProjectsData(res.data.portfolioProjects)
                setIsLoading(false)
            } catch(error){
                const axiosError = error as AxiosError
                if(axiosError.status === 403 && retry){
                    const newCsrf = await csrfContext?.getCsrf()
                    await fetchData(false, newCsrf)
                }
            }
        }

        fetchData(true)
    }, [])
    return(
        <>
            <NavBar />
            <PortfolioHeader isLoading={isLoading} profileImage={profileImage}/>
            <main className="page-section">
                <PortfolioDetails />
                <PortfolioContent portfolioItems={portfolioProjectsData} isLoading={isLoading}/>
            </main>
            <footer className="page-section portfolio__footer">
                <FooterHV />
            </footer>
        </>
    )
}

export default Portfolio