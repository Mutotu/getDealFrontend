import React, { useState } from "react";
import { Product } from "../interfaces"
import { dicountMaker } from "../helperFuncs"
import Popup from "../components/Popup"


interface ProductCartProps {
  product: Product;
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const discountedPrice = dicountMaker(product.price, product.discount)
  const handleClick = () => {
    setPopupVisible(!popupVisible);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (<div key={product.id} className='product-card'>
    <img
      className="product-image"
      style={{ width: "15rem", height: "15rem" }}
      src={product.photoLink}
      alt={product.name}
    />
    <h3 className="product-name">{product.name}</h3>
    <p className="product-price">Price: ${product.price}</p>
    {Number(product.discount) > 0 && <p>Discount: {product.discount}%</p>}
    {Number(product.discount) > 0 && (
      <p className="product-discounted-price">Discounted Price: ${discountedPrice.toFixed(2)}</p>
    )}
    <p className="product-category">Category: {product.category}</p>
    <p className="link" style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => handleClick()}>See more detail</p>
    {popupVisible && (
      <Popup id={product.id} onClose={handleClosePopup} />
    )}
  </div>
  );
};

export default ProductCart;



