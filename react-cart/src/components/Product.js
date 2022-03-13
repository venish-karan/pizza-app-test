import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { CartContext } from "../CartContext";

const Product = (props) => {
  const [isAdding, setIsAdding] = useState(false);

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
    setIsAdding(true);

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);

    // const cart = {
    //   items: {

    //   },
    //   totalItems: 5,
    // };
  };
  // className="border-solid border-4 rounded-md p-4"
  return (
    <Link to={`/products/${product._id}`}>
      <div>
        <img className="rounded-full" src={product.image} alt="pizza" />
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{product.name}</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            {product.size}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4 font-bold">
          <span>₹ {product.price}</span>
          <button
            disabled={isAdding}
            onClick={(e) => {
              addToCart(e, product);
            }}
            className={`${
              isAdding ? "bg-green-500" : "bg-yellow-500"
            } py-1 px-4 rounded-full font-bold`}
          >
            ADD{isAdding ? "ED" : ""}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
