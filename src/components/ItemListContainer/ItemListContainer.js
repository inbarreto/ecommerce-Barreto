import { ItemCount } from "../ItemCount/ItemCount";

export const ItemListContainer = (props) => {
  return (
    <div>
      <span>{props.greeting}</span>
      <ItemCount stock="5" name="Pantalon" initial="1" />
    </div>
  );
};
