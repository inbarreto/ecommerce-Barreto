import "./NavBar.css";
import logo from "./../../logo.svg";
import { CartWidget } from "./../../components/CartWidget/CartWIdget";

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
        <li>
          <h3>My E-Commerce</h3>
        </li>

        <li className="rightli">
          <CartWidget text="5" />
        </li>
      </ul>
    </div>
  );
};
