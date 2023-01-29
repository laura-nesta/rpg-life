import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import "./inscription.css";

export default function Inscription() {
  return (
    <>
      <div className="page">
        <div className="header">
          <h1 className="titre">RPG Life</h1>
        </div>

        <div className="main-container">
          <div className="container">
            <div className="lien-connexion">
              <a href="/connexion" id="connexion">
                Connexion
              </a>
              <a href="/inscription" id="inscription" className="active">
                Inscription
              </a>
            </div>
            <div className="formulaire">
              <div className="input-text">
                <TextField
                  id="outlined-basic"
                  label="Pseudo"
                  variant="outlined"
                  sx={{ input: { color: "#FFFFFF80" } }}
                />
              </div>
              <div className="input-text">
                <TextField
                  id="outlined-basic"
                  label="Mot de passe"
                  variant="outlined"
                  sx={{ input: { color: "#FFFFFF80" } }}
                />
              </div>
              <div className="input-text">
                <TextField
                  id="outlined-basic"
                  label="Cofirmation mot de passe"
                  variant="outlined"
                  sx={{ input: { color: "#FFFFFF80" } }}
                />
              </div>
            </div>
            <div className="button-submit">
              <Button
                sx={{
                  color: "rgb(0, 153, 153)",
                  backgroundColor: "#00000020",
                  borderColor: "rgb(0, 153, 153)",
                }}
                href="/"
                variant="outlined"
              >
                Inscription
              </Button>
            </div>
          </div>
        </div>
        <div className="nav-bar"></div>
      </div>
    </>
  );
}
