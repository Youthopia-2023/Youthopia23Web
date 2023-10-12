import { NavLink, useNavigate } from "react-router-dom"
import "./Navbar.css"
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  }
  const navigateToSignup = () => {
    navigate("/signup");
  }

  const [scrolling, setScrolling] = useState(false);

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
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? 'blurred' : ''}`}>
      <div className="links">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/events" activeClassName="active"> Events</NavLink>
        {/* <NavLink to="/gallery" activeClassName="active"> Gallery </NavLink> */}
        <NavLink to="/about" activeClassName="active"> About us</NavLink>
      </div>
      <div className="buttonsNav">
        <button className="clickme1" onClick={navigateToLogin}> Log in </button>
        <button className="clickme2" onClick={navigateToSignup}> Signup</button>
      </div>

    </div>
  )
}

export default Navbar
