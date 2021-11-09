import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
export const ItemDetail = (props) => {
  if (props == null) return;

  return (
    <div className="itemProductDetail">
      <span>{<img src={props?.itemProduct?.Imagen} alt="product"></img>}</span>
      <p>
        <b>{props?.itemProduct?.Item}</b>
      </p>

      <p> {props?.itemProduct?.Description}</p>
      <p> {props?.itemProduct?.Price} $</p>
      <span>
        <ItemCount
          name={props?.itemProduct?.Description}
          stock={props?.itemProduct?.Stock}
        />
      </span>
    </div>
  );
};
