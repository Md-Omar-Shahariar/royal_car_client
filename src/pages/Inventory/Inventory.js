import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://protected-badlands-97400.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2>Inventory</h2>
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Inventory;
