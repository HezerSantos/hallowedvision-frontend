import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  useEffect(() => {
    if (import.meta.env.MODE === 'production') {
      console.warn = () => {}
      console.error = () => {}
      console.info = () => {}
      console.debug = () => {}
    }
  }, [])

  return (
    <>
      <Outlet />
    </>
  )
}

export default App