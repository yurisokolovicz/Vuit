import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./ContatosHome.css";

const ContatosHome = () => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="contato-cred-container">
      <Helmet>
        <script src="https://www.instagram.com/embed.js" async defer />
      </Helmet>
      <h3>CONTATOS</h3>
      <h4>VAMOS CONVERSAR?</h4>
      <p>
        Venha fazer parte deste ecossistema que tem mudado a vida das pessoas.
        Será um prazer tê-los conosco.
      </p>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/vuitcred/"
        data-instgrm-version="12"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "700px",
          minWidth: "94px",
          padding: 0,
          width: "700",
          height: "394",
          maxHeight: "100%",
        }}
      ></blockquote>
    </div>
  );
};

export default ContatosHome;
