import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product/Product";

const Inventory = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://protected-badlands-97400.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleClick = () => {
    navigate("/addItem");
  };
  return (
    <div className="bg-black p-3">
      <button onClick={handleClick} className="btn btn-warning fw-bold">
        Add Item
      </button>
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Inventory;
