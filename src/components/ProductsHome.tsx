import React from "react";
import ProductCart from "./ProductCart";
import { Product } from "../interfaces"
interface ProductsListProps {
  products: Product[];
}

const ProductsHome: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {products.map((product) => (
        <div className='product-stack-noauth card' key={product.id}>
          <ProductCart product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsHome;
