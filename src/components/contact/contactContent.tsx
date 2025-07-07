import React from "react"
import { FaPeopleGroup } from "react-icons/fa6";
import { RiMicroscopeFill } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
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

}

const FormInputElement: React.FC<FormInputElementProps> = ({text, name}) => {
    return(
        <>
            <div className="contact__form-input-element">
                <label htmlFor={name}>{text}</label>
                <div className="contact__form-input-wrapper">
                    <input type="text" id={name}/>
                </div>
            </div>
        </>
    )
}

const ContactContent: React.FC = () => {
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
                <form className="contact-content__content-element">
                    <FormInputElement 
                        name="firstName"
                        text="First Name"
                    />
                    <FormInputElement 
                        name="lastName"
                        text="Last Name"
                    />
                    <FormInputElement 
                        name="phone"
                        text="Phone"
                    />
                     <FormInputElement 
                        name="email"
                        text="Email"
                    />
                     <FormInputElement 
                        name="company"
                        text="Company"
                    />
                     <FormInputElement 
                        name="websiteType"
                        text="Website Type"
                    />
                    <div className="contact__form-textarea">
                        <label htmlFor="message">Message</label>
                        <div>
                            <textarea name="message" id="message"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactContent