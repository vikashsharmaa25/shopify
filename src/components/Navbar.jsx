import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Avatar, Badge } from "antd";

function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <>
      <div className="bg-green-600 flex justify-between items-center px-10 py-4">
        <div className="text-white font-bold text-2xl">Shopify</div>
        <div className="text-white flex justify-center items-center gap-8 text-xl font-medium">
          <NavLink to="/">Home</NavLink>
          <div className="relative">
            <NavLink to="/cart">
              <AiOutlineShoppingCart />
              <div>
                {cart.length > 0 && (
                  <div className="absolute -top-5 -right-5">
                    <Badge>
                      <Avatar
                        shape="circle"
                        size="small"
                        style={{ background: "#f5222d" }}
                      >
                        {cart.length}
                      </Avatar>
                    </Badge>
                  </div>
                )}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
