import path from "path";
import App from "./App";
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
        ]
    }
]

export default routes