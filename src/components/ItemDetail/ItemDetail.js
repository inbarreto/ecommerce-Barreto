import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = (props) => {
  console.log(props);

  if (props == null) return;
  return (
    <span className="itemProduct">
      <span>{<img src={props?.itemProduct?.Imagen} alt="product"></img>}</span>
      <span>{props?.itemProduct?.Item}</span>
      <span> {props?.itemProduct?.Price} $</span>
      <span> {props?.itemProduct?.Description}</span>
      <span>
        <ItemCount
          name={props?.itemProduct?.Item}
          stock={props?.itemProduct?.Stock}
        />
      </span>
    </span>
  );
};
