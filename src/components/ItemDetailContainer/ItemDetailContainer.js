import "./ItemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import Pants from "./../../Data/pants.json";

export const ItemDetailContainer = (props) => {
  const [listPants, setPants] = useState(null);
  const [listShoes, setShoes] = useState(null);

  const getItem = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 1000);
    });

  useEffect(() => {
    getItem(Pants)
      .then((res) => setPants(res))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <ItemDetail itemProduct={listPants != null ? listPants[0] : null}>
        {" "}
      </ItemDetail>
    </>
  );
};
