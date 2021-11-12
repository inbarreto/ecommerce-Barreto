import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import React from "react";

export const ItemDetail = ({
  itemProduct: { Id, Imagen, Item, Description, Price, Stock },
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
        <ItemCount itemProduct={{ Id, Stock, Description, Price }} />
      </span>
    </div>
  );
};
