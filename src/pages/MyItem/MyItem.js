import React, { useEffect, useState } from "react";
import Product from "../Inventory/Product/Product";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const MyItem = () => {
  const [user] = useAuthState(auth);

  const [products, setProducts] = useState([]);
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    function fe() {
      fetch("https://protected-badlands-97400.herokuapp.com/product")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setFlag(1);
        });
    }
    fe();
  }, []);

  const myProduct = products.filter((p) => p.gmail === user?.email);

  //   const filter = products.filter(product =>{
  //       if(product.email == )
  //   })

  return (
    <div>
      {!flag && (
        <>
          <div className="con">
            <span>~ My Items ~</span>
          </div>
          <Loading></Loading>
        </>
      )}
      {flag && (
        <>
          <div className="bon">
            <span>~ My Items ~</span>
          </div>
          {myProduct.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </>
      )}
    </div>
  );
};

export default MyItem;
