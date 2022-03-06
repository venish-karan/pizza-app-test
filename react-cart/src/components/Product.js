import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../CartContext";

const Product = (props) => {
  const { cart, setCart } = useContext(CartContext);

  // console.log(props);
  // object destructuring
  const { product } = props;

  const addToCart = (event, product) => {
    // here preventDefault() stops the page from redirecting to cart
    // page and stopPropogation()
    event.preventDefault();
    // console.log(event);

    // _cart local storage
    let _cart = { ...cart }; // ...cart cloning

    if (!_cart.items) {
      _cart.items = {};
    }

    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;

    setCart(_cart);

    // const cart = {
    //   items: {

    //   },
    //   totalItems: 5,
    // };
  };
  return (
    <Link to={`/products/${product._id}`}>
      <div>
        <img src={product.image} alt="pizza" />
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{product.name}</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            {product.size}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4 font-bold">
          <span>₹ {product.price}</span>
          <button
            onClick={(e) => {
              addToCart(e, product);
            }}
            className="bg-yellow-500 py-1 px-4 rounded-full font-bold"
          >
            ADD
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
