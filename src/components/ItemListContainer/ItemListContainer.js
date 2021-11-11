import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import dataJson from "./../../Data/data.json";
import { useParams } from "react-router";
export const ItemListContainer = (props) => {
  const [listData, setData] = useState(null);

  const { categoryId } = useParams();
  console.log(categoryId);
  useEffect(() => {
    getData(dataJson)
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, [listData]);

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
        <ItemList
          itemProduct={
            listData && categoryId
              ? listData?.filter(
                  (item) => Number(item.CategoryId) === Number(categoryId)
                )
              : listData
          }
        />
      </ul>
    </div>
  );
};
