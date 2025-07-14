import React, { useRef } from "react"
import logo from '../../assets/images/logo.webp'
import { Link, useLocation } from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const NavBar: React.FC = () => {
    const location = useLocation()
    const sideBar = useRef<HTMLElement>(null)

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
                            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="sidebar-nav__footer">
                        <p>LET'S CREATE TOGETHER</p>
                        <h1>contact@hallowedvisions.com</h1>
                        <ul>
                            <li>
                                <button>
                                    <FaInstagram />
                                </button>
                            </li>
                            <li>
                                <button>
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
                        <button className="nav-side-toggle" onClick={() => toggleSideNav()}>
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