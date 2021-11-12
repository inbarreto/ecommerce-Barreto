import { createContext, useState } from "react";

export const Context = createContext();
export const CartContext = ({ defaultValues = [], children }) => {
  const [cart, setCart] = useState(defaultValues);
  //console.log(defaultValues);
  const addItem = (obj) => {
    setCart([...cart, obj]);
    console.log(cart);
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
