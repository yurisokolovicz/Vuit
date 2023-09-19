import React from "react";
import PropTypes from "prop-types";

import "./Baner.css";

function Baner({ src }) {
  return (
    <div className="baner-div">
      <img src={src} alt="PDF Icon" className="baner-img" />{" "}
    </div>
  );
}

Baner.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Baner;
