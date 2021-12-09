import "./index.scss";
import connect from "../../../assets/images/conexion.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import axios from "axios";
import { useState } from "react";

const API_URL = "http://127.0.0.1:5000/api/token/";

export default function Login({
  setIsAuthenticated,
}: {
  setIsAuthenticated: (auth: boolean) => void;
}): JSX.Element {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async () => {
    setIsLoading(true);
    await axios
      .post(API_URL, {
        username: username,
        password: password,
      })
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch(() => {
        setError(true);
      });
    setIsLoading(false);
  };
  return (
    <div className="login">
      <div className="login-card">
        <img src={connect} alt="connect" />
        <h3>Servidor de aplicaciones</h3>
        <form className="login-form">
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            id="standard-basic"
            label="Username"
            variant="standard"
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
          />
          {!isLoading && (
            <Button variant="contained" onClick={() => login()}>
              Login
            </Button>
          )}
        </form>
        {isLoading && <CircularProgress />}
        {error && <p className="login-err">Usuario o contraseña incorrectos</p>}
      </div>
    </div>
  );
}
