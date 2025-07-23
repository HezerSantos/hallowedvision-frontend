import NavBar from "../../components/universal/navBar"
import '../../assets/styles/contact/contact.css'
import FooterHV from "../../components/universal/footer"
import ContactHeader from "../../components/contact/contactHeader"
import ContactContent from "../../components/contact/contactContent"
import { useState, useEffect } from "react"
import EmailMessage from "../../components/errors/emailMessage"
import { Helmet } from "react-helmet-async"
const Contact: React.FC = () => {
    const [ isLimit, setIsLimit ] = useState<boolean>(false)
    const [ emailMessage, setEmailMessage ] = useState<string>("")

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
            <Helmet>
                <title>Contact Us | HallowedVisions</title>
            </Helmet>
            {isLimit && (
                <EmailMessage 
                    message={emailMessage}
                />
            )}
            <NavBar />
            <main className="page-section">
                <section className="page-section__child contact-content">
                    <ContactHeader />
                    <ContactContent 
                        setIsLimit={setIsLimit}
                        setEmailMessage={setEmailMessage}
                    />
                </section>
            </main>
            <footer className="contact-footer">
                <FooterHV />
            </footer>
        </>
    )
}

export default Contact