import { useNavigate } from "react-router-dom"

const HomeSectionTwo:React.FC = () => {
    const navigate = useNavigate()
    return(
        <>
            <section className="page-section__child home__section-redirect">
                <div>
                    <h1>Dont Know Where to Start?</h1>
                    <p>No more boilerplate. Just clone, build, and launch.</p>
                    <p>Get a fully built SaaS website with production-ready code — everything you need to launch fast and own your platform.</p>
                    <button onClick={() => navigate("/packages")}>
                        SIMPLIFY YOUR LAUNCH
                    </button>
                </div>
            </section>
        </>
    )
}

export default HomeSectionTwo