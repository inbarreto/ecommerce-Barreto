import "./ItemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";

export const ItemDetailContainer = (props) => {
  const [listPants, updatePants] = useState(null);
  const [listShoes, updateShoes] = useState(null);

  useEffect(() => {
    getItem();
  }, [listPants, listShoes]);

  const getItem = () => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    task
      .then(
        (result) => {
          updatePants([
            {
              Id: 1,
              Price: 120,
              Item: "Wranglers",
              Description: "Lose",
              Imagen:
                "https://media.everlane.com/image/upload/c_fill,dpr_2.0,f_auto,g_face,q_auto,w_auto:100:702/v1/i/613846fc_009d.jpg",
              Stock: 1,
            },
            {
              Id: 2,
              Price: 340,
              Item: "Lacoste",
              Description: "Fit",
              Imagen:
                "https://images.asos-media.com/products/nike-city-made-pack-woven-cargo-pants-in-black/21456879-1-black?$n_640w$&wid=513&fit=constrain",
              Stock: 1,
            },
          ]);

          updateShoes([
            {
              Id: 3,
              Price: 110,
              Item: "Nike",
              Description: "Lose",
              Imagen:
                "https://assets.kogan.com/files/IT_hardware_products/NIK-BQ3204-002-8-1.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753",
              Stock: 1,
            },
            {
              Id: 4,
              Price: 120,
              Item: "Adidas",
              Description: "Fit",
              Imagen:
                "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/168bdd9ab43041158653a800001d546a_9366/Seeley_Shoes_Black_F37427_01_standard.jpg",
              Stock: 1,
            },
          ]);
        },
        (err) => {}
      )
      .catch((err) => {})
      .finally((err) => {
        console.log(listPants);
      });
  };
  return (
    <>
      <ItemDetail itemProduct={listPants}> </ItemDetail>
    </>
  );
};
