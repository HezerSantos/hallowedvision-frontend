import FooterHV from "../../components/universal/footer"
import NavBar from "../../components/universal/navBar"
import '../../assets/styles/404/404.css'
import { Helmet } from "react-helmet-async"
const NotFound: React.FC = () => {
    return (
        <>
            <NavBar />
            <Helmet>
                <title>404 Not Found | HallowedVisions</title>
                <meta name="description" content="Oops! Looks like this page does not exist." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <main className="notfound-main">
                <h1>404 Not Found</h1>
                <p>Oops! Looks like this page does not exist.</p>
            </main>
            <footer className="notfound-footer">
                <FooterHV />
            </footer>
            
        </>
    )
}

export default NotFound