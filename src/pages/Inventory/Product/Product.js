import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    const url = `/inventory/${id}`;
    navigate(url);
  };
  return (
    <div>
      <div className="d-md-flex border rounded border-primary m-3 p-3 bg-dark text-warning align-items-center">
        <img
          className="rounded  img-fluid"
          style={{ height: "200px" }}
          src={product.img}
          alt=""
        />
        <div className="text-start ms-3">
          <h3>
            <span>{product.name}</span>
          </h3>
          <p>
            Price: <span>{product.price}</span>
          </p>
          <p>
            Available: <span>{product.quantity}</span>
          </p>
          <p>
            Supplier: <span>{product.supplier_name}</span>
          </p>
          <p>
            <span>{product.description}</span>
          </p>
        </div>
        <div>
          <button
            className="d-md-flex align-items-center"
            onClick={() => handleNavigate(product._id)}
          >
            <FontAwesomeIcon
              className="mx-1"
              icon={faArrowTrendUp}
            ></FontAwesomeIcon>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
