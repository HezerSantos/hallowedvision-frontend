import { FaBagShopping } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";
import { FaPersonHalfDress } from "react-icons/fa6";
import { FaWrench } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const HomeSectionOne:React.FC = () => {
    return(
        <>
            <section className="page-section__child home__section-information">
                <div className="home__section-icons">
                    <div>
                        <FaBagShopping />
                        <p>E-Commerce</p>
                    </div>
                    <div>
                        <FaBusinessTime />
                        <p>Business</p>
                    </div>
                    <div>
                        <FaPersonHalfDress />
                        <p>Personal</p>
                    </div>
                    <div>
                        <FaWrench />
                        <p>Craftmanship</p>
                    </div>
                    <div>
                        <FaBoxOpen />
                        <p>Out of The Box</p>
                    </div>
                    <div>
                        <MdSecurity />
                        <p>Security</p>
                    </div>
                    <div>
                        <FaBagShopping />
                        <p>E-Commerce</p>
                    </div>
                    <div>
                        <FaBusinessTime />
                        <p>Business</p>
                    </div>
                    <div>
                        <FaPersonHalfDress />
                        <p>Personal</p>
                    </div>
                    <div>
                        <FaWrench />
                        <p>Craftmanship</p>
                    </div>
                    <div>
                        <FaBoxOpen />
                        <p>Out of The Box</p>
                    </div>
                    <div>
                        <MdSecurity />
                        <p>Security</p>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default HomeSectionOne