import "./Register.css";
import Youthopia from "../../assets/youthopia.png";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
// import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../url";
import toast from "react-hot-toast";

function Counter({count,setCount,min,max}) {
  function decrement() {
    if (count == min) {
      setCount(min);
    } else {
      setCount(count - 1);
    }
  }
  function increment() {
    if (count == max) {
      setCount(max);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <div className="Counter">
      <button className="dec" type="button" onClick={decrement}>
        -
      </button>
      <p className="Count">{count}</p>
      <button className="inc" type="button" onClick={increment}>
        +
      </button>
    </div>
  );
}

function rawIND({teamName,setTeamName,phone,setPhone,members,setMembers,submitt,count,setCount}) {
  console.log(teamName)
  return (
    <div className="Ind">
      <img src={star1} alt="star-1" className="star-1"></img>
      <img src={star2} alt="star-2" className="star-2"></img>
      {/* <img src={star3} alt="star-3" className="star-3"></img> */}
      <img src={line} alt="star-3" className="line-4"></img>
      <img src={ellipse} alt="star-3" className="ellipse"></img>

      <form action={(e) => {
            e.preventDefault();
            submitt();
          }} method="POST">
        <p>Participant Details</p>
        <hr className="horiLine" />
        <label htmlFor="yourName">Your Name</label>
        <input
          type="text"
          id="yourName"
          placeholder="Enter Full Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <label htmlFor="SAPId">SAP ID</label>
        <input type="text" id="SAPID" placeholder="Enter Your SAP ID" />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          
          id="phone"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          className="reg"
          type="submit"
          value="Register Now"
          placeholder="Register"
          
        />
      </form>
    </div>
  );
}

function rawTeam({teamName,min,max,setTeamName,phone,setPhone,members,setMembers,submitt,count,setCount}) {
  return (
    <div className="Ind">
      <img src={star1} alt="star-1" className="star-1"></img>
      <img src={star2} alt="star-2" className="star-2"></img>
      {/* <img src={star3} alt="star-3" className="star-3"></img> */}
      <img src={line} alt="star-3" className="line-4"></img>
      <img src={ellipse} alt="star-3" className="ellipse"></img>

      <form>
        <p>Participant Details</p>
        <hr className="horiLine" />
        <p htmlFor="yourName">Team Name</p>
        <input
          type="text"
          name="yourName"
          placeholder="Team Name"
          value={teamName}
          key={542354}
          onChange={(e) => {
            setTeamName(e.target.value);
            e.currentTarget.click();
          }}
        />
        <label htmlFor="SAPId">Team Leaders Phone Number</label>
        <input
          type="tel"
          id="SAPID"
          placeholder="Enter Your Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Counter count={count} setCount={setCount} />
        {Array.from({ length: count }, (_, index) => (
          <div key={index}>
            <label htmlFor={`memberName${index}`}>
              Team Member {index + 1}
            </label>
            <input
              type="text"
              id={`memberName${index}`}
              placeholder={`Team Member ${index + 1}`}
              value={members[index]}
              onChange={(e) => {
                let data = members;
                data[index] = e.target.value;
                setMembers[data];
              }}
            />
          </div>
        ))}

        <input
          className="reg"
          type="submit"
          value="Register Now"
          placeholder="Register"
          onClick={(e) => {
            e.preventDefault();
            submitt();
          }}
        />
      </form>
    </div>
  );
}

const IND=React.memo(rawIND)
const Team=React.memo(rawTeam)

export default function Register() {
  //   const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);

  const userData = useSelector((state) => state);
  let props = useLocation();
  const navigate = useNavigate();
  const min = props.state.min;
  const max = props.state.max;
  const [count, setCount] = useState(min);
  const [teamName, setTeamName] = useState("");
  const [phone, setPhone] = useState("");
  const [members, setMembers] = useState({});
  

  const promise = () => {
    return new Promise(function (resolve, reject) {
      let mem = [];
      let eventID = props.state.id;
      {
        Object.keys(members).map(function (key, index) {
          mem.push(members[key]);
        });
      }
      const data = {
        teamName,
        phone,
        mem,
        eventID,
      };
      console.log(data);
      axios
        .post(
          `${baseUrl}/user/registeruser`,
          {
            data,
          },
          {
            headers: {
              Authorization: `bearer ${userData.token}`,
            },
          }
        )
        .then(function (response) {
          console.log(response);
          resolve();
        })
        .catch(function (error) {
          console.log(error);
          // alert("error occured");
          reject();
        });
    });
  };

  const submitt = () => {
    toast.promise(promise(), {
      loading: "registering...",
      success: () => {
        navigate("/ticket", {
          state: {
            ev: `${props.state.id.slice(0, 4)}${userData._id.slice(0, 3)}`,
            us: props.state,
          },
        });
        return "registered successfully";
      },
      error: "some error occured! try again",
    });
  };

  

    

  return (
    <div className="Register">
      <Navbar />
      <img
        className="youthop"
        src={Youthopia}
        alt=""
        style={{ margin: "100vh 0px 0px 38%" }}
      />
      <div className="eventDet">
        <div className="poster"></div>
        <p className="heading">Technical Event</p>
      </div>

      <div className="partDet">
        <div className="register">
          {min === 1 && max == 1 ? <IND teamName={teamName} setTeamName={setTeamName} phone={phone} setPhone={setPhone} members={members} setMembers={setMembers} submitt={submitt} count={count} setCount={setCount}  /> : <Team teamName={teamName} setTeamName={setTeamName} phone={phone} setPhone={setPhone} members={members} setMembers={setMembers} submitt={submitt} count={count} setCount={setCount} min={min} max={max}/>}
        </div>
      </div>
      <Footer />
    </div>
  );
}
