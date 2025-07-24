import NavBar from "../../components/universal/navBar"
import '../../assets/styles/terms/terms.css'
import TermsNav from "../../components/terms/termsNav"
import TermsHeader from "../../components/terms/termsHeader"
import TermsContent from "../../components/terms/termsContent"
import FooterHV from "../../components/universal/footer"
import { Helmet } from "react-helmet-async"


const Terms: React.FC = () => {
    return(
        <>
            <Helmet>
            <title>Terms and Service | Hallowed Visions</title>
            <meta
                name="description"
                content="Read the official Terms and Conditions for using Hallowed Visions services. Learn about our technology stack, payments, responsibilities, and legal policies."
            />
            <link rel="canonical" href="https://www.hallowedvisions.com/terms-and-conditions" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Hallowed Visions",
                    "url": "https://www.hallowedvisions.com",
                    "logo": "https://www.hallowedvisions.com/src/assets/images/logo.webp",
                    "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "contact@hallowedvisions.com",
                    "contactType": "customer support",
                    },
                }),
                }}
            />
            </Helmet>
            <NavBar />
            <div className="page-section term__wrapper-parent">
                <div className="terms__wrapper page-section__child">
                    <div className="terms__nav-wrapper">
                        <TermsNav />
                    </div>
                    <div className="terms__content">
                        <TermsHeader />
                        <TermsContent />
                    </div>
                </div>
            </div>
            <footer className="terms__footer page-section">
                <FooterHV />
            </footer>
        </>
    )
}

export default Terms