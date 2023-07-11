import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import ProductItem from "../components/ProductItem";
import { useCartContext } from "../provider/CartProvider";
const Detail = () => {
    const [products, setProducts] = useState([]);
    const {id} = useParams();
    const { getSingleProduct } = useAPI();

    const { dispatch } = useCartContext();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: products });
    alert("Producto añadido a carrito");
  };
    useEffect(() => {
        getSingleProduct(id).then((producto) => {
            console.log (producto) 
            setProducts(producto)
            console.log(products)
        });
    }, []);
  
    return (
        
      <section className="w-full min-h-[800px] flex justify-center">
        <div className="container flex flex-col items-center p-4">
          <h1 className="font-bold text-3xl center p-4">{products.title}</h1><br />
          <div className="flex flex-wrap gap-4"><br />
           <br />
           <div class="text-center">
            <img
                src={products.image}
                class="mx-auto h-auto max-w-sm rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
                alt={products.title} 
                
              />
               {products.description} <br />
 <button className="mx-48 h-auto max-w-sm bg-slate-900 hover:bg-slate-600 text-white rounded-md p-10 mt-1" onClick={addToCart}>
        Añadir a carrito
      </button>
            <div className= "w-100 min-h-[200px] flex justify-center">
            </div>
           </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Detail;