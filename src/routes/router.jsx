import React from "react";
import ReactDOM from "react-dom/client";

import Accueil from "./Accueil/Accueil";
import Compte from "./Compte/Compte";
import Taches from "./Taches/Taches";
import Parametres from "./Parametres/Parametres";
import Connexion from "./Connexion/Connexion";
import Inscription from "./Inscription/Inscription";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Accueil />,
    },
    {
      path: "compte",
      element: <Compte />,
    },
    {
      path: "taches",
      element: <Taches />,
    },
    {
      path: "parametres",
      element: <Parametres />,
    },
    {
      path: "connexion",
      element: <Connexion />,
    },
    {
      path: "inscription",
      element: <Inscription />,
    },
  ]);

  return <RouterProvider router={router} />;
};
