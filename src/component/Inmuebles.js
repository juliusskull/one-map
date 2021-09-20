import {  GeoJSON } from "react-leaflet";
import React, {   useEffect,useState  } from "react";
import "leaflet/dist/leaflet.css";
import {getInmuebles} from '../services/service';
import { onEachFeature } from './OnEachFeature';

export   function  Inmuebles(props){
    const [worldGeoJSON, setWorldGeoJSON] = useState(false);
    const [listo, setListo] = useState(false);

 function  fetchData(){
       
        getInmuebles({referencia:props.referencia}).then(a=>{
           
            setWorldGeoJSON(a);
            setListo(true);
    })}
    
    useEffect( ()=> fetchData(), [ ]);

    return    listo&& (<GeoJSON
        data={worldGeoJSON}
        onEachFeature={onEachFeature}
        style={() => ({
          color: '#A4A4A4',
          weight: 0.5,
          fillColor: "#F2F5A9",
          fillOpacity: 1,
          
        })}
  /> )

}