import moment from "moment";
import "./IndividualEvent.css";
import background from "../../assets/background.png";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import youth from "../../assets/youthopia.png";
// import moment from "moment/moment";

const IndividualEvent = () => {
  let props = useLocation();
  // console.log(props.state);

  return (
    <>
      <Navbar />
      <div
        className="EventContainer"
        style={{ backgroundImage: `url(${background})` }}
      >
        <img
          style={{ width: "20rem", zIndex: "2", marginBottom: "-1.4rem" }}
          src={youth}
          alt=""
        />
        <div className="EventContainerChild">
          <div className="eventImage">
            <img
              src={
                props.state.imgUrl
                  ? props.state.imgUrl
                  : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"
              }
              alt="event"
            />
          </div>
          <div className="eventDetails">
            <div className="eventDetailsTop">
              <div className="eventTitle capitalize">{props.state.name}</div>
              <div className="eventInfo">
                <div>
                  <div></div>
                  <p className="capitalize">
                    {props.state.venue ? props.state.venue : "N/A"}
                  </p>
                </div>
                <div>
                  <div></div>
                  <p className="capitalize">{props.state.date}</p>
                </div>
                <div>
                  <div></div>
                  <p>
                    {moment(props.state.start_time, "hh:mm a").format(
                      "hh:mm a"
                    )}
                    {" - "}
                    {moment(props.state.end_time, "hh:mm a").format("hh:mm a")}
                    {/* {props.state.date} */}
                  </p>
                </div>
              </div>
            </div>
            <div className="eventDescription">
              <p className="text-justify">{props.state.discription}</p>
              <div>
                <div>
                  <p>Event Coordinator: </p>
                  {Object.keys(props.state.Coordinator).map(function (
                    key,
                    index
                  ) {
                    return (
                      <p
                        key={index}
                      >{`${key}: ${props.state.Coordinator[key]}`}</p>
                    );
                  })}
                </div>
                <div>
                  <p>Over All Heads: </p>

                  {Object.keys(props.state.head).map(function (key, index) {
                    return (
                      <p key={index}>{`${key}: ${props.state.head[key]}`}</p>
                    );
                  })}
                </div>

                <div>
                  <p>Event Type: </p>
                  <p>{props.state.max > 1 ? "Team" : "Individual"}</p>
                </div>

                <div>
                  <p className="capitalize">Fees for DIT student: </p>
                  <p>₹{props.fees1 ? props.fees1 : "N/A"}</p>
                </div>

                <div>
                  <p className="capitalize">Fees for outsiders: </p>
                  <p>₹{props.state.fees2 ? props.state.fees2 : "N/A"}</p>
                </div>

                {props.state.max > 1 && (
                  <div>
                    <p className="text-red-500 text-base">
                      *Minimum member {props.state.min} and maximum members{" "}
                      {props.state.max}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <Link
              className="linkToRegister"
              to={`/registration`}
              state={props.state}
            >
              <button className="eventResgisterButton uppercase rounded-xl">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default IndividualEvent;
