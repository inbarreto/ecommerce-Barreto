import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "./../../logo.svg";
import { CartWidget } from "./../../components/CartWidget/CartWIdget";
import Categories from "./../../Data/categories.json";
import { Context } from "./../../Context/CartContext";
import { useContext } from "react";
export const NavBar = () => {
  const cartContext = useContext(Context);
  console.log(cartContext.cart);
  return (
    <div className="NavBar">
      <ul>
        <li>
          <Link to={"/"}>
            <span>
              {" "}
              <img src={logo} className="App-logo" alt="logo" />{" "}
            </span>
          </Link>
        </li>
        {Categories.map((cat) => (
          <li key={cat.Id}>
            <Link to={`/category/${cat.Id}`}>
              <span>{cat.Description}</span>
            </Link>
          </li>
        ))}
        ;
        <li>
          <h3>Sport-Commerce</h3>
        </li>
        <li className="rightli">
          <CartWidget text={cartContext.cart.length} />
        </li>
      </ul>
    </div>
  );
};
