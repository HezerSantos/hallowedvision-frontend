import App from "./App";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Terms from "./pages/terms/Terms";
const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: null,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
            {
                path: "/terms-and-conditions",
                element: <Terms />
            }
        ]
    }
]

export default routes