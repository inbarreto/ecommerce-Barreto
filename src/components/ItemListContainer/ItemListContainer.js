import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import Pants from "./../../Data/pants.json";
import Shoes from "./../../Data/shoes.json";

export const ItemListContainer = (props) => {
  const [listPants, setPants] = useState(null);
  const [listShoes, setShoes] = useState(null);

  useEffect(() => {
    getData(Pants)
      .then((res) => {
        setPants(res);
      })
      .then((res) => {
        getData(Shoes).then((res) => {
          setShoes(res);
        });
      })
      .catch((err) => console.log(err));
  }, [setPants, setShoes]);

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

  return (
    <div className="itemList">
      <span>{props.greeting}</span>
      <ul>
        <ItemList itemProduct={listPants} />
      </ul>
      <ul>
        <ItemList itemProduct={listShoes} />
      </ul>
    </div>
  );
};
