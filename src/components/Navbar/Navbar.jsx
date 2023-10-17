import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { useSelector } from "react-redux";
import { GoPerson } from "react-icons/go";
import Yout from "../../assets/youthopia 2022 white small 1.svg";

function Navbar() {
  const userData = useSelector((state) => state);
  const [loginfo, setLoginfo] = useState(userData.token);

  function Unlogged() {
    return (
      <>
        <button className="clickme1" onClick={navigateToLogin}>
          Log in
        </button>
        <button className="clickme2" onClick={navigateToSignup}>
          {" "}
          Signup
        </button>
      </>
    );
  }
  function Logged() {
    return (
      <>
        <button className="profilelog" onClick={navigateToProfile}>
          <img src={Yout} alt="" />
        </button>
      </>
    );
  }

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToSignup = () => {
    navigate("/signup");
  };
  const navigateToProfile = () => {
    navigate("/profile");
  };

  const [scrolling, setScrolling] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Add an event listener to the window to track scrolling
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function Small() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className={`hamburger-menu `}>
        <button
          className={`hamburger-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={`menu-links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" activeClassName="active">
              {" "}
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              {" "}
              About us
            </NavLink>
          </li>
          <li>
            <a href="example.com" target="_blank">
              {" "}
              Accomadation
            </a>
          </li>
        </ul>
      </div>
    );
  }

  function Large() {
    return (
      <>
        <div className="links">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/events" activeClassName="active">
            {" "}
            Events
          </NavLink>
          {/* <NavLink to="/gallery" activeClassName="active"> Gallery </NavLink> */}
          <NavLink to="/about" activeClassName="active">
            {" "}
            About us
          </NavLink>
          <a href="example.com" target="_blank">
            {" "}
            Accomadation
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={`navbar ${scrolling ? "blurred" : ""}`}>
        {width < 720 ? <Small /> : <Large />}
        <div className="buttonsNav">
          {loginfo != "" ? <Logged /> : <Unlogged />}
        </div>
      </div>
    </>
  );
}

export default Navbar;
