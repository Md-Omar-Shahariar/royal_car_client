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
    <div className="pt-5 bg-black text-warning ">
      <div className="container py-3">
        <img className="img-fluid" src={product.img} alt="" />
        <div className="py-3">
          <h2>{product.name}</h2>
          <p>
            <span>Amount: {product.price}</span>
          </p>
          <p>
            <span>Quantity: {product.quantity}</span>
          </p>
          <p>
            <span>Supplier: {product.supplier_name}</span>
          </p>
          <p>
            <span>{product.description}</span>
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="pe-2 d-flex">
            <form action="">
              <input className="me-3" type="number" name="re-stock" id="" />
              <input
                className="btn btn-warning fw-bold"
                type="submit"
                value="Re-Stock"
              />
            </form>
          </div>
          <button className="btn btn-warning fw-bold">Delivered</button>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
