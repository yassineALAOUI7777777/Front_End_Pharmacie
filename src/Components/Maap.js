import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet-src.esm";
import { Icon } from "leaflet";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import MarkerClusterGroup from "react-leaflet-cluster";

function Maap() {
  const markers = [
    {
      gecode: [31.6360206, -8.0266687, 16],
      popUp: "hello 1",
    },
    {
      gecode: [31.6478696, -8.016325, 16],
      popUp: "hello2",
    },
    {
      gecode: [31.5960493, -8.0699434, 14],
      popUp: "hello2",
    },
    {
      gecode: [31.5739064, -8.100411, 14],
      popUp: "hello2",
    },
  ];
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3349/3349322.png",
    iconSize: [38, 38],
  });
  return (
    <div className="map">
      <div className="map-container flex flex-col">
        <div className="map-container-inner w-full h-16 bg-[#385170] ">
          <h1 className="font-bold flex justify-center py-5 font-serif text-white">
            ANNUAIRE DES PARAPHARMACIES AU MAROC
          </h1>
        </div>
        <div className=" w-full">
          <MapContainer center={[30.3477201, -11.0172497, 6.95]} zoom={6}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors '
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
              {markers.map((marker) => (
                <Marker position={marker.gecode} icon={customIcon}>
                  <Popup>{marker.popUp}</Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </MapContainer>
        </div>

        <div className="w-full h-24" style={{ background: "#a6d5cc" }}>
          <div
            className="flex flex-row h-14  justify-start space-x-9 rounded-full"
            style={{ marginTop: "20px", marginLeft: "30px" }}
          >
            <select className="rounded-t-md rounded-b-lg">
              <option value="option1">Choisi la ville</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select className="rounded-t-md rounded-b-lg">
              <option value="option1">Choisi la zone</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select className="rounded-t-md rounded-b-lg">
              <option value="option1">Choisir la garde</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maap;
