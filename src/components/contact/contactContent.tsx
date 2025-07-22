import React, { useContext, useState } from "react"
import { FaPeopleGroup } from "react-icons/fa6";
import { RiMicroscopeFill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import CsrfContext from "../../context/csrf/csrfContext";
import axios from "axios";
import { AxiosError } from "axios"
import api from "../../app.config";
import { AiOutlineLoading } from "react-icons/ai";
interface InformationItemProps {
    icon: React.ReactElement,
    text: string
}
const InformationItem: React.FC<InformationItemProps> = ({icon, text}) => {
    return(
        <>
            <div className="information-item">
                {icon}
                <p>{text}</p>
            </div>
        </>
    )
}

interface FormInputElementProps {
    text: string,
    name: string,
    emailErrors: Map<string, string> | null,
    isLoading: boolean
}

const FormInputElement: React.FC<FormInputElementProps> = ({text, name, emailErrors, isLoading}) => {
    return(
        <>
            <div className="contact__form-input-element">
                <label htmlFor={name}>{text}</label>
                <div className="contact__form-input-wrapper">
                    <input className={emailErrors?.has(name)? "input-error" : ""} type="text" id={name} disabled={isLoading}/>
                </div>
                { emailErrors?.has(name)? (
                    <p>{emailErrors.get(name)}*</p>
                    ) : (
                        <></>
                    )
                }
            </div>
        </>
    )
}

interface CsrfContextType {
    csrfToken: string | null
    decodeCookie: (cookie: string) => void
    getCsrf: () => Promise<string | undefined>
}

type HandleEmailSubmitType = (
    params: {
        e: React.FormEvent<HTMLFormElement>,
        setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
        setIsLimit: React.Dispatch<React.SetStateAction<boolean>>,
        setEmailMessage: React.Dispatch<React.SetStateAction<string>>,
        setEmailErrors: React.Dispatch<React.SetStateAction<Map<string, string> | null>>,
        csrfContext: CsrfContextType | null,
        newCsrf: null | string | undefined,
        retry: boolean,
    }
) => void

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


const handleEmailSubmit:HandleEmailSubmitType = async(params) => {
    params.e.preventDefault()
    const form = params.e.target as EmailForm
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
        params.setIsLoading(true)
        const res = await axios.post(`${api.url}/api/email`, 
            axiosBody,
            {
                headers: {
                    csrftoken: params.newCsrf? params.newCsrf : params.csrfContext?.csrfToken
                }
            }
        )
        params.setEmailErrors(null)
        Array.from(form.elements).forEach((element) => {
            if(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement){
                element.value = ""
            }
        })
        const responseMessage = res.data[0].msg
        params.setEmailMessage(responseMessage)
        params.setIsLimit(true)
    } catch(error) {
        console.error(error)
        const axiosError = error as AxiosError
        if(axiosError.status === 403 && params.retry){
            const newCsrf = await params.csrfContext?.getCsrf()
            await handleEmailSubmit(
                {
                    e: params.e, 
                    setIsLoading: params.setIsLoading, 
                    setIsLimit: params.setIsLimit, 
                    setEmailMessage: params.setEmailMessage, 
                    setEmailErrors: params.setEmailErrors, 
                    csrfContext: params.csrfContext, 
                    newCsrf: newCsrf, 
                    retry: false
            })
        } else if(axiosError.status === 401 && params.retry){
            await axios.get(`${api.url}/api/auth`)
            await handleEmailSubmit(
                {
                    e: params.e, 
                    setIsLoading: params.setIsLoading, 
                    setIsLimit: params.setIsLimit, 
                    setEmailMessage: params.setEmailMessage, 
                    setEmailErrors: params.setEmailErrors, 
                    csrfContext: params.csrfContext, 
                    newCsrf: null, 
                    retry: true
            })
        } else if (axiosError.status === 400){
            const axiosData = axiosError.response?.data as DataErrors
            const errors = axiosData.errors.map(({msg, path}) => {
                return [path, msg] as [string, string]
            })
            params.setEmailErrors(new Map(errors))
        } else if (axiosError.status === 429){
            const axiosData = axiosError.response?.data as EmailErrorType
            const error = axiosData.errors[0].msg
            params.setEmailMessage(error)
            params.setIsLimit(true)
        }
    } finally {
        params.setIsLoading(false)
    }
}

interface ContactContentProps {
    setIsLimit: React.Dispatch<React.SetStateAction<boolean>>,
    setEmailMessage: React.Dispatch<React.SetStateAction<string>>
}

const ContactContent: React.FC<ContactContentProps> = ({setIsLimit, setEmailMessage}) => {
    const [ emailErrors, setEmailErrors ] = useState<Map<string, string> | null>(null)
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const csrfContext = useContext(CsrfContext)
    return(
        <>
            <div className="contact-content__content">
                <div className="contact-content__content-element">
                    <h1>Pricing Depends On</h1>
                    <InformationItem 
                        icon={<FaPeopleGroup />}
                        text="Team size or usage volume"
                    />
                    <InformationItem 
                        icon={<RiMicroscopeFill />}
                        text="Required integrations"
                    />
                    <InformationItem 
                        icon={<FaHandsHelping />}
                        text="Support and onboarding needs"
                    />
                    <InformationItem 
                        icon={<FaPuzzlePiece />}
                        text="Project complexity or add-ons"
                    />

                </div>
                <form 
                    className="contact-content__content-element"
                    onSubmit={
                        (e) => handleEmailSubmit(
                            {
                                e: e, 
                                setIsLoading: setIsLoading, 
                                setIsLimit: setIsLimit, 
                                setEmailMessage: setEmailMessage, 
                                setEmailErrors: setEmailErrors, 
                                csrfContext: csrfContext, 
                                newCsrf: null, 
                                retry: true

                        })}
                >
                    <FormInputElement 
                        name="firstName"
                        text="First Name"
                        emailErrors={emailErrors}
                        isLoading={isLoading}
                    />
                    <FormInputElement 
                        name="lastName"
                        text="Last Name"
                        emailErrors={emailErrors}
                        isLoading={isLoading}
                    />
                    <FormInputElement 
                        name="phoneNumber"
                        text="Phone"
                        emailErrors={emailErrors}
                        isLoading={isLoading}
                    />
                     <FormInputElement 
                        name="email"
                        text="Email"
                        emailErrors={emailErrors}
                        isLoading={isLoading}
                    />
                     <FormInputElement 
                        name="company"
                        text="Company"
                        emailErrors={emailErrors}
                        isLoading={isLoading}
                    />
                     <FormInputElement 
                        name="websiteType"
                        text="Website Type"
                        emailErrors={emailErrors}
                        isLoading={isLoading}
                    />
                    <div className="contact__form-textarea">
                        <label htmlFor="message">Message</label>
                        { emailErrors?.has("message")? (
                            <p>{emailErrors.get("message")}*</p>
                            ) : (
                                <></>
                            )
                        }
                        <div>
                            <textarea disabled={isLoading} className={emailErrors?.has("message")? "input-error" : ""} name="message" id="message"></textarea>

                        </div>
                    </div>
                    <button disabled={isLoading}>
                        {isLoading? (
                            <AiOutlineLoading />
                        ) : (
                            <>
                                SUBMIT
                            </>
                        )}
                    </button>
                </form>
            </div>
        </>
    )
}

export default ContactContent