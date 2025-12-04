import React, { useRef } from "react"
import logo from '../../assets/images/logo.webp'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaLinkedin } from "react-icons/fa";

const NavBar: React.FC = () => {
    const location = useLocation()
    const sideBar = useRef<HTMLElement>(null)
    const navigate = useNavigate()
    const toggleSideNav = ():void => {
        if(sideBar.current?.classList.contains("toggle")){
            sideBar.current?.classList.remove("toggle")
        } else {
            sideBar.current?.classList.add("toggle")
        }
    }
    return(
        <>
            <aside className="sidebar-nav toggle" ref={sideBar}>
                <nav>
                    <div className="sidebar-nav__header">
                        <div>
                            <img src={logo} alt="logo"/>
                            <h1>Hallowed Visions</h1>
                        </div>
                        <button onClick={() => toggleSideNav()}>
                            CLOSE
                        </button>
                    </div>
                    <div className="sidebar-nav__content">
                        <ul>
                            <li><Link to="/" className={location.pathname === "/"? "selected" : ""}>Home</Link></li>
                            <li><Link to="/portfolio" className={location.pathname === "/portfolio"? "selected" : ""}>Portfolio</Link></li>
                            <li><Link to="/contact" className={location.pathname === "/contact" ? "selected" : ""}>Contact</Link></li>
                            <li><Link to="/terms-and-conditions" className={location.pathname === "/terms-and-conditions" ? "selected" : ""}>Terms & Conditions</Link></li>
                            <li><Link to="/packages" className={location.pathname === "/packages" ? "selected" : ""}>Packages</Link></li>
                        </ul>
                    </div>
                    <div className="sidebar-nav__footer">
                        <p>LET'S CREATE TOGETHER</p>
                        <h1>contact@hallowedvisions.com</h1>
                        <ul>
                            <li>
                                <button aria-label="LinkedIn Profile" onClick={() => navigate("https://www.linkedin.com/in/hezer-santos")}>
                                    <FaLinkedin />
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
            <nav className="page-section nav-main-wrapper">
                <div className="nav-main page-section__child">
                    <div className="nav-main__header">
                        <img src={logo} alt="" />
                        <Link to="/">Hallowed Visions</Link>
                        <button className="nav-side-toggle" aria-label="Toggle navigation menu" onClick={() => toggleSideNav()}>
                            <div></div>
                            <div></div>
                        </button>
                    </div>
                    <div className="nav-main__buttons">
                        <ul>
                            <li>
                                <Link to="/portfolio">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Get in Touch
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default NavBar