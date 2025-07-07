import React from "react"

interface portfolioSectionHeader {
    header: string
}
const PortfolioSectionHeader: React.FC<portfolioSectionHeader> = ({header}) => {
    return(
        <>  
            <div className="portfolio__section-header">
                <h1>{header}</h1>
            </div>
        </>
    )
}

export default PortfolioSectionHeader