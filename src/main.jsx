import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider as Router,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import ProductDetails from "./pages/Product-Detail/ProductDetails.jsx";
import { ProductContext, ProductProvider } from "./context/ProductContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import Cart from "./components/cart/Cart.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import Login from "./pages/Login/Login.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:category" element={<Products />} />
      <Route path="/product/:productId" element={<ProductDetails />} />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProductProvider>
      <CartProvider>
        <Router router={router} />
      </CartProvider>
    </ProductProvider>
  </AuthProvider>,
);
