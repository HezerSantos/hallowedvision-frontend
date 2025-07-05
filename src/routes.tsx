import App from "./App";
import HomePage from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
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
                path: "/portfolio",
                element: <Portfolio />
            }
        ]
    }
]

export default routes