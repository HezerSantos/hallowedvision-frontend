import React from "react"
import logo from '../../assets/images/logo.webp'
import { Link } from "react-router-dom"
const FooterHV: React.FC = () => {
    return(
        <>
            <div className="page-section__child footer-content">
                <div className="footer-column__header">
                    <img src={logo} alt="logo" className="logo"/>
                    <h3>Hallowed Visions</h3>
                    <p>contact@hallowedvisions.com</p>
                    <p>© 2025 Hallowed Visions. All rights reserved.</p>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <Link to={"/portfolio"}>Portfolio</Link>
                    <Link to={"/terms-and-conditions#abouthallowedvisions"}>About Us</Link>
                    <Link to="/terms-and-conditions">Pricing</Link>
                </div>
                <div>
                    <h3>Socials</h3>
                    <a href={"https://linkedin.com/in/hezer-santos"} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div>
                    <h3>Additional Info</h3>
                    <Link to={"/terms-and-conditions"}>Terms</Link>
                    {/* <Link to={""}>Privacy Policy</Link> */}
                </div>
            </div>
        </>
    )
}

export default FooterHV