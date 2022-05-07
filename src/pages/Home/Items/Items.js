import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../../Inventory/Product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Items = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://protected-badlands-97400.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2>Items</h2>
      {products.slice(0, 6).map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
      <Link className="" style={{ textDecoration: "none" }} to={"/inventory"}>
        <div className="d-flex align-items-center justify-content-end me-3 text-warning">
          <span className="mx-3">Manage Inventory</span>
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </div>
      </Link>
    </div>
  );
};

export default Items;
