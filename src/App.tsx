import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import api from './app.config';
import axios from 'axios'

function App() {
  axios.defaults.withCredentials = true
  useEffect(() => {
    if (import.meta.env.MODE === 'production') {
      console.warn = () => {}
      console.error = () => {}
      console.info = () => {}
      console.debug = () => {}
    }
  }, [])
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const getCsrf = async() => {
      try{
        await axios.get(`${api.url}/api/csrf`)
        console.log(document.cookie)
      } catch(e){
        console.error(e)
      }
    }

    getCsrf()
  }, [])
  return (
    <>
      <Outlet />
    </>
  )
}

export default App