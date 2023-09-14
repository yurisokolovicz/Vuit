import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import footerImage from "../..//src/img/Homepage/block_images/logo-footer.png";
import "./Footer.css";

const Footer = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyATbm3m875KnavZy2akpSvnXUEiAoasjr8",
  });

  return (
    <footer id="footer">
      <div className="map">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{
              lat: 28.51737959596134,
              lng: -81.27331400349591,
            }}
            zoom={10}
          ></GoogleMap>
        ) : (
          <></>
        )}
      </div>
      <p>Rua Pasteur, 463 - Água Verde -13 andar</p>
      <p>Curitiba-PR</p>
      <img src={footerImage} alt="Background" />
    </footer>
  );
};

export default Footer;
