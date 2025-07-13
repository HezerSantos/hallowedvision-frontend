import React, { useContext, useEffect } from "react"
import HomeHeader from "../../components/home/homeHeader"
import '../../assets/styles/home/home.css'
import NavBar from "../../components/universal/navBar"
import HomeSectionOne from "../../components/home/homeSectionOne"
import HomeSectionTwo from "../../components/home/homeSectionTwo"
import FooterHV from "../../components/universal/footer"
// import axios from "axios"
// import api from "../../app.config"
// import CsrfContext from "../../context/csrf/csrfContext"
const HomePage: React.FC = () => {
    // const csrfContext = useContext(CsrfContext)
    // useEffect(() => {
    //     const fetchData = async() => {
    //         try{
    //             const res = await axios.get(`${api.url}/api/home`, {
    //                 headers: {
    //                     'csrfToken': csrfContext?.csrfToken
    //                 }
    //             })

    //             console.log(res)
    //         } catch(error){
    //             console.error(error)
    //         }
    //     }

    //     fetchData()
    // }, [])
    return(
        <>
            <NavBar />
            <HomeHeader />
            <main className="home__main page-section">
                <HomeSectionOne />
                <HomeSectionTwo />
            </main>
            <footer className="page-section home__footer">
                <div className="home__footer-contact page-section__child">
                    <div className="home__footer-contact-header">
                        <h1>Looking forward to a potential partnership?</h1>
                        <p>Whether you're starting from scratch or scaling up, we’re ready to help bring your vision to life.</p>
                    </div>
                    <div className="home__footer-contact-content">
                        <form>
                            <div>
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" name="firstName" id="first-name"/>
                            </div>
                            <div>
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" name="lastName" id="last-name"/>
                            </div>
                            <div>
                                <label htmlFor="phone-number">Phone</label>
                                <input type="text" name="phoneNumber" id="phone-number"/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" id="email"/>
                            </div>
                            <div>
                                <label htmlFor="company">Company</label>
                                <input type="text" name="company" id="company"/>
                            </div>
                            <div>
                                <label htmlFor="website-type">Website Type</label>
                                <input type="text" name="websiteType" id="website-type"/>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message"/>
                            </div>
                            <div>
                                <button>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
                <FooterHV/>
            </footer>
        </>
    )
}

export default HomePage