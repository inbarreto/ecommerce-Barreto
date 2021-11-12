import { useContext, useState, useEffect } from "react";
import "./ItemCount.css";
import { Context } from "./../../Context/CartContext";

export const ItemCount = ({
  itemProduct: { Id, Item, Description, Price, Stock },
}) => {
  const [counter, setCounter] = useState(0);
  const [itemsToAdd, setItemsToAdd] = useState(1);
  const [buttonAdd, setButtonAdd] = useState(false);
  const [buttonRest, setButtonRest] = useState(false);
  useEffect(() => {
    setButtonAdd(counter + itemsToAdd > Stock ? true : false);
    setButtonRest(counter > 0 ? false : true);
  }, [counter, itemsToAdd, Stock]);

  const cartContext = useContext(Context);
  //console.log(cartContext.clear());

  const add = () => {
    setCounter(counter + itemsToAdd);
  };

  const changeItems = (value) => {
    setItemsToAdd(value);
  };
  const addProduct = () => {
    console.log(Id, Price, counter);
    cartContext.addItem({ Id, Price, counter, Stock });
  };

  const rest = () => setCounter(counter - 1);
  return (
    <div className="itemName">
      <p>
        <b>{Description} </b>
      </p>
      <p>
        {" "}
        <input
          type="text"
          name="name"
          value={itemsToAdd}
          onChange={(e) => changeItems(Number(e.target.value))}
        />{" "}
      </p>

      <button onClick={rest} disabled={buttonRest}>
        {" "}
        -{" "}
      </button>
      <span>{counter} </span>

      <button onClick={add} disabled={buttonAdd}>
        {" "}
        +
      </button>
      <div className="btnComprar">
        <button onClick={addProduct}> COMPRAR </button>
      </div>
    </div>
  );
};
