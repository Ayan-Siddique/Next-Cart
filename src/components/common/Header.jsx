import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

// ===== import contexts =====
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  const { search, setSearch } = useContext(ProductContext);

  // ======= hover and active class for navlinks =======

  const navClass = ({ isActive }) =>
    `relative pb-1 transition 
   after:content-[''] after:absolute after:left-0 after:bottom-0 
   after:h-[2px] after:bg-pink-500 after:transition-all after:duration-300
   ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;
  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left Section */}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <div className="text-2xl font-bold text-pink-500 cursor-pointer">
                NEXT CART
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-5 text-sm font-semibold text-gray-700">
                <NavLink to="/" className={navClass}>
                  Home
                </NavLink>

                <NavLink to="/products" className={navClass}>
                  Shop
                </NavLink>

                <NavLink to="/products/men" className={navClass}>
                  Men
                </NavLink>

                <NavLink to="/products/women" className={navClass}>
                  Women
                </NavLink>

                <NavLink to="/products/jewelery" className={navClass}>
                  Jewelery
                </NavLink>

                <NavLink to="/products/electronics" className={navClass}>
                  Electronics
                </NavLink>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 mx-6">
              <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md w-full max-w-xl">
                <input
                  value={search}
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="bg-transparent outline-none text-sm w-full"
                  onChange={(e) => {
                    e.preventDefault();
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="hidden md:flex items-center gap-6 text-xs text-gray-700">
              <div className="flex  flex-col items-center cursor-pointer hover:text-pink-500">
                <span className="text-lg">
                  <FaUser />
                </span>
              </div>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `relative flex flex-col items-center cursor-pointer ${
                    isActive ? "text-pink-500" : "hover:text-pink-500"
                  }`
                }
              >
                {/* Icon */}
                <span className="text-lg">
                  <FaCartShopping />
                </span>

                {/* Badge */}
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-[10px] px-1.5 rounded-full">
                    {cart.length}
                  </span>
                )}
              </NavLink>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button className="text-2xl">☰</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
