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
                    <div aria-hidden="true">
                        <FaBagShopping />
                        <p>E-Commerce</p>
                    </div>
                    <div aria-hidden="true">
                        <FaBusinessTime />
                        <p>Business</p>
                    </div>
                    <div aria-hidden="true">
                        <FaPersonHalfDress />
                        <p>Personal</p>
                    </div>
                    <div aria-hidden="true">
                        <FaWrench />
                        <p>Craftmanship</p>
                    </div>
                    <div aria-hidden="true">
                        <FaBoxOpen />
                        <p>Out of The Box</p>
                    </div>
                    <div aria-hidden="true">
                        <MdSecurity />
                        <p>Security</p>
                    </div>   
                </div>
                <div className="home__section-examples">
                    <div className="section-example">
                        <div>BUSINESS</div>
                    </div>
                    <div className="section-example">
                        <div>E-COMMERCE</div>
                    </div>
                    <div className="section-example">
                        <div>PERSONAL</div>
                    </div>
                    <div className="section-example">
                        <div>SERVICE</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSectionOne