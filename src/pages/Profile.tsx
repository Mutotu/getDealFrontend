import { selectData } from "../store/user/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedData = useSelector(selectData);
  const { name, photo, cart } = selectedData;
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
    </div>
  );
};

export default Profile;
