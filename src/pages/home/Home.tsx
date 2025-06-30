import React from "react"
import HomeHeader from "../../components/home/homeHeader"
import '../../assets/styles/home/home.css'
import NavBar from "../../components/universal/navBar"
import HomeSectionOne from "../../components/home/homeSectionOne"
import HomeSectionTwo from "../../components/home/homeSectionTwo"
const HomePage: React.FC = () => {
    return(
        <>
            <NavBar />
            <HomeHeader />
            <main className="home__main page-section">
                <HomeSectionOne />
                <HomeSectionTwo />
            </main>
        </>
    )
}

export default HomePage