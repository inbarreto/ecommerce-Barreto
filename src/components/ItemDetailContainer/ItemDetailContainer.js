import "./ItemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import dataJson from "./../../Data/data.json";
import { useParams } from "react-router";
export const ItemDetailContainer = (props) => {
  const [listData, setData] = useState(null);

  const { itemId } = useParams();

  const getItem = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 1000);
    });

  useEffect(() => {
    getItem(dataJson)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  });
  console.log(itemId);
  return (
    <>
      {listData && (
        <ItemDetail
          itemProduct={
            listData
              ? listData?.find((item) => Number(item.Id) === Number(itemId))
              : listData
          }
        >
          {" "}
        </ItemDetail>
      )}
    </>
  );
};
