import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

import Gallery from "./Gallery";
import "../styles/Apartment.css";

function Apartment() {
  return (
    <div>
      <Gallery />
      <div className="property">
        <div className="property-info">
          <div className="property-main">
            <div className="title">Cosy Appartement</div>
            <div className="location">Paris - 17th arrondissement</div>
          </div>

          <div className="host">
            <div className="host-name">Nathalie Jean</div>
            <div className="host-img">
              <img
                src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
                alt="host"
              />
            </div>
          </div>
        </div>
        <div className="features">
          <div className="tag-section">
            <div className="tags">Batignolle</div>
            <div className="tags">Batignolle</div>
            <div className="tags">Batignolle</div>
          </div>
          <div>
            {<FontAwesomeIcon icon={faStar} />}
            {<FontAwesomeIcon icon={faStar} />}
            {<FontAwesomeIcon icon={faStar} />}
            {<FontAwesomeIcon icon={faEmptyStar} />}
            {<FontAwesomeIcon icon={faEmptyStar} />}
          </div>
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
