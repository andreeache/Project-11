import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO.png";
import "../styles/Nav.css";

function Nav() {
  // const title = 'Kasa'
  return (
    <nav className="main-nav">
     <NavLink to="/">  <img src={logo} alt="kasa" className="kasa-logo" /></NavLink>
      <ul className="tabs">
        <li className="tab-link">
          <NavLink activeClassName="tabs.active" to="/">Home</NavLink>
        </li>
        <li className="tab-link">
          <NavLink activeClassName="tabs" to="/about" >About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
