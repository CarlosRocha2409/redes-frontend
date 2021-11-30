import { useState } from "react";
import Login from "./renderer/views/login/Login";
import Dashboard from "./renderer/views/dashboard/Dashboard";

export default function Main(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = (auth: boolean) => {
    setIsAuthenticated(auth);
  };
  return !isAuthenticated ? (
    <Login setIsAuthenticated={authenticate} />
  ) : (
    <Dashboard />
  );
}
