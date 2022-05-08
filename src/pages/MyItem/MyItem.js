import React, { useEffect, useState } from "react";
import Product from "../Inventory/Product/Product";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const MyItem = () => {
  const [user] = useAuthState(auth);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://protected-badlands-97400.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const myProduct = products.filter((p) => p.gmail === user?.email);
  console.log(myProduct);

  //   const filter = products.filter(product =>{
  //       if(product.email == )
  //   })

  return (
    <div>
      <h2>Inventory</h2>
      {myProduct.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default MyItem;
