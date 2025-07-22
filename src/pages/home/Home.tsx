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
import EmailMessage from "../../components/errors/emailMessage"


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
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    retry: boolean,
    newCsrf: null | string | undefined,
    setErrors: React.Dispatch<React.SetStateAction<Map<string, string> | null>>,
    setEmailMessage: React.Dispatch<React.SetStateAction<string>>,
    setIsLimit:  React.Dispatch<React.SetStateAction<boolean>>
) => Promise<void>


interface DataErrors {
    errors: {
        type: string,
        value: string,
        msg: string,
        path: string,
        location: string
    }[]
}

interface EmailErrorType {
    errors:{
        msg: string
    }[]
}
const handleEmail: HandleEmailType = async(e, csrfContext, setIsLoading, retry, newCsrf, setErrors, setEmailMessage, setIsLimit) => {
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
                csrftoken: newCsrf? newCsrf : csrfContext?.csrfToken
            }
        })
        setErrors(null)  
        Array.from(form.elements).forEach((element) => {
            if(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement){
                element.value = ""
            }
        })
        
        const responseMessage = res.data[0].msg
        setEmailMessage(responseMessage)
        setIsLimit(true)
    } catch(error) {
        console.error(error)
        const axiosError = error as AxiosError
        if(axiosError.status === 403 && retry){
            const newCsrf = await csrfContext?.getCsrf()
            await handleEmail(e, csrfContext, setIsLoading, false, newCsrf, setErrors, setEmailMessage, setIsLimit)
        } else if(axiosError.status === 401 && retry){
            await axios.get(`${api.url}/api/auth`)
            await handleEmail(e, csrfContext, setIsLoading, true, null, setErrors, setEmailMessage, setIsLimit)
        } else if (axiosError.status === 400){
            const axiosData = axiosError.response?.data as DataErrors
            const errors = axiosData.errors.map(({msg, path}) => {
                return [path, msg] as [string, string]
            })
            setErrors(new Map(errors))
        } else if (axiosError.status === 429){
            const axiosData = axiosError.response?.data as EmailErrorType
            const error = axiosData.errors[0].msg
            setEmailMessage(error)
            setIsLimit(true)
        }
    } finally {
        setIsLoading(false)
    }
}

const HomePage: React.FC = () => {
    const csrfContext = useContext(CsrfContext)
    const [ modelUrl, setModelUrl ] = useState<string>("")
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ errors, setErrors ] = useState<Map<string, string> | null>(null)
    const [ isLimit, setIsLimit ] = useState(false)
    const [ emailMessage, setEmailMessage ] = useState("")
    useEffect(() => {
        const fetchData = async(retry: boolean, newCsrf: null | string | undefined = null) => {
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

    useEffect(() => {
        if(isLimit){
            const timeoutId = setTimeout(() => {
                setIsLimit(false)
            }, 8000)

            return () => clearTimeout(timeoutId)
        }
    }, [isLimit])


    return(
        <>
            {isLimit && (
                <EmailMessage 
                    message={emailMessage}
                />
            )}
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
                        <form onSubmit={(e) => handleEmail(e, csrfContext, setIsLoading, true, null, setErrors, setEmailMessage, setIsLimit)}>
                            <div>
                                <label htmlFor="first-name">First Name</label>
                                <input className={errors?.has("firstName")? "input-error" : ""} type="text" name="firstName" id="first-name" disabled={isLoading}/>
                                { errors?.has("firstName")? (
                                    <p>{errors.get("firstName")}</p>
                                ) : (
                                    <></>
                                )
                                }
                            </div>
                            <div>
                                <label htmlFor="last-name">Last Name</label>
                                <input className={errors?.has("lastName")? "input-error" : ""} type="text" name="lastName" id="last-name" disabled={isLoading}/>
                                { errors?.has("lastName")? (
                                    <p>{errors.get("lastName")}</p>
                                ) : (
                                    <></>
                                )
                                }
                            </div>
                            <div>
                                <label htmlFor="phone-number">Phone</label>
                                <input className={errors?.has("phoneNumber")? "input-error" : ""} type="text" name="phoneNumber" id="phone-number" disabled={isLoading}/>
                                 { errors?.has("phoneNumber")? (
                                    <p>{errors.get("phoneNumber")}</p>
                                ) : (
                                    <></>
                                )
                                }                           
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input className={errors?.has("email")? "input-error" : ""} type="text" name="email" id="email" disabled={isLoading}/>
                                 { errors?.has("email")? (
                                    <p>{errors.get("email")}</p>
                                ) : (
                                    <></>
                                )
                                }                           
                            </div>
                            <div>
                                <label htmlFor="company">Company</label>
                                <input className={errors?.has("company")? "input-error" : ""} type="text" name="company" id="company" disabled={isLoading}/>
                                { errors?.has("company")? (
                                    <p>{errors.get("company")}</p>
                                ) : (
                                    <></>
                                )
                                }                            
                            </div>
                            <div>
                                <label htmlFor="website-type">Website Type</label>
                                <input className={errors?.has("websiteType")? "input-error" : ""} type="text" name="websiteType" id="website-type" disabled={isLoading}/>
                                { errors?.has("websiteType")? (
                                    <p>{errors.get("websiteType")}</p>
                                ) : (
                                    <></>
                                )
                                }                            
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea className={errors?.has("message")? "input-error" : ""} name="message" id="message" disabled={isLoading}/>
                                { errors?.has("message")? (
                                    <p>{errors.get("message")}</p>
                                ) : (
                                    <></>
                                )
                                }                            
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