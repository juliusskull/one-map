import {  GeoJSON } from "react-leaflet";
import React, {   useEffect,useState  } from "react";


import {getComponentesLineas} from '../services/service';

import { PolylineGesp } from "./PolylineGesp";
export const ComponentesLineasLista= (props)=>{
    const [worldGeoJSON, setWorldGeoJSON] = useState(false);
    const [listo, setListo] = useState(false);
    const [style, setEstyle] = useState(null);
    const [idTipoServicio, setIdTipoServicio] = useState(1);


      function  fetchData(){
       
        getComponentesLineas({referencia:props.referencia}).then(a=>{
            //console.log(a[0].properties);
            setWorldGeoJSON(a);
            setEstyle(a.style);
            setListo(true);
            a[0] && a[0].properties && setIdTipoServicio(a[0].properties.ID_TIPO_SERVICIO);
    })}
    
    useEffect( ()=> fetchData(), []);

/*     return    listo&& (<GeoJSON
        data={worldGeoJSON}
        onEachFeature={onEachFeature}
        style={() => ({
            color: '#000',
            weight: 0.5,
            fillColor: getColor(idTipoServicio),
            fillOpacity: 1,
            
          })}
  /> ) */
  return     listo && worldGeoJSON.map((a,id)=>{     
             
    const cc= a.geometry.coordinates.map((b,index)=>{
      
      return [b[1],b[0]];
     
          
    });



    return <PolylineGesp   key={id}  a={a} id={id} cc={cc}/>
    
   

   })
}