import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
function App() {
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

  return (
    <>
      <Outlet />
    </>
  )
}

export default App