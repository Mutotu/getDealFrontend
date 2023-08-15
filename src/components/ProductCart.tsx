import React from "react";
import { Product } from "../interfaces"


interface ProductCartProps {
  product: Product;
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  const discountedPrice =
    Number(product.price) -
    (Number(product.price) * Number(product.discount.slice(1))) / 100;
  return (
    <div key={product.id} className='product-card'>
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
    </div>
  );
};

export default ProductCart;
