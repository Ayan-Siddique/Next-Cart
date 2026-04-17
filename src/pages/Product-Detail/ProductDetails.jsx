import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
import React, { useContext } from "react";

const ProductDetails = () => {
  const { productId } = useParams();

  // ====== Contexts =====

  const { products, loading } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // ===== Loading & Product Not Found States =====

  if (loading || !products.length) {
    return <div className="p-10">Loading...</div>;
  }

  const product = products.find((prod) => prod.id === Number(productId));
  console.log(product);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    console.log("Added to cart:", product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* 🖼️ Image */}
        <div className="w-full md:w-1/2">
          <div className="bg-gray-100 p-4 rounded-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[350px] md:h-[450px] object-contain"
            />
          </div>
        </div>

        {/* 📦 Info */}
        <div className="w-full md:w-1/2">
          {/* Title */}
          <h1 className="text-lg md:text-2xl font-semibold">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-green-500 text-white px-2 py-1 text-xs rounded">
              {product.rating.rate} ★
            </span>
            <span className="text-sm text-gray-600">
              {product.rating.count} Ratings
            </span>
          </div>

          {/* Price */}
          <div className="mt-4">
            <span className="text-xl md:text-2xl font-bold">
              ${product.price}
            </span>
            <span className="ml-2 text-pink-500 text-sm">(40% OFF)</span>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* 🔥 Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="bg-pink-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-pink-600 transition w-full sm:w-auto"
            >
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
