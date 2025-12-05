import React from "react"
import logo from '../../assets/images/logo.webp'
import { Link } from "react-router-dom"
const FooterHV: React.FC = () => {
    return(
        <>
            <div className="page-section__child footer-content">
                <div className="footer-column__header">
                    <img src={logo} alt="logo" className="logo"/>
                    <p>Hallowed Visions</p>
                    <a
                    href="https://mail.google.com/mail/?view=cm&to=contact@hallowedvisions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        contact@hallowedvisions.com
                    </a>
                    <p>© 2025 Hallowed Visions. All rights reserved.</p>
                </div>
                <div>
                    <p>Quick Links</p>
                    <Link to={"/portfolio"}>Portfolio</Link>
                    <Link to={"/terms-and-conditions#abouthallowedvisions"}>About Us</Link>
                    <Link to="/terms-and-conditions">Pricing</Link>
                    <Link to="/packages">Packages</Link>
                </div>
                <div>
                    <p>Socials</p>
                    <a href={"https://linkedin.com/in/hezer-santos"} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div>
                    <p>Additional Info</p>
                    <Link to={"/terms-and-conditions"}>Terms</Link>
                    {/* <Link to={""}>Privacy Policy</Link> */}
                </div>
            </div>
        </>
    )
}

export default FooterHV