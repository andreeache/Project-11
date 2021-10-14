import "../styles/Rating.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

const Rating = (props) => {
  const rating = parseInt(props["rating"]);
  const ratingStars = () => {
    let r = [];
    for (let i = 0; i < rating; i++) {
      r.push(<FontAwesomeIcon icon={faStar} className="star full-star" />);
    }
    for (let i = 0; i < 5 - rating; i++) {
      r.push(<FontAwesomeIcon icon={faStar}  className="star empty-star"/>);
    }
    return r;
  };
  return <div className="rating">{ratingStars()}</div>;
};

export default Rating;
