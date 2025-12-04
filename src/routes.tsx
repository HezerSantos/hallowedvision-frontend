import App from "./App";
import NotFound from "./pages/404/404";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import PricingOverview from "./pages/pricing/PricingOverview";
import Project from "./pages/project/Project";
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
            },
            {
                path: "/portfolio/:id",
                element: <Project />
            },
            {
                path: "/packages",
                element: <PricingOverview />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]

export default routes