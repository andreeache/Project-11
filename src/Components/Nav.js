import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import "../styles/Nav.css";

function Nav() {
  // const title = 'Kasa'
  return (
    <nav className="main-nav">
      <img src={logo} alt="kasa" className="kasa-logo" />
      <ul className="tabs">
        <li className="tab-link">
          <Link to="/">Home</Link>
        </li>
        <li className="tab-link">
          <Link to="./About">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
