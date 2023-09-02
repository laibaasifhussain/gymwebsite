import { Component } from "react";
import "./NavbarStyles.css";
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">FITNESS</h1>

        
        <ul className="nav-menu">
            {Menuitems.map((item, index) => {
                return(
                    <li key={index}>
               <Link className={item.cName} to={item.url}>
                {item.title}
                </Link>
            </li>
                )
            })}
            <button>Become a member</button>
        </ul>
        {/* <h1>Your Code Here</h1> */}
      </nav>
    );
  }
}

export default Navbar;
