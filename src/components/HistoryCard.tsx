interface IProductArr {
  cartId: number;
  photoLink: string;
  name: string;
  price: string;
  quantity: number;
}

interface ICart {
  cartId: number;
  createdAt: string;
  extraDetail: string;
  id: number;
  product: IProductArr;
  productId: number;
  quantity: number;
}

interface IHistoryCardProps {
  savedAt: string;
  id: number;
  cartItems: ICart[];
}

const HistoryCard = ({ savedAt, id, cartItems }: IHistoryCardProps) => {
  return (
    <div key={id}>
      <h4>Bought on {savedAt}</h4>
      {cartItems.map(cartItem => (
        <div key={cartItem.cartId}>
          <h3>{cartItem.product.name}</h3>
          <h4>$: {cartItem.product.price}</h4>
          <img src={cartItem.product.photoLink} alt={cartItem.product.name} />
          <h4>Quantity: {cartItem.quantity}</h4>
        </div>
      ))}
    </div>
  );
};

export default HistoryCard;
