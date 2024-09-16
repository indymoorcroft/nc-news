import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const loggedInUser = {
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  };

  return (
    <UserContext.Provider value={{ loggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
