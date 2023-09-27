import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    
    return (
        <div id="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/events"> Events</Link>
                <Link to="/gallery"> Gallery </Link>
            </div>
            <div className="buttonsNav">
                <button className="clickme1"> Log in </button>
                <button className="clickme2"> Signup</button>
            </div>

        </div>
    )
}

export default Navbar
