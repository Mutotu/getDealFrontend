import { ICart } from "../interfaces"

interface ICartItemProps {
  cartItem: ICart;
}

const CartItem = ({ cartItem }: ICartItemProps) => {
  return (
    <div key={cartItem.cartId} className="cart-item">
      <h3>{cartItem.product.name}</h3>
      <h4>$: {cartItem.product.price}</h4>
      <img
        className="product-image"
        src={cartItem.product.photoLink}
        alt={cartItem.product.name}
      />
      <h4>Quantity: {cartItem.quantity}</h4>
    </div>
  );
};

export default CartItem;
