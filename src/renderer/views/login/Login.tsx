import "./index.scss";
import connect from "../../../assets/images/conexion.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Login({
  setIsAuthenticated,
}: {
  setIsAuthenticated: (auth: boolean) => void;
}): JSX.Element {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = () => {
    setIsAuthenticated(true);
    console.log({
      username: username,
      password: password,
    });
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
          <Button variant="contained" onClick={() => login()}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
