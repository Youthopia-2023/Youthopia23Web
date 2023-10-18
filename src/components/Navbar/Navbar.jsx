import "./Navbar.css"
import logo from "../../assets/youthopia 2022 white small 1.svg"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const navigate = useNavigate();
  const [isUserLoggedInState, setIsUserLoggedInState] = useState(false);
  const navigateToProfile = () => {
    navigate("/profile");
  }
  const isUserLoggedInFun = () => {
    if (localStorage.getItem("token")) {
      setIsUserLoggedInState(true);
    }
    else {
      setIsUserLoggedInState(false);
    }
  };

  useEffect(() => {
    isUserLoggedInFun();
  }, []);

  let location = useLocation();
  const [menuClosed, setMenuClosed] = useState(true);

  const toggleMenu = () => {
    setMenuClosed(!menuClosed);
  }

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Add an event listener to the window to track scrolling
    const handleScroll = () => {
      if (window.scrollY >= 5) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? "blurred" : ""}`}>
      <div className={`${menuClosed ? "navbar-list" : "navbar-list-open"}`}>
        <AiOutlineClose className="cross" onClick={toggleMenu} />
        <ul>
          <li onClick={() => { setMenuClosed(true) }}><Link className={`${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link></li>
          {/* <li onClick={()=>{setMenuClosed(true)}}><Link className={`${location.pathname==="/about"?"active":""}`} to="/about">About</Link></li> */}
          <li onClick={() => { setMenuClosed(true) }}><Link className={`${location.pathname === "/events" ? "active" : ""}`} to="/events">Events</Link></li>
          <li onClick={() => { setMenuClosed(true) }}><Link className={`${location.pathname === "/about" ? "active" : ""}`} to="/about">About Us</Link></li>
          <li onClick={() => { setMenuClosed(true) }}><Link className={`${location.pathname === "/experience" ? "active" : ""}`} to="https://docs.google.com/forms/d/e/1FAIpQLSfzRcaN1hVu3RDR4Je1DPzK9r7N4VXhYIHD3vLWzc9RPw4sug/viewform" target="_blank">Accomodation</Link></li>
        </ul>
        <FiMenu className="menu" onClick={toggleMenu} />
      </div>
      <div className={`${menuClosed ? "navbar__logo" : "navbar__logo-open"}`}>
        {isUserLoggedInState?
        <img src={logo} alt="logo" onClick={navigateToProfile} />
        :
        <div className="navButtons">
          <Link to="/login" className="loginButton">Login</Link>
          <Link to="/signup" className="signupButton">Signup</Link>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar