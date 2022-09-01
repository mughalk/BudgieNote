import React from "react";
import { MdStickyNote2 } from "react-icons/md";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <div className="titleside">
        <h1>Notes </h1>
        <MdStickyNote2 className="note-icon" size="2.1em" />
      </div>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
