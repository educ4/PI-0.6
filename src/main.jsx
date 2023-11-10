import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider, 
  BrowserRouter
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";
import App from './App'
import Cursos from './components/pages/Cursos';
import Home from './components/pages/Home.jsx';
import Login from './components/pages/Login';
import AreaAluno from './components/pages/AreaAluno.jsx';
import AreaProfessor from './components/pages/Areaprofessor.jsx';
import Registrar from './components/pages/Registrar';
import Html from './components/pages/Html';
import AreaUser from './components/pages/AreaUser';
import CadastroAluno from'./components/pages/CadastroAluno';
import CadProf from "./components/pages/CadProf.jsx";
import Ranking from './components/pages/ranking.jsx'
import Termos from './components/pages/termos.jsx';
import HTML1 from './components/pages/HTML1.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cursos",
        element: <Cursos />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/area-aluno",
        element: <AreaAluno />,
      },
      {
        path: "/area-professor",
        element: <AreaProfessor />,
      },
      {
        path: "/registrar",
        element: <Registrar />,
      },
      {
        path: "/cadastro-aluno",
        element: <CadastroAluno/>,
      },

      {
        path: "/cadastro-professor",
        element: <CadProf/>,
      },
      {
        path: "/html",
        element: <Html />,
      },
      {
        path: "/curso-html",
        element: <HTML1 />,
      },
      {
        path: "/area-user",
        element: <AreaUser />,
      },
      {
        path: "/ranking",
        element: <Ranking />,
      },
      {
        path: "/termos",
        element: <Termos />,
      },
      
      
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    
        <RouterProvider router={router} />
         
  </React.StrictMode>
);
