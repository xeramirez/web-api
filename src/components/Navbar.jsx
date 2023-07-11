import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useCartContext } from "../provider/CartProvider";
const NavBar = () => {

    const {
        state: { totalItem },
      } = useCartContext();
  return (
    
    <nav className="h-20 w-full bg-black p-4 flex justify-between text-white items-center">
      <Link to="/">

        <span>FakeStore</span>
      </Link>
      
      <Link to="/carrito " >
        <span>Carrito ({totalItem})</span>
      </Link>
    </nav>
  );
};

export default NavBar;