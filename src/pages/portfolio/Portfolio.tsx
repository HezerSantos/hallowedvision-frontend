import React from "react"
import NavBar from "../../components/universal/navBar"
import '../../assets/styles/portfolio/portfolio.css'
import PortfolioHeader from "../../components/portfolio/portfolioHeader"
import PortfolioDetails from "../../components/portfolio/portfolioDetails"
import PortfolioContent from "../../components/portfolio/portfolioContent"
import FooterHV from "../../components/universal/footer"
const Portfolio: React.FC = () => {
    return(
        <>
            <NavBar />
            <PortfolioHeader />
            <main className="page-section">
                <PortfolioDetails />
                <PortfolioContent />
            </main>
            <footer className="page-section portfolio__footer">
                <FooterHV />
            </footer>
        </>
    )
}

export default Portfolio