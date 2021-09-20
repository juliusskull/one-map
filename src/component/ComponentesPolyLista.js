import {  GeoJSON } from "react-leaflet";
import React, {   useEffect,useState  } from "react";

import {getComponentesPoligonos} from '../services/service';
import { getColor } from "./Reglas";
import { onEachFeature } from './OnEachFeature';
export const ComponentesPolyLista = (props)=>{
    const [worldGeoJSON, setWorldGeoJSON] = useState(false);
    const [listo, setListo] = useState(false);
    const [style, setEstyle] = useState(null);
    const [idTipoServicio, setIdTipoServicio] = useState(1);


      function  fetchData(){
       
        getComponentesPoligonos({referencia:props.referencia}).then(a=>{
          //  console.log(a[0].properties);
            setWorldGeoJSON(a);
            setEstyle(a.style);
            setListo(true);
            a[0] && a[0].properties && setIdTipoServicio(a[0].properties.ID_TIPO_SERVICIO);
    })}
    
    useEffect( ()=> fetchData(), []);

    return    listo&& (<GeoJSON
        data={worldGeoJSON}
        onEachFeature={onEachFeature}
        style={() => ({
            color: '#000',
            weight: 0.5,
            fillColor: getColor(idTipoServicio),
            fillOpacity: 1,
            
          })}
  /> )
}