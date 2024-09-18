import { useState } from "react";

export const Expandable = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleOpen}>
        {isOpen ? "Sort by 🔼" : "Sort By 🔽"}
      </button>
      {isOpen ? children : null}
    </>
  );
};
