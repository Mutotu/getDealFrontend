import { selectData } from "../store/user/userSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react'
import HistoryCard from "../components/HistoryCard"
import { generateTimestamp } from "helperFuncs";
import { IHistoryCardProps } from "../interfaces"


const Profile = () => {
  const [carts, setCarts] = useState<IHistoryCardProps[]>([]);
  const selectedData = useSelector(selectData);
  const { name, photo, token, tempCartIds, cart } = selectedData;

  const requestOptions: any = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "authorization": ""
    },
  };
  useEffect(() => {
    requestOptions.headers.authorization = "Bearer " + token
    fetch("http://localhost:8080/me", requestOptions).then((res) => res.json())
      .then((response) => {
        setCarts(response.carts)
      });

  }, [tempCartIds.length])
  return (
    <div>
      <div className='profile-details'>
        <p className='welcome-message'>Welcome! {name}</p>
      </div>
      <img
        className='profile-photo'
        src={
          photo
            ? photo
            : "https://krazyhorse.co.uk/cdn/shop/products/indian-23-scout-rogue-stealth-grey-front-right-3q_1400x.jpg?v=1671465449"
        }
        alt='Profile'
      />
      <h3>Purchase History</h3>
      {!token && "No Purchase made"}
      <div>
        {carts.map((cart) => (
          <HistoryCard
            key={cart.id}
            id={cart.id}
            savedAt={generateTimestamp(cart.savedAt)}
            cartItems={cart.cartItems}
          />
        ))}

      </div>
    </div>
  );
};

export default Profile;
