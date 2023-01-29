import "./bottomNavBar.css";

import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import icone_compte from "./icons/icone_compte.svg";
import icone_toile from "./icons/icone_toileCompetence.svg";
import icone_done from "./icons/icone_done.svg";
import icone_parametres from "./icons/icone_parametres.svg";

export const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <BottomNavigation
        sx={{ bgcolor: "#00000000" }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(value);
        }}
        // className="bottomNav"
      >
        <BottomNavigationAction
          label=""
          href={`parametres`}
          icon={
            <img
              className={
                window.location.pathname === "/parametres"
                  ? "icone-menu active"
                  : "icone-menu"
              }
              src={icone_parametres}
              alt="A faire"
            />
          }
        />
        <BottomNavigationAction
          label=""
          href={`/`}
          icon={
            <img
              className={
                window.location.pathname === "/"
                  ? "icone-menu active"
                  : "icone-menu"
              }
              src={icone_toile}
              alt="Compétences"
            />
          }
        />
        <BottomNavigationAction
          label=""
          href={`taches`}
          icon={
            <img
              className={
                window.location.pathname === "/taches"
                  ? "icone-menu active"
                  : "icone-menu"
              }
              src={icone_done}
              alt="Agenda"
            />
          }
        />
        <BottomNavigationAction
          label=""
          href={`compte`}
          icon={
            <img
              className={
                window.location.pathname === "/compte"
                  ? "icone-menu active"
                  : "icone-menu"
              }
              src={icone_compte}
              alt="Compte"
            />
          }
        />
      </BottomNavigation>
    </>
  );
};
