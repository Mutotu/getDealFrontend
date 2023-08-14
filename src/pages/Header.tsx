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
        {id && <li className='profile' onClick={() => navigation("/profile")}>
          Profile
        </li>}
        <li onClick={() => navigation("/basket")}>Basket {tempCartIds.length > 0 ? tempCartIds.length : " "}</li>
        {id && <li onClick={logout}>Log out</li>}
      </ul>
    </div>
  );
};

export default Header;
