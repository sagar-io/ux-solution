import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import FirebaseContext from './context/firebaseContext'
import Firebase from './api/firebase'
import SignIn from './components/Auth/SignIn'
import Cart from './components/Cart'
import './styles/main.scss'
import Description from './components/Description'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: 'signin',
    element: <SignIn />
  },
  {
    path: 'cart',
    element: <Cart />
  },
  {
    path: 'description',
    element: <Description />
  },
])

// const firebase:Firebase = 

ReactDOM.createRoot(document.getElementById('root')!).render(
    <FirebaseContext.Provider value={new Firebase()}>
      <RouterProvider router={router} />
    </FirebaseContext.Provider>
)
