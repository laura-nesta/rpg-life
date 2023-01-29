import "./cardTache.css";
import { useState } from "react";
export default function CardTache(props) {
  const [done, isDone] = useState(false);
  const levelClass = "skill-level show-" + props.niveau;
  return (
    <div
      onClick={() => {
        isDone(!done);
      }}
      className={done ? "card done" : "card"}
    >
      <div className="info-tache">
        <p className="tache-nom">{props.nom}</p>
        <p className="tache-categorie">{props.categorie}</p>
      </div>
      <div className="difficulte">
        <p>Difficulté:</p>
        <div className={levelClass}>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>
      </div>
    </div>
  );
}
