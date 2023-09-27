import { NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    
    return (
        <div id="navbar">
            <div className="links">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/events" activeClassName="active"> Events</NavLink>
                <NavLink to="/gallery" activeClassName="active"> Gallery </NavLink>
                <NavLink to="/about" activeClassName="active"> About us</NavLink>
            </div>
            <div className="buttonsNav">
                <button className="clickme1"> Log in </button>
                <button className="clickme2"> Signup</button>
            </div>

        </div>
    )
}

export default Navbar
