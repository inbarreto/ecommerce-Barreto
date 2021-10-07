import "./NavBar.css";
import logo from "./../../logo.svg";
import { Title } from "./../../components/title/Title";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <img src={logo} className="App-logo" alt="logo" />{" "}
        </li>
        <li className="active">
          <span> Home </span>
        </li>
        <li>
          <span> Novedades </span>
        </li>
        <li>
          <span> Contacto</span>
        </li>
        <li className="rightli">
          <span>Login</span>
        </li>
        <li>
          <Title text="My E-Commerce app" />
        </li>
      </ul>
    </div>
  );
};
