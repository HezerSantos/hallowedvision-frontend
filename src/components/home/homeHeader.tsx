import React from "react";
import { AngelWings } from "../models/AngelWings";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const HomeHeader: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <header className="page-section home_header-wrapper">
                <div className="page-section__child home_header">
                    <AngelWings />
                    <div className="home_header_content">
                        <h1>Foucs on What Matters <br /> Bring Your Vision to Life</h1>
                        <div>
                            <button onClick={() => navigate("/terms-and-conditions")}>
                                <span>Learn More</span>
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