import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import api from './app.config';
import axios from 'axios'
import CsrfContext from './context/csrf/csrfContext';
import logo from './assets/images/logo.webp'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
const LoadingScreen: React.FC = () => {
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
        await axios.get(`${api.url}/api/csrf`)
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
        <Outlet />
      )}
    </>
  )
}

export default App