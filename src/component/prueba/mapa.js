import React, {   useEffect,useState  } from "react";
import { MapContainer,  TileLayer,Marker,Popup  } from "react-leaflet";
import _data from '../../json/config.json';
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon
 export const Mapa = () => {
    const [ready, setReady] = useState(false);  
    const [config, setConfig] = useState(null);
    useEffect(()=>{                 
          setConfig(_data );
          setReady(true);
    },[]);   

    return (        
        ready&&  <MapContainer
          style={{ height: config.data.style.height, width: config.data.style.width }}
          zoom={ config.data.zoom}
          maxZoom={config.data.maxZoom}
          center={config.data.position}  
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />  
           <Marker   position={config.data.position}  iconSize={[25, 41]} iconAnchor ={[19, 46]} popupAnchor ={ [0, -36]} offset= {[0, 0]}>
          <Popup> <div>hola</div></Popup>
          </Marker>    
        </MapContainer>
    )
}
