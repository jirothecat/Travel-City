import {NavLink} from "react-router-dom"

function NavBar(){
    return (
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/add-card">Add New Card</NavLink></li>
        </ul>
    )
}

export default NavBar;