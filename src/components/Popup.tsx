import { join } from "path";
import React, { useEffect, useState } from "react";
import { Product } from "../interfaces"

interface PopupProps {
  id: number;
  onClose: () => void;
}
interface IProduct {
  description: string
  rating: {
    rate: number
  }
}
const Popup: React.FC<PopupProps> = ({ id, onClose }) => {
  const [product, setProduct] = useState<IProduct>()
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(json => setProduct(json))
  }, [id])
  return (
    <div className="popup visible">
      <p><span className="popup-span">Description: </span> {product?.description}</p>
      <p><span className="popup-span">Rating: </span>{product?.rating?.rate}</p>
      <button style={{ backgroundColor: "#007bff", color: "white" }} onClick={onClose}>Close</button>
    </div>
  );
};

export default Popup;
