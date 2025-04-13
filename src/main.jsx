import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/home'
import Search from './Pages/search'
import Wishlist from './Pages/wishlist'
import Setting from './Pages/setting'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './Pages/signUp'

const router = createBrowserRouter([
  { path: '/', element: <Home />},
  { path: '/search', element: <Search />},
  { path: '/wishlist', element: <Wishlist />},
  { path: '/setting', element: <Setting />},
  { path: '/signup', element: <SignUp />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)