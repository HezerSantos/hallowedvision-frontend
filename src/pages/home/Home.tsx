import React, { useContext, useEffect, useState } from "react"
import HomeHeader from "../../components/home/homeHeader"
import '../../assets/styles/home/home.css'
import NavBar from "../../components/universal/navBar"
import HomeSectionOne from "../../components/home/homeSectionOne"
import HomeSectionTwo from "../../components/home/homeSectionTwo"
import FooterHV from "../../components/universal/footer"
import axios from "axios"
import api from "../../app.config"
import CsrfContext from "../../context/csrf/csrfContext"
import { AxiosError } from "axios"
import { AiOutlineLoading } from "react-icons/ai";


interface EmailFormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  phoneNumber: HTMLInputElement;
  email: HTMLInputElement;
  company: HTMLInputElement;
  websiteType: HTMLInputElement;
  message: HTMLTextAreaElement;

}

interface EmailForm extends HTMLFormElement {
  elements: EmailFormElements;
}

interface CsrfContextType {
    csrfToken: string | null
    decodeCookie: (cookie: string) => void
    getCsrf: () => Promise<string | undefined>
}

type HandleEmailType = (
    e: React.FormEvent<HTMLFormElement>, 
    csrfContext: CsrfContextType | null, 
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => Promise<void>

const handleEmail: HandleEmailType = async(e, csrfContext, setIsLoading) => {
    e.preventDefault()
    const form = e.target as EmailForm

    const {firstName, lastName, phoneNumber, email, company, websiteType, message } = form.elements

    const axiosBody = {
        firstName: firstName.value,
        lastName: lastName.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        company: company.value,
        websiteType: websiteType.value,
        message: message.value
    }
    try{
        setIsLoading(true)
        const res = await axios.post(`${api.url}/api/email`, 
            axiosBody
        , {
            headers: {
                csrftoken: csrfContext?.csrfToken
            }
        })  
        Array.from(form.elements).forEach((element) => {
            if(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement){
                element.value = ""
            }
        })
    } catch(error) {
        console.error(error)
    } finally {
        setIsLoading(false)
    }
}
const HomePage: React.FC = () => {
    const csrfContext = useContext(CsrfContext)
    const [ modelUrl, setModelUrl ] = useState<string>("")
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    useEffect(() => {
        const fetchData = async(retry: boolean, newCsrf: null | string = null) => {
            try{
                const res = await axios.get(`${api.url}/api/home`, {
                    headers: {
                        csrftoken: newCsrf? newCsrf : csrfContext?.csrfToken
                    }
                })

                const modelUrl = res.data.url
                setModelUrl(modelUrl)
            } catch(error){
                console.error(error)
                const axiosError = error as AxiosError
                if(axiosError.status === 403 && retry){
                    const newCsrf = await csrfContext?.getCsrf()
                    await fetchData(false, newCsrf)
                } else if(axiosError.status === 401 && retry){
                    await axios.get(`${api.url}/api/auth`)
                    await fetchData(true)
                }
            }
        }

        fetchData(true)
    }, [])


    return(
        <>
            <NavBar />
            <HomeHeader modelUrl={modelUrl}/>
            <main className="home__main page-section">
                <HomeSectionOne />
                <HomeSectionTwo />
            </main>
            <footer className="page-section home__footer">
                <div className="home__footer-contact page-section__child">
                    <div className="home__footer-contact-header">
                        <h1>Looking forward to a potential partnership?</h1>
                        <p>Whether you're starting from scratch or scaling up, we’re ready to help bring your vision to life.</p>
                    </div>
                    <div className="home__footer-contact-content">
                        <form onSubmit={(e) => handleEmail(e, csrfContext, setIsLoading)}>
                            <div>
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" name="firstName" id="first-name" disabled={isLoading}/>
                            </div>
                            <div>
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" name="lastName" id="last-name" disabled={isLoading}/>
                            </div>
                            <div>
                                <label htmlFor="phone-number">Phone</label>
                                <input type="text" name="phoneNumber" id="phone-number" disabled={isLoading}/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email" disabled={isLoading}/>
                            </div>
                            <div>
                                <label htmlFor="company">Company</label>
                                <input type="text" name="company" id="company" disabled={isLoading}/>
                            </div>
                            <div>
                                <label htmlFor="website-type">Website Type</label>
                                <input type="text" name="websiteType" id="website-type" disabled={isLoading}/>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" disabled={isLoading}/>
                            </div>
                            <div>
                                <button disabled={isLoading}>
                                    {isLoading? (
                                        <AiOutlineLoading />
                                    ) : (
                                        <>
                                            SUBMIT
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <FooterHV/>
            </footer>
        </>
    )
}

export default HomePage