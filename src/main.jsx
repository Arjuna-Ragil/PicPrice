import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './hooks/authContext'
import './index.css'
import Home from './Pages/home'
import Search from './Pages/search'
import Wishlist from './Pages/wishlist'
import Setting from './Pages/setting'
import SignUp from './Pages/signUp'
import SignIn from './Pages/signIn'
import AuthRoute from './hooks/authRoute'
import AuthLoginRoute from './hooks/authLoginRoute'
import History from './Pages/history'
import LandingPage from './Pages/landingPage'

const router = createBrowserRouter([
  { path: '/', element:
     <AuthRoute>
      <Home />
     </AuthRoute>
  },
  { path: '/search', element: 
    <AuthRoute>
      <Search />
    </AuthRoute>
  },
  { path: '/wishlist', element: 
    <AuthRoute>
      <Wishlist />
    </AuthRoute>
  },
  { path: '/setting', element: 
    <AuthRoute>
      <Setting />
    </AuthRoute>
  },
  { path: '/history', element: 
    <AuthRoute>
      <History />
    </AuthRoute>
  },
  { path: '/signup', element: 
  <AuthLoginRoute>
    <SignUp />
  </AuthLoginRoute>
  },
  { path: '/signin', element: 
  <AuthLoginRoute>
    <SignIn/>
  </AuthLoginRoute>
  },
  { path: '/landingpage', element: 
    <AuthLoginRoute>
      <LandingPage/>
    </AuthLoginRoute>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <div className='dark'>
      <RouterProvider router={router}/>
      </div>
    </AuthProvider>
  </StrictMode>,
)