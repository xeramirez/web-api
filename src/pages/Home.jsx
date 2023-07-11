import React, { useEffect, useState } from 'react';
import useAPI from '../hooks/useAPI';
import ProductItem from '../components/ProductItem';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { getProducts } = useAPI();

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <section className="w-full min-h-[800px] flex justify-center">
      <div className="container flex flex-col items-center p-4">
        {/* <SearchBar onSearch={handleSearch}products= {products} /> */}
        <input
        type="text"
        name="search"
        placeholder="Buscar productos"
        onChange={(e) => handleSearch(e.target.value)}
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
        <h1 className="font-bold text-3xl">Bienvenido a Fake Store</h1>
        <div className="flex flex-wrap gap-4">
          {filteredProducts.length > 0
            ? filteredProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
            : products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Home;