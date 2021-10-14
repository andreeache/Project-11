import { useParams } from "react-router";
import Rating from "./Rating";
import DropDown from "./DropDown";
import Gallery from "./Gallery";
import "../styles/Apartment.css";
import data from "./data";

function Apartment(props) {
  const params = useParams();
  const apartment = data.find((ap) => ap.id === params.id);

  return (
    <div>
      <Gallery images={apartment.pictures} />
      <div className="property">
        <div className="property-info">
          <div className="property-main">
            <div className="title">{apartment.title}</div>
            <div className="location">{apartment.location}</div>
            <div className="tag-section">
              {apartment.tags.map((t) => (
                <div key={t} className="tags">
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="host">
            <div className="host-details">
            <div className="host-name">{apartment.host.name}</div>
            <div className="host-img">
              <img src={apartment.host.picture} alt="host" />
            </div>
            </div>
            <div className="rate">
              <Rating rating={apartment.rating} />
            </div>
          </div>
        </div>
      </div>
      <div className="apartment-details">
        <div className="dropdown-apartment " title="Header">
          <DropDown
            title="Description"
            className="dropdown-content description"
          >
            {apartment.description}
          </DropDown>
        </div>
        <div className="dropdown-apartment" title="Header">
          <DropDown title="Amenities" className="dropdown-content">
            <ul>
              <li>
                {apartment.Amenities.map((a) => (
                  <div key={a} className="list">
                    {a}
                  </div>
                ))}
              </li>
            </ul>
          </DropDown>
        </div>
      </div>
    </div>
  );
}

export default Apartment;
