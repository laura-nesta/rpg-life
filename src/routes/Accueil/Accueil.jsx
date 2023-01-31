import { BottomNavBar } from "../../components/atoms/BottomNavBar/BottomNavBar";
import "./accueil.css";
import "../base.css";

import React, { useState, useEffect } from "react";

import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Slider from "@mui/material/Slider";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Accueil() {
  const [displayedLabel, setDisplayedLabel] = useState([]);
  const [displayedLevel, setDisplayedLevel] = useState([]);

  const [nom, setNom] = React.useState("");
  const [modal, setDisplayModal] = React.useState(false);
  const [difficulte, setDifficulte] = React.useState(0);

  const categories = [
    {
      id: 1,
      nom: "Social",
      niveau: 5,
      userId: 1,
    },
    {
      id: 2,
      nom: "Pro",
      niveau: 8,
      userId: 1,
    },
    {
      id: 3,
      nom: "Santé",
      niveau: 7,
      userId: 1,
    },
    {
      id: 4,
      nom: "Lecture",
      niveau: 5,
      userId: 1,
    },
    {
      id: 5,
      nom: "Sport",
      niveau: 6,
      userId: 1,
    },
    {
      id: 6,
      nom: "Maison",
      niveau: 4,
      userId: 1,
    },
    {
      id: 7,
      nom: "Loisir",
      niveau: 2,
      userId: 2,
    },
    {
      id: 8,
      nom: "Bureau",
      niveau: 8,
      userId: 2,
    },
    {
      id: 9,
      nom: "Vie",
      niveau: 4,
      userId: 2,
    },
  ];

  useEffect(() => {
    displayLabelsAndLevel(1);
  });

  function displayLabelsAndLevel(userId) {
    const tabLabel = [];
    const tabLevel = [];
    const tabUser = categories.filter((el) => el.userId === userId);
    tabUser.forEach((el) => tabLabel.push(el.nom));
    tabUser.forEach((el) => tabLevel.push(el.niveau));
    setDisplayedLabel(tabLabel);
    setDisplayedLevel(tabLevel);
  }

  const handleChangeNom = (event) => {
    setNom(event.target.nom);
  };

  const handleChangeDifficulte = (event) => {
    setDifficulte(event.target.difficulte);
  };

  function addCompetence() {
    const competence = {
      nom: nom,
      niveau: difficulte,
      userId: 1,
    };
    categories.push(competence);
    console.log(categories);
    // setDisplayedTasks(taches);

    displayLabelsAndLevel(1);
    setDisplayModal(!modal);
  }

  const data = {
    labels: displayedLabel,
    datasets: [
      {
        label: "niveau",
        data: displayedLevel,
        backgroundColor: "rgba(65, 243, 243, 0.2)",
        borderColor: "rgba(65, 243, 243, 0.3)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      min: 0,
      max: 10,
    },
    scales: {
      r: {
        ticks: {
          display: false, // Hides the labels in the middel (numbers)
        },
        grid: {
          color: "#FFFFFF30",
        },
        angleLines: {
          color: "rgba(0, 153, 153, 0.5)",
        },
        pointLabels: {
          color: "white",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className="page">
        <div className="header">
          <h1 className="titre">RPG Life</h1>
        </div>

        <div className="main-container">
          <div className="container">
            <div className="container-chart">
              <Radar data={data} options={options} />
            </div>
            <div className="add-categorie">
              <Button
                sx={{
                  color: "rgb(0, 153, 153)",
                }}
                onClick={() => setDisplayModal(!modal)}
              >
                Nouvelle compétence +
              </Button>
            </div>
          </div>
        </div>

        {/* Modal qui permet d'ajouter une nouvelle compétence  */}
        <div className={modal ? "modal new-task" : "modal new-task innactive"}>
          <h1>Nouvelle compétence</h1>
          <div className="input-text">
            <TextField
              id="outlined-size-small"
              label="Nom"
              variant="outlined"
              size="small"
              value={nom}
              onChange={handleChangeNom}
              // onChange={() => setNom(nom)}
              sx={{
                input: {
                  color: "#FFFFFF80",
                  backgroundColor: "#00000010",
                  borderColor: "rgb(0, 153, 153)",
                },

                backgroundColor: "#00000010",
                "data-shrink": {
                  color: "#0000000",
                  backgroundColor: "#F6F6E8",
                  textDecoration: "line-through",
                },
              }}
            />
          </div>

          <div className="niveau">
            <span>Difficulté</span>
            <Slider
              sx={{
                color: "rgb(0, 153, 153)",
              }}
              aria-label="Niveau"
              defaultValue={0}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              onChange={handleChangeDifficulte}
            />
          </div>

          <div className="button-submit">
            <Button
              sx={{
                color: "rgb(0, 153, 153)",
                backgroundColor: "#00000010",
                borderColor: "rgb(0, 153, 153)",
              }}
              onClick={addCompetence}
              variant="outlined"
            >
              Créer la compétence
            </Button>
          </div>
        </div>

        <div className="nav-bar">
          <BottomNavBar></BottomNavBar>
        </div>
      </div>
    </>
  );
}
