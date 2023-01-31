import "./parmetres.css";
import "../base.css";

import { BottomNavBar } from "../../components/atoms/BottomNavBar/BottomNavBar";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import CardTache from "../../components/molecules/cardTache/CardTache";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";

import React, { useState, useEffect } from "react";
import { red } from "@mui/material/colors";

export default function Parametres() {
  const [displayedTasks, setDisplayedTasks] = useState([]);
  const [displayedCategorie, setDisplayedCategorie] = useState([]);
  const [categorie, setCategorie] = React.useState([]);
  const [modal, setDisplayModal] = React.useState(false);

  const [frequence, setFrequence] = React.useState("");
  const [competence, setCompetence] = React.useState("");
  const [nom, setNom] = React.useState("");
  const [difficulte, setDifficulte] = React.useState(0);

  const taches = [
    {
      nom: "Laver le sol",
      categorie: "Maison",
      niveau: 6,
      frequence: "jour",
      userId: 1,
    },
    {
      nom: "Faire 50 pompes",
      categorie: "Sport",
      niveau: 4,
      frequence: "semaine",
      userId: 1,
    },
    {
      nom: "Ranger le garage",
      categorie: "Maison",
      niveau: 2,
      frequence: "mois",
      userId: 1,
    },
    {
      nom: "Faire 1000 squats",
      categorie: "Sport",
      niveau: 8,
      frequence: "mois",
      userId: 2,
    },
    {
      nom: "Faire 2000 pompes",
      categorie: "Sport",
      niveau: 10,
      frequence: "mois",
      userId: 2,
    },
  ];

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
      id: 7,
      nom: "Bureau",
      niveau: 8,
      userId: 2,
    },
    {
      id: 7,
      nom: "Vie",
      niveau: 4,
      userId: 2,
    },
  ];

  useEffect(() => {
    displayTaches(1);
    displayedCategories(1);
  });

  function displayTaches(userId) {
    const tab = [];
    const tabUser = taches.filter((el) => el.userId === userId);
    tabUser.forEach((el) => tab.push(el));
    setDisplayedTasks(tab);
  }

  function displayedCategories(userId) {
    const tab = [];
    const tabUser = categories.filter((el) => el.userId === userId);
    tabUser.forEach((el) => tab.push(el.nom));
    setDisplayedCategorie(tab);
  }

  function addTask() {
    const tache = {
      nom: nom,
      categorie: competence,
      niveau: difficulte,
      frequence: frequence,
      userId: 1,
    };
    taches.push(tache);
    console.log(taches);
    // setDisplayedTasks(taches);

    displayTaches(1);
    setDisplayModal(!modal);
  }

  const handleChange = (event) => {
    setCategorie(event.target.value);
  };

  const handleChangeFrequence = (event) => {
    setFrequence(event.target.value);
  };

  const handleChangeNom = (event) => {
    setNom(event.target.nom);
  };

  const handleChangeCompetence = (event) => {
    setCompetence(event.target.competence);
  };

  const handleChangeDifficulte = (event) => {
    setDifficulte(event.target.difficulte);
  };

  return (
    <>
      <div className="page">
        <div className="header">
          <h1 className="titre">RPG Life</h1>
        </div>

        <div className="main-container">
          <div className="container">
            {/* Boutton qui permet d'ouvrir la modal pour ajouter une tâche */}
            <div className="add-task">
              <Button
                sx={{
                  color: "rgb(0, 153, 153)",
                  backgroundColor: "#00000010",
                  borderColor: "rgb(0, 153, 153)",
                }}
                onClick={() => setDisplayModal(!modal)}
                variant="outlined"
              >
                Nouvelle tâche +
              </Button>
            </div>
            {/* Liste des tâches */}
            <div className="tache-liste">
              <div id="tache">
                {displayedTasks.map((element, i) => {
                  return (
                    <div className="tache-complete">
                      <div className="card-tache">
                        <CardTache
                          key={i + "_" + element.frequence}
                          nom={element.nom}
                          categorie={element.categorie}
                          niveau={element.niveau}
                          disabled={false}
                        ></CardTache>
                      </div>

                      <div class="bouton-action">
                        <Button
                          sx={{
                            width: "20px",
                            color: "rgb(0, 153, 153)",
                            backgroundColor: "#00000010",
                            borderColor: "rgb(0, 153, 153)",
                          }}
                          // onClick={supprimTache}
                          variant="outlined"
                          className="supp-tache"
                        >
                          x
                        </Button>
                        <Button
                          sx={{
                            width: "20px",
                            color: "rgb(0, 153, 153)",
                            backgroundColor: "#00000010",
                            borderColor: "rgb(0, 153, 153)",
                          }}
                          // onClick={modifieTache}
                          variant="outlined"
                          className="modif-tache"
                        >
                          ->
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal qui permet d'ajouter une nouvelle tâche  */}
            <div
              className={modal ? "modal new-task" : "modal new-task innactive"}
            >
              <h1>Nouvelle tâche</h1>
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
                      color: red,
                      backgroundColor: "#F6F6E8",
                      textDecoration: "line-through",
                    },
                  }}
                />
              </div>
              <div className="select competence">
                <FormControl
                  sx={{
                    m: 1,
                    minWidth: 150,
                    color: "rgb(0, 153, 153)",
                    backgroundColor: "#00000010",
                    borderColor: "rgb(0, 153, 153)",
                    bgcolor: "#00000010",
                  }}
                  size="small"
                  value={competence}
                  onChange={handleChangeCompetence}
                >
                  <InputLabel id="demo-simple-select-label">
                    Compétence
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categorie}
                    label="Compétence"
                    onChange={handleChange}
                  >
                    {displayedCategorie.map((element, i) => {
                      return <MenuItem value={element}>{element}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </div>
              <div className="select frequence">
                <FormControl
                  sx={{
                    m: 1,
                    minWidth: 150,
                    color: "rgb(0, 153, 153)",
                    backgroundColor: "#00000010",
                    borderColor: "rgb(0, 153, 153)",
                    bgcolor: "#00000010",
                  }}
                  size="small"
                >
                  <InputLabel id="demo-simple-select-label">
                    Fréquence
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={frequence}
                    label="Compétence"
                    onChange={handleChangeFrequence}
                  >
                    <MenuItem value={"jour"}>jour</MenuItem>;
                    <MenuItem value={"semaine"}>semaine</MenuItem>;
                    <MenuItem value={"mois"}>mois</MenuItem>;
                  </Select>
                </FormControl>
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
                  onClick={addTask}
                  variant="outlined"
                >
                  Créer la tâche
                </Button>
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
