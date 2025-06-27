import React from "react"
import HomeHeader from "../../components/home/homeHeader"
import '../../assets/styles/home/home.css'
import NavBar from "../../components/universal/navBar"
const HomePage: React.FC = () => {
    return(
        <>
            <NavBar />
            <HomeHeader />
        </>
    )
}

export default HomePage