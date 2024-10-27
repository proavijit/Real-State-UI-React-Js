import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../pin/Pin";
import "./map.scss";
const Map = ({ items }) => {
  return (
    <MapContainer
      className="map"
      center={[51.505, -0.09]}
      zoom={7}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
};

export default Map;
