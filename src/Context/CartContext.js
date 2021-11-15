import { createContext, useState } from "react";

export const Context = createContext();
export const CartContext = ({ defaultValues = [], children }) => {
  const [cart, setCart] = useState(defaultValues);
  //console.log(defaultValues);
  const addItem = (obj) => {
    console.log(cart);

    const item = cart?.map((item) => item.Id).indexOf(obj.Id);
    console.log(item);
    //console.log(cart);
    if (item !== null && item !== -1) {
      const updatedItem = { ...cart[item] }; //cart.indexOf((item) => Number(item.Id) == Number(obj.Id));

      updatedItem.Stock = obj.Stock - obj.counter;
      cart[item] = updatedItem;
    } else {
      setCart([...cart, obj]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => Number(item.Id) !== Number(id)));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    cart.Any((cart) => Number(cart.Id) == Number(id));
  };

  return (
    <Context.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </Context.Provider>
  );
};
