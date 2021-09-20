import React, {   useEffect,useState  } from "react";
import { MapContainer,  TileLayer ,LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {fuentes,getInmuebleReferencia} from '../services/service';
import {Punto} from  './Punto';
import {Inmuebles} from  './Inmuebles';
import { Tramos } from "./Tramos";
import {ComponentesPolyLista} from './ComponentesPolyLista';
import {  UsuarioContext } from '../App';
import {ComponentesLineasLista} from  './ComponentesLineasLista';
import L from 'leaflet';


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon


export default  function  MapaPopup(){

  const params=React.useContext(UsuarioContext);


  const [listo, setListo] = useState(false);
  const [properties, setProperties] = useState( [] );
  const [position, setPosition] = useState( [-24.7960685, -65.500669] );
  const [inm, setInm] = useState( null );
  const [error, setError] = useState( '' );

   
    useEffect( ()=> {
      const fetchData = async () => {
     
        const getInm = (_lat, _lng, _loc) =>{
          getInmuebleReferencia({lat:_lat,lng: _lng ,id_loc : _loc }).then(b=>{
            console.log(`inm=${b[0].ID_INM}`);
            if(b[0] && b[0].ID_INM ){
            setInm(b[0]);   
            setListo(true);
          }else{
            setError('Error no se encontro inmueble de referencia');
            getInm(parseFloat(_lat)- parseFloat(0.0001), _lng, _loc);
          }
        });

        }
        fuentes({id_loc : params.get("id_loc"), id_fuente: params.get("id_fuente") }).then(a=>{
          setProperties(p=> [...p, a[0]] );
          setPosition( [a[0].geometry.coordinates[1],a[0].geometry.coordinates[0]]);
          getInm(a[0].geometry.coordinates[1],a[0].geometry.coordinates[0] , 1 )
         /*  getInmuebleReferencia({lat:a[0].geometry.coordinates[1],lng: a[0].geometry.coordinates[0] ,id_loc : 1 }).then(b=>{
            console.log(`inm=${b[0].ID_INM}`);
            if(b[0] && b[0].ID_INM ){
            setInm(b[0]);   
            setListo(true);
          }else{
            setError('Error no se encontro inmueble de referencia');
          }
        }); */
      
      
        });
      
      }
    fetchData();
    },[]);
 
  return (

      listo?<div>
        
        <MapContainer
          style={{ height: "480px", width: "100%" }}
          zoom={18}
          maxZoom={24}
          center={position}   
                   
        >
   {/*      <LayersControl position="topright">
        <LayersControl.Overlay name="Feature group">
        <FeatureGroup pathOptions={{ color: 'purple' }}>
          <Popup>Popup in FeatureGroup</Popup>
          <Circle center={[51.51, -0.06]} radius={200} />
          <Rectangle bounds={rectangle} />
        </FeatureGroup>
      </LayersControl.Overlay>
        </LayersControl> */}
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />    
         
         {
          properties && properties.map((a,i)=>{     
           
            return  <Punto  key={i} id={i} position={[a.geometry.coordinates[1],a.geometry.coordinates[0]]} properties ={ [a.properties]} />
           
  
           })

          }

         <Tramos referencia={inm.ID_INM} id_loc={params.get("id_loc")}/>
       
          <Inmuebles referencia={inm.ID_INM}/>
          <ComponentesPolyLista referencia={inm.ID_INM}/>
          <ComponentesLineasLista referencia={inm.ID_INM}/>
        </MapContainer>
      </div>:error?<div>{error}</div>:<div>cargando</div> 
    );

}
