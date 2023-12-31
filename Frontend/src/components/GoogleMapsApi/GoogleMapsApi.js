import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import "./GoogleMapsApi.css";

const GoogleMapsApi = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyATbm3m875KnavZy2akpSvnXUEiAoasjr8",
  });

  const defaultCenter = {
    lat: -25.44373637644228,
    lng: -49.279007457671,
  };

  const labelStyle = {
    color: "green",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <div id="Map-api">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={defaultCenter}
          zoom={17}
        >
          <Marker
            position={defaultCenter}
            label={{
              text: "R. Pasteur, 463 - Batel Curitiba",
              ...labelStyle,
            }}
          />
        </GoogleMap>
      ) : (
        <>{<p>Carregando Mapa...</p>}</>
      )}
    </div>
  );
};

export default GoogleMapsApi;
