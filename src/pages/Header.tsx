import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshState } from "../store/user/userSlice";
import { selectData } from "../store/user/userSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const selectedData = useSelector(selectData);
  const { tempCartIds, id } = selectedData;

  const logout = () => {
    dispatch(refreshState())
    navigation("/")
  }
  return (
    <div className='header-container'>
      <ul>
        <li onClick={() => navigation("/")}>Home</li>
        {id && (
          <li className='profile' onClick={() => navigation("/profile")}>
            Profile
          </li>
        )}
        <li className='basket-link' onClick={() => !id ? navigation("/login") : navigation("/basket")}>
          <span className='basket-icon'>
            <i className='fas fa-shopping-cart'></i>
          </span>
      Basket{tempCartIds.length > 0 ? <span className='item-count'>{tempCartIds.length}</span> : ""}
        </li>
        {id ? (
          <li className='logout-link' onClick={logout}>
            Log out
          </li>
        ) : <div style={{ display: "flex" }}> <li className='logout-link' onClick={() => navigation("/login")}>
          Log in
      </li>  <li className='logout-link' onClick={() => navigation("/signup")}>
              Signup
      </li></div>}
      </ul>
    </div>

  );
};

export default Header;
