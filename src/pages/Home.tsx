import ProductsList from "components/ProductsList";
import React, { useEffect, useState } from "react";
import ProductsHome from "../components/ProductsHome";
import { useNavigate } from "react-router-dom";
import { selectData } from "../store/user/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const selectedData = useSelector(selectData);
  const { email } = selectedData;
  useEffect(() => {
    fetch("http://localhost:8080/products/items")
      .then((res) => res.json())
      .then((items) => setProducts(items));
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
