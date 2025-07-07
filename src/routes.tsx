import App from "./App";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/home/Home";
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
            }
        ]
    }
]

export default routes