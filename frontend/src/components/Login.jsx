import { FaSignInAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { reset } from "../features/tasks/taskSlice";
import { login } from "../features/auth/authSlice";
import Spinner from "./Spinner";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user,isLoading, isError, isSuccess, message } = useSelector((state)=>state.auth)

  // 같은 값으로 연속 눌렀을 때는 ? 바뀌는 값이 없는뎅!
  useEffect(()=>{
    if(isError) toast.error(message);
    if(isSuccess || user ) navigate("/")
    dispatch(reset())
  },[user,isError,isSuccess,message,navigate,dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {email,password};
    dispatch(login(userData));
  };

  return (
    isLoading ? <Spinner /> : (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start creating tasks</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              autoComplete={"true"}
              className="form-control"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>)
  );
}

export default Login;
