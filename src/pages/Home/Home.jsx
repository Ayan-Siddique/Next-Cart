import React, { useContext } from "react";
import { FaShippingFast, FaPhoneAlt, FaLock } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Card from "../../components/product/Card";

//========== SWIPER JS IMPORTS ===========

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

// ========== END OF SWIPER JS IMPORTS ===========

// ========== Banner IMPORTS ===========

import banner1 from "../../assets/banners/banner1.jpeg";
import banner2 from "../../assets/banners/banner2.jpeg";
import banner3 from "../../assets/banners/banner3.jpeg";
import banner4 from "../../assets/banners/banner4.jpeg";
import { ProductContext } from "../../context/ProductContext";

const banners = [banner1, banner2, banner3, banner4];

const Home = () => {
  const { products } = useContext(ProductContext);

  const limitedProducts = products.slice(0, 8);
  return (
    <div className="w-full bg-white">
      {/* 🎯 Hero Section */}
      <section className="w-full bg-gray-100">
        <Swiper
          direction={"vertical"}
          loop={true}
          speed={800}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          modules={[Pagination, Autoplay]}
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full overflow-hidden">
                <img
                  src={banner}
                  alt={`banner-${index}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ⚡ Features Strip */}
      <section className="border-y bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          <div className="hover:text-pink-500 transition">
            <FaShippingFast className="inline-block mr-2 text-2xl" /> Free
            Shipping
          </div>
          <div className="hover:text-pink-500 transition">
            <FaLock className="inline-block mr-2 text-2xl" /> Secure Payment
          </div>
          <div className="hover:text-pink-500 transition">
            <RiMoneyRupeeCircleFill className="inline-block mr-2 text-2xl" />{" "}
            Money Back
          </div>
          <div className="hover:text-pink-500 transition">
            <FaPhoneAlt className="inline-block mr-2 text-2xl" /> Support
          </div>
        </div>
      </section>

      {/* 🛍️ Category Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <NavLink to="/products/men">
          <div className="bg-gray-200 h-40 flex items-center justify-center hover:scale-105 transition">
            Men's Style
          </div>
        </NavLink>
        <NavLink to="/products/women">
          <div className="bg-gray-200 h-40 flex items-center justify-center hover:scale-105 transition">
            Women's Style
          </div>
        </NavLink>
        <NavLink to={"/products/jewelry"}>
          <div className="bg-gray-200 h-40 flex items-center justify-center hover:scale-105 transition">
            Jewelery
          </div>
        </NavLink>
      </section>

      {/* 🔥 Products Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
          Featured Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {limitedProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Home;
