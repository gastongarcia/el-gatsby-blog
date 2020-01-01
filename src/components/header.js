import React from "react";

const Header = props => {
  return (
    <header>
      <h1 className="text-6xl p-5 tracking-tight" style={{ color: "#DB4931" }}>
        {props.siteTitle}
      </h1>
    </header>
  );
};

export default Header;
