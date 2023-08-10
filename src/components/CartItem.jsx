import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeCart } from "../redux/CartSlice";

function CartItem({ item, itemIndex }) {
  //   const { cart } = useSelector();
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeCart(item));
  };

  return (
    <>
      <div className="md:flex md:text-start text-center justify-center  items-center py-5">
        <img src={item.image} alt="" className="max-w-[300px] p-10 mx-auto" />
        <div className="px-4">
          <h1 className="text-slate-700 font-bold text-2xl py-2">
            {item.title}
          </h1>
          <div className="text-slate-600 text-xl py-2">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </div>
          <div className="flex justify-between items-center mt-10">
            <p className="text-xl text-slate-700 font-semibold">{`$ ${item.price}`}</p>
            <button
              onClick={removeFromCart}
              className="bg-red-500 hover:bg-red-700 duration-300  hover:shadow-slate-500 rounded-full p-3 shadow-slate-300 shadow-lg "
            >
              <MdDelete className="text-xl text-white hover:scale-150 transition-transform duration-300 ease-in" />
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CartItem;
