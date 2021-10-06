import { useParams } from "react-router";
import Rating from "./Rating";
import Gallery from "./Gallery";
import "../styles/Apartment.css";
import data from "./data";

function Apartment(props) {
  const params = useParams();
  const apartment = data.find((ap) => ap.id === params.id);

  return (
    <div>
      <Gallery />
      <div className="property">
        <div className="property-info">
          <div className="property-main">
            <div className="title">{apartment.title}</div>
            <div className="location">{apartment.location}</div>
          </div>

          <div className="host">
            <div className="host-name">{apartment.host.name}</div>
            <div className="host-img">
              <img src={apartment.host.picture} alt="host" />
            </div>
          </div>
        </div>
        <div className="features">
          <div className="tag-section">
            {apartment.tags.map((t) => (
              <div key={t} className="tags">{t}</div>
            ))}
          </div>
          <Rating rating={apartment.rating} />
        </div>
      </div>
      <div className="apartment-details">
        <div>
          Description
          <div>Description text here</div>
        </div>
        <div>
          Amenities
          <ul>
            <li>List elements</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Apartment;
