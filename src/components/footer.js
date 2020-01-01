import React from "react";

const Footer = props => {
  return (
    <footer className="p-5">
      <p className="text-sm">
        Por <a href="https://twitter.com/GastonGarciaO">{props.siteAuthor}</a>
      </p>
    </footer>
  );
};

export default Footer;
