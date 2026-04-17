import axios from "axios";

export const getAllProducts = () =>
  axios.get("https://fakestoreapi.com/products");