import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation, useMatch } from 'react-router-dom';
import api from './app.config';
import axios from 'axios'
import CsrfContext from './context/csrf/csrfContext';
import logo from './assets/images/logo.webp'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import * as Helmet from './components/universal/helmet'
export const LoadingScreen: React.FC = () => {
  return(
    <main className='loading-screen'>
      <img src={logo} alt="logo-loading"/>
    </main>
  )
}

function App() {
  axios.defaults.withCredentials = true
  const { pathname } = useLocation();
  const csrfContext = useContext(CsrfContext)
  const [ isLoading, setIsLoading ] = useState<Boolean>(true)
  

  const isHome = useMatch({ path: "/", end: true });
  const isPortfolio = useMatch({ path: "/portfolio", end: true });
  // const isPortfolioId = useMatch("/portfolio/:id");
  const isPackages = useMatch({ path: "/packages", end: true });
  const isTerms = useMatch({ path: "/terms-and-conditions", end: true });
  const isContact = useMatch({path: "/contact", end: true})
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (import.meta.env.MODE === 'production') {
      disableReactDevTools()
      console.warn = () => {}
      console.error = () => {}
      console.info = () => {}
      console.debug = () => {}
    }
  }, [])

  useEffect(() => {
    const getCsrf = async() => {
      try{
        await axios.get(`${api.url}/api/auth`, {
          headers: {
            ['Server-Id']: "HV002"
          }
        })
        await axios.get(`${api.url}/api/csrf`, {
          headers: {
            ['Server-Id']: "HV002"
          }
        })
        csrfContext?.decodeCookie("__Secure-auth.csrf")
        setIsLoading(false)
      } catch(e){
        console.error(e)
      }
    }

    getCsrf()
  }, [])


  return (
    <>
      {isLoading? (
        <LoadingScreen />
      ) : (
        <>
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
          <Outlet />
        </>
        
      )}
    </>
  )
}

export default App