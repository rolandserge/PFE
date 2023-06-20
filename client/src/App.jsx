import './App.css'
import Home from './pages/home';
import Dashboad from './pages/dashbord';
import FormationPage from './pages/formation';
import Message from './pages/message'
import Login from './pages/login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendrier from './pages/calendrier';
import DetailFormation from './pages/detail';


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
        {
          path: '/formation/:detail',
          element: <DetailFormation />
        }
      ],
    }
  ]);


function App() {

  return <RouterProvider router={router} />
}

export default App
