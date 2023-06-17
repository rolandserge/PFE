import './App.css'
import Home from './pages/home';
import Dashboad from './pages/dashbord';
import FormationPage from './pages/formation';
import Message from './pages/message'
import Login from './pages/login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendrier from './pages/calendrier';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
   
      element: <Home />,
      children: [
        {
          path: "/acceuil",
          element: <Dashboad />,
          index: true,
        },
        {
          path: "/formation",
          element: <FormationPage />,
        },
        {
          path: "/message",
          element: <Message />,
        },
        {
          path: '/calendrier',
          element: <Calendrier />
        },
      ],
    }
  ]);


function App() {

  return <RouterProvider router={router} />
}

export default App
