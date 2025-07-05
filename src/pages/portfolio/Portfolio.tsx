import React from "react"
import NavBar from "../../components/universal/navBar"
import '../../assets/styles/portfolio/portfolio.css'
import PortfolioHeader from "../../components/portfolio/portfolioHeader"
import PortfolioDetails from "../../components/portfolio/portfolioDetails"
const Portfolio: React.FC = () => {
    return(
        <>
            <NavBar />
            <PortfolioHeader />
            <main className="page-section">
                <PortfolioDetails />
            </main>
        </>
    )
}

export default Portfolio