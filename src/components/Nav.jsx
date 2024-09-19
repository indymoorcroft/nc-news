import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-button">
        Home
      </Link>
      <Link to="/topics" className="nav-button">
        Topics
      </Link>
    </nav>
  );
};
