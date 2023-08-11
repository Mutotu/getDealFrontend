import React, { useState } from "react";
import ProductCart from "../components/ProductCart";

interface Product {
  id: number;
  productName: string;
  image: string;
  price: string;
  discount: string;
  category: string;
}
interface ProductsListProps {
  products: Product[];
  onHandleAdd: (id: number) => void;
}
const ProductsList: React.FC<ProductsListProps> = ({
  products,
  onHandleAdd,
}) => {
  const [activeCard, setActiveCard] = useState(0);

  const handlePass = () => {
    setActiveCard((prevActiveCard) => (prevActiveCard + 1) % products.length);
  };

  const handleAdd = (id: number) => {
    setActiveCard((prevActiveCard) => (prevActiveCard + 1) % products.length);
    onHandleAdd(id);
    console.log(id);
  };

  return (
    <div className='product-stack'>
      {products.map((p, index) => (
        <div
          key={p.id}
          className={`product-card ${
            index === activeCard
              ? ""
              : index < activeCard
              ? "swipe-left"
              : "swipe-right"
          }`}
        >
          <ProductCart product={p} />
          <div>
            <button onClick={handlePass}>Pass</button>
            <button onClick={() => handleAdd(p.id)}>Add</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;