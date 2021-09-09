import logo2 from "../assets/logo2.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img src={logo2} alt="kasa" className="footer-logo" />
      <div className="footer-text">@2020Kasa.All reights reserved</div>
    </div>
  );
}

export default Footer;
