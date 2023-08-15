import { IHistoryCardProps } from "../interfaces"
import CartItem from "../components/CartItem"


const HistoryCard = ({ savedAt, id, cartItems }: IHistoryCardProps) => {
  return (
    <div key={id} className="history-card">
      <h4>
        Bought on
        <span style={{ textDecoration: "underline" }}> {savedAt}</span>
      </h4>
      {cartItems.map(cartItem => (<CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default HistoryCard;
