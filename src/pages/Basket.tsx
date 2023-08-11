import { selectData } from "../store/user/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCart } from "../store/user/userSlice";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  discount: string;
  category: string;
}

const Basket = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedData = useSelector(selectData);
  const { tempCartIds } = selectedData;
  const requestOptions: any = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const handleClick = () => {
    const body = {
      quantity: 1,
      extraDetail: "N/A",
      cartItemId: 3,
      productId: 44,
      product: { id: 2 },
    };
    requestOptions.body = JSON.stringify(body);
    fetch("http://localhost:8080/products", requestOptions)
      .then((res) => res.json())
      .then((r) => {
        console.log(r);
        dispatch(updateCart(r));
      });
    // navigate("/history");
  };
  useEffect(() => {
    fetch("http://localhost:8080/products/items")
      .then((res) => res.json())
      .then((items) => {
        const filteredProducts = items.filter((p: any) => {
          for (let i = 0; i < items.length; i++) {
            if (tempCartIds[i] === p.id) return p;
          }
        });
        setProducts(filteredProducts);
      });
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt='Product' />
            <p>Product: {product.name}</p>
            <p>Discount: %{product.discount}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))
      ) : (
        <div>
          <h4>Empty Basket</h4>
          <img
            style={{ width: "200px" }}
            src={
              "https://cdn3.vectorstock.com/i/1000x1000/48/52/empty-basket-icon-vector-6924852.jpg"
            }
            alt='Empty bin'
          />
        </div>
      )}
      {products.length > 0 && (
        <div>
          <p>
            Total Saving: $
            {products.reduce((acc, curVal) => {
              acc += Number(curVal.discount);
              return acc;
            }, 0)}
          </p>
          <p>
            Total: $
            {products.reduce((acc, curVal) => {
              acc += Number(curVal.price);
              return acc;
            }, 0)}
          </p>
          <button onClick={handleClick}>Continue to Buy</button>
        </div>
      )}
    </div>
  );
};

export default Basket;
