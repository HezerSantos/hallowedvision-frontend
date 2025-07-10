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
                    <p>© 2025 Hallowed Visions. All rights reserved.</p>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <Link to={"/portfolio"}>Portfolio</Link>
                    <a href={"/terms-and-conditions#abouthallowedvisions"}>About Us</a>
                    <Link to="/terms-and-conditions">Pricing</Link>
                </div>
                <div>
                    <h3>Socials</h3>
                    <Link to={""}>Instagram</Link>
                    <Link to={""}>YouTube</Link>
                    <Link to={""}>TikTok</Link>
                </div>
                <div>
                    <h3>Side Cache</h3>
                    <Link to={""}>Blog</Link>
                </div>
                <div>
                    <h3>Additional Info</h3>
                    <a href={"/terms-and-conditions"}>Terms</a>
                    <Link to={""}>Privacy Policy</Link>
                </div>
            </div>
        </>
    )
}

export default FooterHV