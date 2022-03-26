import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  // console.log(params);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, [params._id]); // if second parameter is empty then it will run for atleast ones
  return (
    <div className="container mx-auto mt-12">
      <button
        className="font-bold mb-12"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
      <div className="flex">
        <img src={product.image} alt="pizza" />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="text-md">{product.size}</div>
          <div className="mt-2 font-bold">₹{product.price}</div>

          {/* <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">
            Add to cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
