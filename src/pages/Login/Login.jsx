import "./Login.css";
import Youthopia from "../../assets/youthopia.png";
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import { baseUrl } from "../../url";
import { user } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Login() {
  const userData = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // create state for storing email
  const [password, setPassword] = useState(""); // create state for storing password
  const [checked, setchecked] = useState(false);

  useEffect(() => {
    if (userData.token) {
      toast.success("Already signed in!");
      navigate("/profile", { replace: true });
    }
  }, []);

  const login = () => {
    return new Promise(function (resolve, reject) {
      if (!email || !password) {
        reject("Please fill all the details");
        return;
      }
      if (!checked) {
        reject("please accept t&c!");
        return;
      }
      axios
        .post(`${baseUrl}/auth/login`, {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          dispatch(user.setToken(response.data.token));
          dispatch(user.setFirstName(response.data.user.firstname));
          dispatch(user.setLastName(response.data.user.lastname));
          dispatch(user.setPhonenumber(response.data.user.phonenumber));
          dispatch(user.setEmail(response.data.user.email));
          dispatch(user.setCollege(response.data.user.college));
          dispatch(user.setYear(response.data.user.year));
          resolve("welcome " + response.data.user.firstname);
          return;
        })
        .catch((error) => {
          if (error?.response?.data?.message) {
            reject(error.response.data.message);
            return;
          } else {
            reject("some error occured");
            return;
          }
        });
    });
  };

  const createError = () => {
    toast.promise(login(), {
      loading: "logging in...",
      success: (e) => {
        navigate("/");
        return e;
      },
      error: (e) => `${e}`,
    });
  };

  return (
    <>
      <div className="LoginContainer">
        <div className="Login">
          <img src={star1} alt="star-1" className="star-1"></img>
          <img src={star2} alt="star-2" className="star-2"></img>
          <img src={star3} alt="star-3" className="star-3"></img>
          <img src={line} alt="star-3" className="line-4"></img>
          <img src={ellipse} alt="star-3" className="ellipse"></img>

          <img src={Youthopia} className="youthopia-logo" alt="" />
          <p>Login</p>
          <form action="#">
            <div className="login-details">
              <input
                className="field"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="field"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <label className="checkBox">
              <input
                type="checkbox"
                value={checked}
                onChange={() => setchecked((prev) => !prev)}
              />
              I agree to this terms and conditions
            </label>
          </form>
          <button className="login-btn" onClick={createError}>
            Login
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
