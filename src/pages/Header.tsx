import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  return (
    <div className='header-container'>
      <ul>
        <li onClick={() => navigation("/")}>Home</li>
        <li className='profile' onClick={() => navigation("/profile")}>
          Profile
        </li>
        <li onClick={() => navigation("/basket")}>Basket</li>
      </ul>
    </div>
  );
};

export default Header;
