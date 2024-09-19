import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Nav } from "./Nav";

export const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <header>
      <Nav />
      <p className="user">
        logged in as: <em>{loggedInUser.username}</em>
      </p>
    </header>
  );
};
