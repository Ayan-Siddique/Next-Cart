import React, { useContext, useState } from "react";
import Card from "../../components/product/Card";
import { ProductContext } from "../../context/ProductContext";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Products = () => {
  const { category } = useParams();
  const { products, loading, debouncedSearch } = useContext(ProductContext);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category
      ? product.category.toLowerCase().includes(category.toLowerCase())
      : true;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (loading) return <p>Loading...</p>;
  return (
    <div className="w-full bg-white">
      {/* 📦 Page Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* 🔥 Heading */}
        <h1 className="text-xl md:text-2xl font-semibold mb-6">All Products</h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* 🧭 Sidebar Filters */}
          <aside className="w-full md:w-1/4 border p-4 h-fit">
            <h2 className="font-semibold mb-3">Filters</h2>

            <div className=" flex flex-col space-y-3 text-sm">
              <NavLink
                to="/products/men"
                className="cursor-pointer hover:text-pink-500"
              >
                Men
              </NavLink>
              <NavLink
                to="/products/women"
                className="cursor-pointer hover:text-pink-500"
              >
                Women
              </NavLink>
              <NavLink
                to="/products/jewelery"
                className="cursor-pointer hover:text-pink-500"
              >
                jewelery
              </NavLink>
              <NavLink
                to="/products/electronics"
                className="cursor-pointer hover:text-pink-500"
              >
                Electronics
              </NavLink>
            </div>
          </aside>

          {/* 🛍️ Product Grid */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* 🔁 Product Card */}
              {filteredProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
