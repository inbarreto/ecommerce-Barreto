import { useState, useEffect } from "react";
import "./ItemCount.css";
export const ItemCount = (props) => {
  const [counter, setCounter] = useState(0);
  const [itemsToAdd, setItemsToAdd] = useState(props.initial | 1);
  const [buttonAdd, changeButtonAdd] = useState(false);
  const [buttonRest, changeButtonRest] = useState(false);
  useEffect(() => {
    changeButtonAdd(counter + itemsToAdd > props.stock ? true : false);
    changeButtonRest(counter > 0 ? false : true);
  }, [counter, itemsToAdd]);

  const add = () => {
    setCounter(counter + itemsToAdd);
  };

  const changeItems = (value) => {
    setItemsToAdd(value);
  };

  const rest = () => setCounter(counter - 1);
  return (
    <div className="itemName">
      <p>
        <b>{props.name} </b>
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
    </div>
  );
};
