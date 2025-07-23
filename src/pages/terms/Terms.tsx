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
                <title>Termas and Service | HallowedVisions</title>
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