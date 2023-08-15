
import React, { useEffect, useState } from "react";
import ProductsHome from "../components/ProductsHome";
import { useNavigate } from "react-router-dom";
import { selectData } from "../store/user/userSlice";
import { useSelector } from "react-redux";


interface Product {
  id: number;
  name: string;
  image: string;
  photoLink?: string,
  price: string;
  discount: string;
  category: string;
}
interface ProductItem {
  category: string;
  createdAt: string;
  discount: string;
  id: number;
  name: string;
  image: string;
  price: string;
  photoLink?: string,
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const selectedData = useSelector(selectData);
  const { email } = selectedData;
  useEffect(() => {
    fetch("http://localhost:8080/products/items")
      .then((res) => res.json())
      .then((items) => {
        const newItems = items.slice(50)
        setProducts(newItems)
      });
  }, []);

  const navigation = useNavigate();
  return (
    <div>
      {!email ? (
        <div onClick={() => navigation("/login")}>
          <ProductsHome products={products} />{" "}
        </div>
      ) : (
          <div onClick={() => navigation("/products")}>
            <ProductsHome products={products} />
          </div>
        )}
    </div>
  );
};

export default Home;
