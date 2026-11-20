import { lazy } from "react";
import App from "./App";
const HomePage = lazy(() => import("./Pages/Home/Home"));
const Contact = lazy(() => import("./Pages/contact/Contact"));
const Portfolio = lazy(() => import("./Pages/portfolio/Portfolio"));
const PricingOverview = lazy(() => import("./Pages/pricing/PricingOverview"));
const Project = lazy(() => import("./Pages/project/Project"));
const Terms = lazy(() => import("./Pages/terms/Terms"));
const NotFound = lazy(() => import("./Pages/404/404"));
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: null,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/terms-and-conditions",
        element: <Terms />,
      },
      {
        path: "/portfolio/:id",
        element: <Project />,
      },
      {
        path: "/packages",
        element: <PricingOverview />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
