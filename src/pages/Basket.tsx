import { selectData } from "../store/user/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCart, clearTepmCardIds, updateTepmCardIds } from "../store/user/userSlice";
import { useEffect, useState } from "react";
import { Product } from "../interfaces"


const requestOptions: any = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "authorization": ""
  },
  body: null
}

const Basket = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedData = useSelector(selectData);
  const { id, tempCartIds, token } = selectedData;
  const handleClick = () => {
    requestOptions.headers.authorization = "Bearer " + token
    for (let i = 0; i < tempCartIds.length; i++) {
      const body = {
        userId: id,
        quantity: 1,
        extraDetail: "Extra stuff",
        productId: tempCartIds[i]
      };
      requestOptions.body = JSON.stringify(body)
      fetch("http://localhost:8080/products/carts", requestOptions).then((res) => res.json())
        .then((r) => {
          dispatch(updateCart(r));
        });
    }
    dispatch(clearTepmCardIds());
    navigate("/payment");
  };
  const handleRemove = () => {
    dispatch(clearTepmCardIds());
  }
  const handleSingleRemove = (id: number) => {
    const remaingingItems = tempCartIds.filter(p => p !== id)
    dispatch(updateTepmCardIds(remaingingItems));

  }
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
  }, [tempCartIds]);

  return (
    <div className="basket-content">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="basket-item">
            <img className="product-image" src={product.photoLink} alt="Product" />
            <p className="product-name">Product: {product.name}</p>
            <p className="product-discount">Discount: %{product.discount}</p>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-category">Category: {product.category}</p>
            <button onClick={() => handleSingleRemove(product.id)}>X</button>
          </div>
        ))
      ) : (
          <div className="empty-basket">
            <h4>Empty Basket</h4>
            <img
              className="empty-basket-image"
              src="https://cdn3.vectorstock.com/i/1000x1000/48/52/empty-basket-icon-vector-6924852.jpg"
              alt="Empty bin"
            />
          </div>
        )}
      {products.length > 0 && (
        <div className="basket-summary">
          <p className="total-saving">
            Total Saving: $
          {products.reduce((acc, curVal) => {
            acc += Number(curVal.discount);
            return acc;
          }, 0)}
          </p>
          <p className="total">
            Total: $
          {products.reduce((acc, curVal) => {
            acc += Number(curVal.price);
            return acc;
          }, 0)}
          </p>
          <button className="buy-button" onClick={() => handleClick()}>
            Continue to Buy
        </button>
          <button className="remove-button" onClick={handleRemove}>
            Remove Items
        </button>
        </div>
      )}
    </div>

  );
};

export default Basket;
