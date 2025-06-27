import React from "react"
import logo from '../../assets/images/logo.png'
const NavBar: React.FC = () => {
    return(
        <>
            <nav className="page-section">
                <div className="nav-main page-section__child">
                    <div className="nav-main__header">
                        <img src={logo} alt="" />
                        <p>Hallowed Visions</p>
                        <button className="nav-side-toggle">
                            <div></div>
                            <div></div>
                        </button>
                    </div>
                    <div className="nav-main__buttons">
                        <ul>
                            <li>
                                <button>
                                    Portfolio
                                </button>
                            </li>
                            <li>
                                <button>
                                    Get in Touch
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar