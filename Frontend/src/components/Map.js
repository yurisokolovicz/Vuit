import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import "./Map.css";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyATbm3m875KnavZy2akpSvnXUEiAoasjr8",
  });

  return (
    <div id="map-container">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{
            lat: 28.53840782483288,
            lng: -81.37915304212855,
          }}
          zoom={12}
        ></GoogleMap>
      ) : (
        <>{<p>Loading...</p>}</>
      )}
    </div>
  );
};

export default Map;
