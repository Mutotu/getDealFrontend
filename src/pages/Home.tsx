
import React, { useEffect, useState } from "react";
import ProductsHome from "../components/ProductsHome";
import { useNavigate } from "react-router-dom";
import { selectData } from "../store/user/userSlice";
import { useSelector } from "react-redux";
import { BASE_URL } from "../CONSONANTS"

interface Product {
  id: number;
  name: string;
  image: string;
  photoLink?: string,
  price: string;
  discount: string;
  category: string;
}
const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const selectedData = useSelector(selectData);
  const { email } = selectedData;
  useEffect(() => {
    fetch(BASE_URL + "/products/items")
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
