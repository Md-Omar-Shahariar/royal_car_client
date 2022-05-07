import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog/Blog";
import Footer from "./pages/Home/Footer/Footer";
import Header from "./pages/Home/Header/Header";
import Home from "./pages/Home/Home/Home";
import Inventory from "./pages/Inventory/Inventory";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import MyItem from "./pages/MyItem/MyItem";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://protected-badlands-97400.herokuapp.com/service")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/myItem" element={<MyItem></MyItem>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
