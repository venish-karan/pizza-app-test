// This is a root component, All other component should pass through this, All other are child components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Router is a component

import Home from "./pages/Home";
// import About from "./pages/About";
import Navigation from "./components/Navigation";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  // this is a component so first letter should be capital
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/about" element={<About />} /> */}
          <Route exact path="/products" element={<Products />} />
          <Route path="/products/:_id" element={<SingleProduct />}></Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
