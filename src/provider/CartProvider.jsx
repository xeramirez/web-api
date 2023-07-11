import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
      case "TOTAL_PRICE":
      return {
        ...state,
        totalPrice: state.cart.reduce(
          (prev, product) => prev + product.price,
          0
        ),
      };
      case "TOTAL_ITEM":
        return {
          ...state,
          totalItem: state.cart.length
        };
     
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    JSON.parse(localStorage.getItem("state")) ?? { cart: [] }
  );

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    dispatch({ type: "TOTAL_PRICE" });
    dispatch({ type: "TOTAL_ITEM" });
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, useCartContext };