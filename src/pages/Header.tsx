import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshState } from "../store/user/userSlice";
const Header = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(refreshState())
    navigation("/")
  }
  return (
    <div className='header-container'>
      <ul>
        <li onClick={() => navigation("/")}>Home</li>
        <li className='profile' onClick={() => navigation("/profile")}>
          Profile
        </li>
        <li onClick={() => navigation("/basket")}>Basket</li>
        <li onClick={logout}>Log out</li>
      </ul>
    </div>
  );
};

export default Header;
