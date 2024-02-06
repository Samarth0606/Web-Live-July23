import React from "react";
import Hookss from "./components/Hookss";
import CaseTwo from "./components/CaseTwo";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";

function App() {
  // let navigate = useNavigate();
  // function handleClick1() {
  //   // location.href = "/"; //not valid in react -> refresh krdeta hai
  //   navigate("/");
  // }
  // function handleClick2() {
  //   // window.location.href = "/product";
  //   navigate("/product");
  // }
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Nav() {
  let navigate = useNavigate();
  function handleClick1() {
    navigate("/");
  }
  function handleClick2() {
    navigate("/product");
  }
  return (
    <div>
      <div style={{ backgroundColor: "lightgray", color: "black" }}>
        Navbar hu mai
        <button onClick={handleClick1}>Home</button>
        <button onClick={handleClick2}>Products</button>
      </div>
    </div>
  );
}

export default App;
