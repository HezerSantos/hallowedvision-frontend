import React from "react";
import { AngelWings } from "../models/AngelWings";
import { FaArrowRight } from "react-icons/fa";
const HomeHeader: React.FC = () => {
    return (
        <>
            <header className="page-section home_header-wrapper">
                <div className="page-section__child home_header">
                    <AngelWings />
                    <div className="home_header_content">
                        <h1>Foucs on What Matters <br /> Bring Your Vision to Life</h1>
                        <div>
                            <button>
                                <span>Learn More</span>
                                <FaArrowRight />
                            </button>
                            <button>
                                <span>Services</span>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
} 

export default HomeHeader