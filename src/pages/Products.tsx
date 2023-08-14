import ProductsList from "../components/ProductsList";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateTepmCardIds } from "../store/user/userSlice";

interface Product {
  id: number;
  productName: string;
  image: string;
  price: string;
  discount: string;
  category: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartIds, setCartIds] = useState<number[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddProduct = (id: number) => {
    setCartIds((pre) => [...pre, id]);
  };
  const handleClick = () => {
    dispatch(updateTepmCardIds(cartIds));
    navigate("/basket");
  };
  useEffect(() => {
    fetch("http://localhost:8080/products/items")
      .then((res) => res.json())
      .then((items) => setProducts(items));
  }, []);

  return (
    <div>
      <ProductsList products={products} onHandleAdd={handleAddProduct} />
      <button onClick={handleClick}>Go to Basket</button>
    </div>
  );
};
export default Products;