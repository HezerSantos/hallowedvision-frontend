import NavBar from "../../components/universal/navBar"
import '../../assets/styles/contact/contact.css'
import FooterHV from "../../components/universal/footer"
import ContactHeader from "../../components/contact/contactHeader"
import ContactContent from "../../components/contact/contactContent"

const Contact: React.FC = () => {
    return(
        <>
            <NavBar />
            <main className="page-section">
                <section className="page-section__child contact-content">
                    <ContactHeader />
                    <ContactContent />
                </section>
            </main>
            <footer className="contact-footer">
                <FooterHV />
            </footer>
        </>
    )
}

export default Contact