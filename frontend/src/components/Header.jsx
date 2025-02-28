import { Link, useNavigate } from "react-router";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice.js";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const logoutFn = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>할일 생성</Link>
      </div>
      <ul>
        {user ? (
          <button className="btn" onClick={logoutFn}>
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          <>
            <li>
              <Link to={"/login"}>
                <FaSignInAlt />
                Login
              </Link>
            </li>
            <li>
              <Link to={"/register"}>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
