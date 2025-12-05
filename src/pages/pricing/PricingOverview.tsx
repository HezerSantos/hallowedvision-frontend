import NavBar from "../../components/universal/navBar"
import PricingHeader from "./components/pricingHeader"

import '../../assets/styles/pricingOverview/pricingOverview.css'
import PriceTable from "./components/priceTable"
import FooterHV from "../../components/universal/footer"
const PricingOverview: React.FC = () => {
    return(
        <>
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