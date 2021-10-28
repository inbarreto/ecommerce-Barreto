import { ItemCount } from "../ItemCount/ItemCount";
import "./Item.css";

export const Item = (props) => {
  return (
    <span className="itemProduct">
      <span>
        <img src={props.itemProduct.Imagen} alt="product"></img>
      </span>
      <span>{props.itemProduct.Item}</span>
      <span> {props.itemProduct.Price} $</span>
      <span> {props.itemProduct.Description}</span>
      <span>
        <ItemCount
          name={props.itemProduct.Item}
          stock={props.itemProduct.Stock}
        />
      </span>
    </span>
  );
};
