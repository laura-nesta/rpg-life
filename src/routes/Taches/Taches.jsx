import { BottomNavBar } from "../../components/atoms/BottomNavBar/BottomNavBar";
import CardTache from "../../components/molecules/cardTache/CardTache";
import "./taches.css";
import "../base.css";

import React, { useState, useEffect } from "react";

export default function Taches() {
  const [displayedTasks, setDisplayedTasks] = useState([]);
  const [frequence, setFrequence] = useState("jour");

  const taches = [
    {
      nom: "Laver le sol",
      categorie: "Maison",
      niveau: 6,
      frequence: "jour",
    },
    {
      nom: "Faire 50 pompes",
      categorie: "Sport",
      niveau: 4,
      frequence: "semaine",
    },
    {
      nom: "Ranger le garage",
      categorie: "Maison",
      niveau: 2,
      frequence: "mois",
    },
    {
      nom: "Faire 1000 squats",
      categorie: "Sport",
      niveau: 8,
      frequence: "mois",
    },
    {
      nom: "Faire 2000 pompes",
      categorie: "Sport",
      niveau: 8,
      frequence: "mois",
    },
  ];

  useEffect(() => {
    displayTaches();
  }, [frequence]);
  function displayTaches() {
    const tacheFiltre = taches.filter((el) => el.frequence === frequence);
    setDisplayedTasks(tacheFiltre);
    // for (let i = 0; i < tacheFiltre.length; i++) {
    //     const element = tacheFiltre[i];
    //     return(
    // <CardTache nom={element.nom} categorie={element.categorie} niveau={element.niveau}></CardTache>
    // )
    // }
  }

  return (
    <>
      <div className="page">
        <div className="header">
          <h1 className="titre">RPG Life</h1>
        </div>

        <div className="main-container">
          <div className="container">
            <div className="menu-agenda">
              {/* On filtre les tâche par fréquence */}
              <p
                className={frequence === "jour" ? "jour active" : "jour"}
                onClick={() => setFrequence("jour")}
              >
                Jour
              </p>
              <p
                className={
                  frequence === "semaine" ? "semaine active" : "semaine"
                }
                onClick={() => setFrequence("semaine")}
              >
                Semaine
              </p>
              <p
                className={frequence === "mois" ? "mois active" : "mois"}
                onClick={() => setFrequence("mois")}
              >
                Mois
              </p>
            </div>

            <div className="taches-liste">
              <div id="tache">
                {displayedTasks.map((element, i) => {
                  return (
                    <CardTache
                      key={i + "_" + element.frequence}
                      nom={element.nom}
                      categorie={element.categorie}
                      niveau={element.niveau}
                      disabled={true}
                    ></CardTache>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="nav-bar">
          <BottomNavBar></BottomNavBar>
        </div>
      </div>
    </>
  );
}
