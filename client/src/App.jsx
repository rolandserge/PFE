import './_app.scss'
import Home from './pages/home';
import Dashboad from './pages/dashbord';
import FormationPage from './pages/Cours/formation';
import Message from './pages/message'
import Login from './pages/login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendrier from './pages/calendrier';
import DetailFormation from './pages/Cours/detail';
import CreerFormation from './pages/Cours/creerFormation';
import CreateCours from './pages/Cours/createCours';
import Module from './pages/Module/module';
import CreateModule from './pages/Module/createModule';
import CoursModule from './pages/Module/coursModule';
import Register from './pages/Utilisateur/register';
import Utilisateurs from './pages/Utilisateur';
import CreateDepartement from './pages/Departement/createDepartement';


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
        },
        {
          path: "/creer-formation",
          element: <CreerFormation />
        },
        {
          path: "/creer-formation/page",
          element: <CreateCours />
        },
        {
          path: '/module',
          element: <Module />
        },
        {
          path: "/creer-module",
          element: <CreateModule />
        },
        {
          path: "/module/cours",
          element: <CoursModule />
        },
        {
          path: "/utilisateur",
          element: <Utilisateurs />
        },
        {
          path: "/creer-utilisateur",
          element: <Register />
        },
        {
          path: "/creer-departement",
          element: <CreateDepartement />
        }
      ],
    }
  ]);


function App() {

  return <RouterProvider router={router} />
}

export default App
