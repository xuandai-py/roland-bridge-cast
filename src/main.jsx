import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'



import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useLocation
} from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import OutletNotFound from './components/layout/404-Outlet'
import NotFound from './components/pages/404'
import Articles from './components/pages/Articles'
import Downloads from './components/pages/Downloads'
import Support from './components/pages/Support'
import Features from './components/pages/Features'
import Specs from './components/pages/Specs'
import Media from './components/pages/Media'

import ScrollToTop from "./helper";



const router = createBrowserRouter(

  createRoutesFromElements(

    <Route>

      <Route path='/' element={<App />}>
        <Route
          path='/'
          element={<Features />}
        />
        <Route
          path='/features'
          element={<Features />}
        />
        <Route
          path='/specifications'
          element={<Specs />}
        />
        <Route
          path='/media'
          element={<Media />}
        />
        <Route
          path='/articles'
          element={<Articles />}
        />
        <Route
          path='/downloads'
          element={<Downloads />}
        />
        <Route
          path='/support'
          element={<Support />}
        />
      </Route>
      <Route  element={<OutletNotFound />}>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Route >
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <BrowserRouter>
        <ScrollToTop />
        <Routes>
          
          <Route path='/' element={<App />}>
            <Route
              path='/'
              element={<Features />}
            />
            <Route
              path='/features'
              element={<Features />}
            />
            <Route
              path='/specifications'
              element={<Specs />}
            />
            <Route
              path='/media'
              element={<Media />}
            />
            <Route
              path='/articles'
              element={<Articles />}
            />
            <Route
              path='/downloads'
              element={<Downloads />}
            />
            <Route
              path='/support'
              element={<Support />}
            />
          </Route>
          <Route element={<OutletNotFound />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes >
      </BrowserRouter> */}
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
