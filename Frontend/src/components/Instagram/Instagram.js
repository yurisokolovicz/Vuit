import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Instagram = ({ link }) => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div>
      <Helmet>
        <script src="https://www.instagram.com/embed.js" async defer />
      </Helmet>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={link}
        data-instgrm-version="12"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "700px",
          minWidth: "394px",
          padding: 0,
          width: "700",
          height: "394",
          maxHeight: "100%",
        }}
      ></blockquote>
    </div>
  );
};

export default Instagram;
