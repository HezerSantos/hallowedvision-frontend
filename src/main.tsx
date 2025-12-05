import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import routes from './routes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CsrfProvider from './context/csrf/csrfProvider.js'
import { HelmetProvider } from 'react-helmet-async'
import { LoadingScreen } from './App.js'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <HelmetProvider>
  //     <CsrfProvider>
  //       <RouterProvider router={router} />
  //     </CsrfProvider>
  //   </HelmetProvider>
  // </StrictMode>
<Suspense fallback={<LoadingScreen />}>
  <HelmetProvider>
    <CsrfProvider>
      <RouterProvider router={router} />
    </CsrfProvider>
  </HelmetProvider>
</Suspense>
)