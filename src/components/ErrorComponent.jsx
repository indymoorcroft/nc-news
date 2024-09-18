import { Link } from "react-router-dom";

export const ErrorComponent = ({ message: { status } }) => {
  return (
    <div>
      <h1>Error</h1>
      {status === 404 ? (
        <p>We cannot seem to find a page you are looking for</p>
      ) : (
        <p>Something went wrong</p>
      )}
      <Link to="/">Home</Link>
    </div>
  );
};
