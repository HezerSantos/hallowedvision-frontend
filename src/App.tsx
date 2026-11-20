import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation, useMatch } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import * as Helmet from "./components/universal/helmet";
import AuthLayer from "./components/Layers/AuthLayer";
import DefaultNav from "./components/common/DefaultNav/DefaultNav";
import DefaultFooter from "./components/common/DefaultFooter/DefaultFooter";

function App() {
  const { pathname } = useLocation();

  const isHome = useMatch({ path: "/", end: true });
  const isPortfolio = useMatch({ path: "/portfolio", end: true });
  const isPackages = useMatch({ path: "/packages", end: true });
  const isTerms = useMatch({ path: "/terms-and-conditions", end: true });
  const isContact = useMatch({ path: "/contact", end: true });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (import.meta.env.MODE === "production") {
      disableReactDevTools();
      console.warn = () => {};
      console.error = () => {};
      console.info = () => {};
      console.debug = () => {};
    }
  }, []);

  return (
    <>
      <AuthLayer isPublic={true}>
        {isHome ? (
          <Helmet.HomeHelmet />
        ) : isPortfolio ? (
          <Helmet.PortfolioHelmet />
        ) : isPackages ? (
          <Helmet.PackagesHelmet />
        ) : isTerms ? (
          <Helmet.TermsHelmet />
        ) : isContact ? (
          <Helmet.ContactHelmet />
        ) : (
          <Helmet.NotFoundHelmet />
        )}
        <DefaultNav />
        <Outlet />
        <DefaultFooter />
      </AuthLayer>
    </>
  );
}

export default App;
