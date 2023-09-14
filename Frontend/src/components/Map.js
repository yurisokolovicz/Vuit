import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import "./Map.css";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyATbm3m875KnavZy2akpSvnXUEiAoasjr8",
  });

  return (
    <div id="map">
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
        <>{<p>Loading...</p>}</>
      )}
    </div>
  );
};

export default Map;
