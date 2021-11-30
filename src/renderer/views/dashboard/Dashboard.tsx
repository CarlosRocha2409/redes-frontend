import "./index.scss";

import codingvid from "../../../assets/videos/coding-bg.mp4";
import connect from "../../../assets/images/conexion.png";

export default function Dashboard(): JSX.Element {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <img src={connect} alt="connect" />
        <h1>Bienvenido a nuestra pagina hacker</h1>
        <h2>Te logueaste correctamente</h2>
      </div>
      <div className="dashboard-filter"></div>
      <div className="dashboard-vid">
        <video autoPlay={true} muted={true} loop={true}>
          <source src={codingvid} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
