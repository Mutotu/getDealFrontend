import React, { useState } from "react";
import ProductCart from "../components/ProductCart";
import { Product } from "../interfaces"
interface ProductsListProps {
  products: Product[];
  onHandleAdd: (id: number) => void;
}
const ProductsList: React.FC<ProductsListProps> = ({
  products,
  onHandleAdd,
}) => {

  const [activeCard, setActiveCard] = useState(0);
  const handlePass = (id: number) => {
    setActiveCard((prevActiveCard) => (prevActiveCard + 1) % products.length);
  };

  const handleAdd = (id: number) => {
    setActiveCard((prevActiveCard) => (prevActiveCard + 1) % products.length);
    onHandleAdd(id);
  };

  return (
    <div className='product-stack'>
      {products.map((p, index) => (
        <div
          key={p.id}
          className={`product-card ${index === activeCard
            ? ""
            : index < activeCard
              ? "swipe-left"
              : "swipe-right"
            }`}
        >
          <ProductCart product={p} />
          <div className="card-buttons">
            <button className="pass-button" onClick={() => handlePass(p.id)}>Pass</button>
            <button className="add-button" onClick={() => handleAdd(p.id)}>Add</button>
          </div>

        </div>
      ))
      }
    </div >
  );
};

export default ProductsList;
