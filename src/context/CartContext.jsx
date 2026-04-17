import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // ======== Load from localStorage =========
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ====== Save to localStorage whenever cart changes ======
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ====== Add to Cart ======
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        // ======== Increase quantity ========
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      // ======== Add new item ========
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ====== Remove from Cart ======
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ======== Update Quantity ========
  const updateQuantity = (id, type) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (type === "inc") {
            return { ...item, quantity: item.quantity + 1 };
          }
          if (type === "dec" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      }),
    );
  };

  // ========   total price ========
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
