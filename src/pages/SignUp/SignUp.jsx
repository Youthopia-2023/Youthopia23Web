import "./SignUp.css";
import { useEffect, useRef, useState } from "react";
import Youthopia from "../../assets/youthopia.png";
import "./SignUp.css";
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";
// import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { AiOutlineCamera } from "react-icons/ai";
import axios from "axios";
import { user } from "../../store/store";
import { baseUrl } from "../../url";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase/firebase";
function SignUp() {
  const userData = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [photo, setphoto] = useState("");
  const [year, setYear] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [imageName, setimageName] = useState("");

  const imgref = useRef();

  useEffect(() => {
    if (userData.token) {
      toast.success("Already signed in!");
      navigate("/profile", { replace: true });
    }
  }, []);

  const promise = () => {
    return new Promise(function (resolve, reject) {
      if (
        !firstName ||
        !lastName ||
        !email ||
        !year ||
        !password ||
        !phonenumber ||
        !identityNumber ||
        (!checked && !college)
      ) {
        reject("Please fill all the details!");
        return;
      }
      if (!checked && !photo) {
        reject("please upload photo of identity proof!");
        return;
      }
      const filename = Date.now() + photo.name;
      const storageRef = ref(storage, `/identityDocuments/${filename}`);
      const uploadTask = uploadBytesResumable(storageRef, photo);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},           //eslint-disable-line
        (error) => {
          console.log(error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            const data = {
              firstName,
              lastName,
              email,
              college: checked ? "DIT University" : college,
              photo: url,
              identityNumber,
              year,
              password,
              checked,
              phonenumber,
            };
            axios
              .post(`${baseUrl}/auth/register`, {
                data,
              })
              .then((response) => {
                dispatch(user.setToken(response.data.token));
                dispatch(user.setFirstName(response.data.user.firstname));
                dispatch(user.setLastName(response.data.user.lastname));
                dispatch(user.setPhonenumber(response.data.user.phonenumber));
                dispatch(user.setEmail(response.data.user.email));
                dispatch(user.setCollege(response.data.user.college));
                dispatch(user.setYear(response.data.user.year));
                resolve("welcome " + response.data.user.firstname);
                resolve("Signup successful");
              })
              .catch((error) => {
                console.log(error);
                if (error.response?.data?.message) {
                  reject(error.response.data.message);
                } else {
                  reject("some error occured");
                }
              });
          });
        }
      );
    });
  };

  const signup = () => {
    toast.promise(promise(), {
      loading: "signing up...",
      success: (e) => {
        navigate("/");
        return e;
      },
      error: (e) => `${e}`,
    });
  };
  return (
    <div className="limiter">
      <div className="signUp-container">
        <img className="youthopia-logo" src={Youthopia} />
        <img src={star1} alt="star-1" className="star-1Signup" />
        <img src={star2} alt="star-2" className="star-2Signup" />
        <img src={star3} alt="star-3" className="star-3Signup" />
        <img src={line} alt="star-3" className="line-4Signup" />
        <img src={ellipse} alt="star-3" className="ellipseSignup" />
        
        <div className="signup-form">
        <p className="heading">Sign Up</p>
          <div className="nameRow">
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="email">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="email">
            <input
              type="number"
              onChange={(e) => setphonenumber(e.target.value)}
              placeholder="phone number"
            />
          </div>
          <div className="checkbox-signup">
            <input
              type="checkbox"
              onChange={() => setChecked((prev) => !prev)}
              value={checked}
            />
            <p>Are you from DIT University?</p>
          </div>
          {!checked ? (
            <>
              <div className="college">
                <input
                  type="text"
                  value={college}
                  placeholder="College Name"
                  onChange={(e) => setCollege(e.target.value)}
                />
              </div>
              <div
                className="identityPhoto"
                onClick={() => imgref.current.click()}
                style={{ cursor: "pointer" }}
              >
                <input
                  type="file"
                  onChange={(e) => {
                    setphoto(e.target.files[0]);
                    setimageName(e.target.files[0].name);
                  }}
                  ref={imgref}
                  style={{ display: "none" }}
                />
                <div>
                  {photo && imageName
                    ? imageName
                    : "Identity proof (Aadhar, DL, etc)"}
                </div>
                <AiOutlineCamera />
              </div>
              <div className="idNumber">
                <input
                  type="number"
                  placeholder="Identity proof Number (Aadhar, DL, etc)"
                  onChange={(e) => setIdentityNumber(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <div className="college">
                {/* <input type="text" value={"DIT University"} /> */}
                <div className="dittext">DIT University</div>
              </div>
              <div className="sapId">
                <input
                  type="number"
                  placeholder="SAP ID"
                  onChange={(e) => setIdentityNumber(e.target.value)}
                />
              </div>
            </>
          )}

          <div className="moreDetails">
            {/* <input
              type="text"
              placeholder="Branch"
              onChange={(e) => setBranch(e.target.value)}
            /> */}
            <input
              type="number"
              placeholder="Academic Year"
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              cursor: "pointer",
              border: "2px solid white",
              padding: "0.5rem",
              borderRadius: "15px",
              fontSize: "1.5rem",
            }}
            onClick={signup}
            className="signupBtn"
          >
            Signup
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
