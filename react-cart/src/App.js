// This is a root component, All other component should pass through this, All other are child components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Router is a component

import Home from "./pages/Home";
// import About from "./pages/About";
import Navigation from "./components/Navigation";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";

import { getCart, storeCart } from "./helpers";

// this is a component so first letter should be capital
const App = () => {
  const [cart, setCart] = useState({});
  // Fetch from local storage

  useEffect(() => {
    getCart().then((cart) => {
      // console.log(JSON.parse(cart));
      setCart(JSON.parse(cart));
    });
  }, []);

  useEffect(() => {
    storeCart(JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/about" element={<About />} /> */}
            <Route exact path="/products" element={<ProductsPage />} />
            <Route path="/products/:_id" element={<SingleProduct />}></Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </Router>
    </>
  );
};

export default App;
