import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductUpdate = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const url = `https://protected-badlands-97400.herokuapp.com/product/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="pt-5">
      <img className="img-fluid" src={product.img} alt="" />
      <h2>{product.name}</h2>
    </div>
  );
};

export default ProductUpdate;
