import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
export const ItemDetail = ({
  itemProduct: { Imagen, Item, Description, Price, Stock },
}) => {
  return (
    <div className="itemProductDetail">
      <span>{<img src={Imagen} alt="product"></img>}</span>
      <p>
        <b>{Item}</b>
      </p>

      <p> {Description}</p>
      <p> {Price} $</p>
      <span>
        <ItemCount name={Description} stock={Stock} />
      </span>
    </div>
  );
};
