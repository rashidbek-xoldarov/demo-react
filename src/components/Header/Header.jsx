import React from "react";
import Nav from "../Nav/Nav";

const Header = (props) => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img
        src="https://picsum.photos/50/50"
        alt="logo"
        width={50}
        height={50}
      />
      <Nav />
    </header>
  );
};

export default Header;
