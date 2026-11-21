import { lazy } from "react";
import App from "./App";
const HomePage = lazy(() => import("./Pages/Home/Home"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Portfolio = lazy(() => import("./Pages/Portfolio/Portfolio"));
const PricingOverview = lazy(() => import("./Pages/Pricing/PricingOverview"));
const Project = lazy(() => import("./Pages/Project/Project"));
const Terms = lazy(() => import("./Pages/Terms/Terms"));
const NotFound = lazy(() => import("./Pages/Errors/NotFound"));
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
