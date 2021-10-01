import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import about from "../assets/about.png";
import "../styles/Dropdown.css";
import "../styles/Banner.css";

function About() {
  return (
    <div>
      <div className="banner">
        <img src={about} alt="banner background" className="banner-img" />
      </div>
      <div className="dropdown">
        <div className="dropdown-category">
          <div className="dropdown-title">
            Reliability
            {<FontAwesomeIcon icon={faChevronDown} />}
          </div>
          <div className="dropdown-content">
            The ads posted on Kasa guarantee total reliability of the place. The
            photos are consistent with the accommodations, and all information
            is regularly checked by our teams.
          </div>
        </div>

        <div className="dropdown-category">
          <div className="dropdown-title">
            Respect
            {<FontAwesomeIcon icon={faChevronDown} />}
          </div>
          <div className="dropdown-content">
            Caring is one of the founding values of Kasa. Any discriminatory
            behavior or disruptive behavior in the neighborhood will result in
            exclusion from our platform.
          </div>
        </div>
        <div className="dropdown-category">
          <div className="dropdown-title">
            Service
            {<FontAwesomeIcon icon={faChevronDown} />}
          </div>
          <div className="dropdown-content">
            Our teams are at your disposal to provide you with the best
            experience. Please do not hesitate to contact us if you have any
            questions.
          </div>
        </div>
        <div className="dropdown-category">
          <div className="dropdown-title">
            Safety
            {<FontAwesomeIcon icon={faChevronDown} />}
          </div>
          <div className="dropdown-content">
            Safety is Kasa's priority. Both for our guests and for travelers,
            each accommodation is compliant with the safety criteria established
            by our services. By leaving a note for both the host and the tenant,
            our teams can verify that the standards are respected. We also
            organize workshops on home security for our guests.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;