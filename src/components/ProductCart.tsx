import React from "react";

interface Product {
  id: number;
  productName: string;
  image: string;
  price: string;
  discount: string;
  category: string;
}

interface ProductCartProps {
  product: Product;
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  const discountedPrice =
    Number(product.price) -
    (Number(product.price) * Number(product.discount.slice(1))) / 100;

  return (
    <div key={product.id} className='product-cart'>
      <img
        style={{ width: "15rem", height: "15rem" }}
        src={
          "https://m.atcdn.co.uk/vms/media/%7Bresize%7D/6a2081efec9a4564a93519475a0cc40a.jpg"
        }
        alt={product.productName}
      />

      <h3>{product.productName}</h3>
      <p>Price: ${product.price}</p>
      {Number(product.discount) > 0 && <p>Discount: {product.discount}%</p>}
      {Number(product.discount) > 0 && (
        <p>Discounted Price: ${discountedPrice.toFixed(2)}</p>
      )}
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductCart;
