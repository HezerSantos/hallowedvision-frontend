import FooterHV from "../../components/universal/footer"
import NavBar from "../../components/universal/navBar"
import '../../assets/styles/404/404.css'
const NotFound: React.FC = () => {
    return (
        <>
            <NavBar />
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