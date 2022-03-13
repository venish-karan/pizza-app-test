import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    if (!cart.items) {
      return;
    }

    fetch("https://star-spark-pasta.glitch.me/api/products/cart-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
  }, [cart]);

  const getQty = (productId) => {
    return cart.items[productId];
  };

  return (
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold">Cart Items</h1>
      <ul>
        {products.map((product) => {
          return (
            <li className="mb-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="h-16 rounded-full"
                    src={product.image}
                    alt=""
                  />
                  <span className="font-bold ml-4 w-48">{product.name}</span>
                </div>
                <div>
                  <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                    -
                  </button>
                  <b className="px-4">{getQty(product._id)}</b>
                  <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                    +
                  </button>
                </div>
                <span>₹{product.price}</span>
                <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="my-6" />
      <div className="text-right">
        <b>Grand Total:</b> ₹100
      </div>
      <div className="text-right mt-6">
        <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
