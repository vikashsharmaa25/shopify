import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/CartSlice";
import { Avatar, Badge } from "antd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling

function Product({ item }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addtoCart = () => {
    dispatch(addCart(item));
    toast.success("Add to Cart successfully", {
      position: "top-center",
    });
  };

  return (
    <>
      <div className="max-w-[350px] min-h-[600px] flex  flex-col justify-center items-center px-8 shadow-md hover:shadow-2xl hover:scale-110 transition-transform duration-300 ease-in rounded relative">
        <div className="text-2xl font-semibold text-slate-700">
          {item.title.split(" ").slice(0, 3).join(" ") + "..."}
        </div>
        <div className="text-slate-600 py-2 px-4">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </div>
        <img src={item.image} alt="" className="max-h-[350px] min-h-[350px] " />
        <div className="absolute bottom-24 right-10">
          <Badge>
            <Avatar
              shape="circle"
              size="large"
              style={{ background: "#f5222d" }}
            >
              {`$ ${item.price}`}
            </Avatar>
          </Badge>
        </div>
        <button
          className="bg-green-600 text-white font-semibold hover:bg-green-700 duration-300 w-full py-1 mt-10 rounded-full"
          onClick={addtoCart}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}

export default Product;
