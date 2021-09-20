import {Polyline,Tooltip } from "react-leaflet";
import React, {   useState  } from "react";
import "leaflet/dist/leaflet.css";
import CloseButton from 'react-bootstrap/CloseButton';
import { getColor } from "./Reglas";
import {Propiedades} from "./Propiedades";
export const PolylineGesp = (props)=>{
    const [mostrar, setMostrar] = useState( false);
    const getToltip = (a)=>{
        return  mostrar && <>
        
        <Tooltip direction='right' offset={[-8, -2]} opacity={1} permanent interactive={true}>
        <CloseButton  onClick ={e => { setMostrar(false) } }/>
        <span><Propiedades properties={a.properties} index = {1}/> </span>
       
         </Tooltip></>
      }

      

      return <Polyline key={props.id} positions={props.cc} color={getColor(props.a.properties.ID_TIPO_SERVICIO)}  
       stroke-width={'2'} dashArray={'30 10'}  eventHandlers={{ click: e => {  setMostrar(true)  }} }
     
      >
              {getToltip(props.a)}
              </Polyline>
}