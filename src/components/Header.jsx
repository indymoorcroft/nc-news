import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <header>
      <p className="user">
        logged in as: <em>{loggedInUser.username}</em>
      </p>
    </header>
  );
};
