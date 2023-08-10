import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalamount, setTotalamount] = useState(0);

  useEffect(() => {
    setTotalamount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <>
      <div className="max-w-[1300px] mx-auto p-4">
        <div className="md:flex  justify-center items-center gap-x-10 ">
          {cart.length > 0 ? (
            <>
              <div className="md:w-[65%] overflow-y-auto h-[90vh]">
                {cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))}
              </div>

              <div className="md:w-[35%] md:text-start text-center py-10  px-5">
                <div className="w-full flex  flex-col md:justify-between  md:items-start items-center md:h-[80vh]">
                  <div>
                    <p className="uppercase text-green-700 text-2xl">
                      Your cart
                    </p>
                    <h1 className="text-[6vw] font-bold uppercase text-green-700">
                      summery
                    </h1>
                    <h1 className="py-5 font-semibold">{`Total Items : ${cart.length}`}</h1>
                  </div>
                  <div className="w-full">
                    <div className="w-full ">
                      <p className="text-slate-700 font-bold">
                        Total Amount : {totalamount}
                      </p>
                    </div>
                    <button className="bg-green-600 w-full py-1 mt-5 rounded text-xl text-white font-light capitalize">
                      checkout
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="min-h-[80vh] flex flex-col items-center justify-center gap-5">
                <div className="text-green-700 font-semibold text-3xl uppercase">
                  Empty Cart
                </div>
                <button className="bg-green-600 hover:bg-green-700 duration-300 py-2 px-5 rounded  text-white font-semibold">
                  <NavLink to="/">Show Now</NavLink>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
