import NavBar from "../../components/universal/navBar"
import '../../assets/styles/contact/contact.css'
import FooterHV from "../../components/universal/footer"

const Contact: React.FC = () => {
    return(
        <>
            <NavBar />
            <main className="page-section">
                <section className="page-section__child contact-content">
                    <div className="contact-content__header">
                        <h1>Pricing</h1>
                    </div>
                    <div className="contact-content__content">

                    </div>
                </section>
            </main>
            <footer className="contact-footer">
                <FooterHV />
            </footer>
        </>
    )
}

export default Contact