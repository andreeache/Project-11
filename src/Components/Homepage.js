import Banner from "./Banner";
import "../styles/Homepage.css";

function Homepage(props) {
  return (
    <div> <Banner/>
    <div className="homepage-main">
      {props.data.map((e) => (
        <div
          className="accommodation-card"
          style={{
            backgroundImage: "url(" + e.cover + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="accommodation-title">{e.title}</h1>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Homepage;
