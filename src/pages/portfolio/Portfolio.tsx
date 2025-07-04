import React from "react"
import NavBar from "../../components/universal/navBar"
import '../../assets/styles/portfolio/portfolio.css'
import PortfolioHeader from "../../components/portfolio/portfolioHeader"
const Portfolio: React.FC = () => {
    return(
        <>
            <NavBar />
            <PortfolioHeader />
        </>
    )
}

export default Portfolio