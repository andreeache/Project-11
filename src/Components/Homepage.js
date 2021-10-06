import { Link } from "react-router-dom";
import Banner from "./Banner";
import "../styles/Homepage.css";

function Homepage(props) {
  return (
    <div> <Banner/>
    <div className="homepage-main">
      {props.data.map((e) => (
        <div key={e.id}
          className="accommodation-card"
          style={{
            backgroundImage: "url(" + e.cover + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Link to={location => `/apartment/${e.id}` }>
          <h1 className="accommodation-title">
            {e.title}</h1>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Homepage;
