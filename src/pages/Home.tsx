import ProductsList from "components/ProductsList";
import React, { useEffect, useState } from "react";
import ProductsHome from "../components/ProductsHome";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  productName: string;
  image: string;
  price: string;
  discount: string;
  category: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/products/items")
      .then((res) => res.json())
      .then((items) => setProducts(items));
  }, []);

  const navigation = useNavigate();
  return (
    <div>
      <div>Navigation</div>
      <div onClick={() => navigation("/products")}>
        <ProductsHome products={products} />
      </div>
      {/* <ProductsList products={products} /> */}
    </div>
  );
};

export default Home;
