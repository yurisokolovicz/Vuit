import React from "react";

const Youtube = ({ src, title }) => {
  return (
    <iframe
      width="700"
      height="394"
      src={src}
      title={title}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default Youtube;
