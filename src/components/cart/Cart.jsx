import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
      <h1 className="text-xl md:text-2xl font-semibold mb-6">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* 🛍️ Cart Items */}
        <div className="flex-1 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-4 border p-4 rounded-md"
            >
              {/* Image */}
              <div className="w-full sm:w-32 h-32 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className="text-sm font-semibold line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-sm mt-1">₹{Math.round(item.price * 80)}</p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => updateQuantity(item.id, "dec")}
                    className="border px-2 py-1"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, "inc")}
                    className="border px-2 py-1"
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm mt-3"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 💰 Summary */}
        <div className="w-full lg:w-1/3 border p-4 rounded-md h-fit">
          <h2 className="font-semibold mb-4">Price Details</h2>

          <div className="flex justify-between text-sm mb-2">
            <span>Total</span>
            <span>₹{Math.round(totalPrice * 80)}</span>
          </div>

          <button className="w-full mt-4 bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
