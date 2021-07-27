import React from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };
  const defaultCenter = {
    lat: 22.310976793978966,
    lng: 73.17723286137581,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCLDRAs64Jq7uzMlWKGWaMBF9BqaxOCXNw">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} onClick={() => defaultCenter} />(
        <InfoWindow position={defaultCenter} clickable={true}>
          <p>Digibea, Vadodara</p>
        </InfoWindow>
        )
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCLDRAs64Jq7uzMlWKGWaMBF9BqaxOCXNw",
// })(MapContainer);
