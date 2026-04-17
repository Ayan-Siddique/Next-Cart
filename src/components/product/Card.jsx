import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>

      <div className="group cursor-pointer">

        {/* Image Section */}
        <div className="relative w-full h-64 overflow-hidden bg-gray-100">
          
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
          />

          {/* Rating Badge */}
          <div className="absolute bottom-2 left-2 bg-white px-2 py-1 text-xs flex items-center gap-1 shadow">
            ⭐ {product.rating.rate} | {product.rating.count}
          </div>

        </div>

        {/* Info */}
        <div className="mt-2 px-1">

          {/* Brand (fake from title) */}
          <h3 className="font-semibold text-sm">
            {product.title.split(" ")[0]}
          </h3>

          {/* Title */}
          <p className="text-sm text-gray-600 truncate">
            {product.title}
          </p>

          {/* Price */}
          <div className="flex items-center gap-2 mt-1 text-sm">
            <span className="font-semibold">${product.price}</span>
            
          </div>

        </div>

      </div>

    </Link>
  );
};

export default ProductCard;