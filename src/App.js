import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./pages/Home/Footer/Footer";
import Header from "./pages/Home/Header/Header";
import Home from "./pages/Home/Home/Home";

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
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/myItem" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
