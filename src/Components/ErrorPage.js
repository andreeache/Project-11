import { Link } from "react-router-dom";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-content">
      <div className="error-number">404</div>
      <div className="error-message">
        Oops! It looks like this page doesn’t exist
      </div>
      <Link to="/">
        <div className="home-link">Go back to home page link</div>
      </Link>
    </div>
  );
};

<Link to="/">Home</Link>;

export default ErrorPage;
