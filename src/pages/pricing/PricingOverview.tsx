import NavBar from "../../components/universal/navBar"
import PricingHeader from "./components/pricingHeader"

import '../../assets/styles/pricingOverview/pricingOverview.css'
import PriceTable from "./components/priceTable"
import FooterHV from "../../components/universal/footer"
import { Helmet } from "react-helmet-async"
const PricingOverview: React.FC = () => {
    return(
        <>
            <Helmet>
                <title>Packages | HallowedVisions</title>
                <meta name="robots" content="index, follow" />
                <meta 
                    name="description" 
                    content="Explore flexible web development packages from Hallowed Visions. Choose from customizable plans for landing pages, multi-page sites, and full-stack web applications tailored to your needs." 
                />
                <meta 
                    name="keywords" 
                    content="web development packages, website pricing, custom web development, landing page package, multi-page website plan, full-stack development pricing, Hallowed Visions services" 
                />
                <link rel="canonical" href="https://www.hallowedvisions.com/packages" />
            </Helmet>
            <NavBar />
            <div className="pricing-overview">
                <PricingHeader />
                <main>
                    <PriceTable />
                </main>
                <footer className="page-section">
                    <FooterHV />
                </footer>
            </div>
        </>
    )
}

export default PricingOverview