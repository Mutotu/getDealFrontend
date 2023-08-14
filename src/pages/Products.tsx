import ProductsList from "../components/ProductsList";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateTempCardByOneId } from "../store/user/userSlice";
import { Product } from "../interfaces"

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddProduct = (id: number) => {
    dispatch(updateTempCardByOneId(id))
  };
  const handleClick = () => {
    navigate("/basket");
  };
  useEffect(() => {
    fetch("http://localhost:8080/products/items")
      .then((res) => res.json())
      .then((items) => setProducts(items));
  }, []);

  return (
    <div className="products-container">
      <h1>Products</h1>
      <ProductsList products={products} onHandleAdd={handleAddProduct} />
      <button className="basket-button" onClick={handleClick}>
        Go to Basket
      </button>
    </div>
  );
};
export default Products;