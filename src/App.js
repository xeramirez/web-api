import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import {CartProvider} from "./provider/CartProvider";
import { CartContextProvider } from "./provider/CartProvider";


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
       <NavBar/>
        <Routes>

          <Route path="/carrito" exact element={<Cart />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/detail/:id" exact element={<Detail />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;