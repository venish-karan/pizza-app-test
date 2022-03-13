import React from "react";
import Product from "./Product";

import { useState, useEffect } from "react";

const Products = () => {
  // const { name } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    //in package.json we need to mention url
    fetch("https://star-spark-pasta.glitch.me/api/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        console.log(products);
      });
  }, []);

  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-10">
        {
          // map loops through all element
          products.map((product) => (
            // passing property from parent to child (product={product})
            <Product key={product._id} product={product} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
