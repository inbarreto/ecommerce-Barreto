import shoppingCart from "./../../icons/shoppingCart.svg";
import "./CartWidget.css";
export const CartWidget = (props) => {
  return (
    <span>
      {props.text}

      <img src={shoppingCart} alt="Shopping-Cart" className="icon" />
    </span>
  );
};
