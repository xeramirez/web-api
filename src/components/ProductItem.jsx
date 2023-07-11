import { Link } from "react-router-dom";
import { useCartContext } from "../provider/CartProvider";
import NavBar from "./Navbar";

const ProductItem = ({ product }) => {
  const { dispatch } = useCartContext();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    alert("Producto añadido a carrito");
  };

  return (
    <div className="flex flex-col gap-2 rounded-xl bg-white p-4 w-44 items-center">
      <img
        src={product.image}
        className="w-24 h-24 object-cover"
        alt={product.title}
      />
      <h1>{product.title}</h1>
      <span>${product.price}</span>
      <button className="bg-black hover:bg-gray-800 text-white rounded-md p-2 mt-2" onClick={addToCart}>
        Añadir a carrito
      </button>
      <Link to= {`/detail/${product.id}`} className="bg-white hover:bg-gray-800 text-blue rounded-md p-2 mt-2" >
        Detalles
      </Link>
    </div>
  );
};

export default ProductItem;