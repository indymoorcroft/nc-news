import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-button">
        <b>Home</b>
      </Link>
      <Link to="/topics" className="nav-button">
        <b>Topics</b>
      </Link>
    </nav>
  );
};
