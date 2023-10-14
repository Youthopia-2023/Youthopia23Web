import "./SignUp.css";
import { useRef, useState } from "react";
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
function SignUp() {
  const [checked, setChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [photo, setphoto] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setphonenumber] = useState("");

  const imgref = useRef();

  const signup = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !year ||
      !branch ||
      !password ||
      !phonenumber ||
      !identityNumber ||
      (!checked && !college)
    ) {
      alert("Please fill all the details!");
      return;
    }
    if (!checked && !photo) {
      alert("please upload photo of identity proof!");
      return;
    }
    const data = {
      firstName,
      lastName,
      email,
      college: checked ? "DIT University" : college,
      photo,
      identityNumber,
      year,
      branch,
      password,
      checked,
      phonenumber,
    };
    axios
      .post("http://localhost:3000/auth/register", {
        data,
      })
      .then((response) => {
        alert("Signup successful");
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert("some error occured");
        }
      });
  };
  return (
    <div>
      <div className="signUp-container">
        <img className="youthopia-logo" src={Youthopia} />
        <img src={star1} alt="star-1" className="star-1Signup" />
        <img src={star2} alt="star-2" className="star-2Signup" />
        <img src={star3} alt="star-3" className="star-3Signup" />
        <img src={line} alt="star-3" className="line-4Signup" />
        <img src={ellipse} alt="star-3" className="ellipseSignup" />
        <div className="signup-form">
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
                  onChange={(e) => setphoto(e.target.value)}
                  ref={imgref}
                  style={{ display: "none" }}
                />
                <div>Identity proof (Aadhar, DL, etc)</div>
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
            <input
              type="text"
              placeholder="Branch"
              onChange={(e) => setBranch(e.target.value)}
            />
            <input
              type="number"
              placeholder="Year"
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
