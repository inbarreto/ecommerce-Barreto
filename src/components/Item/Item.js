import "./Item.css";
import { Link } from "react-router-dom";
export const Item = (props) => {
  return (
    <span className="itemProduct">
      <span>
        <Link to={`/item/${props.itemProduct.Id}`}>
          {" "}
          <img src={props.itemProduct.Imagen} alt="product"></img>{" "}
        </Link>
      </span>
      <span>{props.itemProduct.Item}</span>
      <span> {props.itemProduct.Price} $</span>
      <span> {props.itemProduct.Description}</span>
    </span>
  );
};
