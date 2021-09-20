import { Marker,Popup } from "react-leaflet";
import { Propiedades } from "./Propiedades";
/**muestra un Marker con un popup con las propiedades del geo-json */
export  function Punto(promp){
   
   
    const propiedades=() =>{

     return promp.properties.map((a,index)=>{

          return <Propiedades key={index} properties={a} index = {index} />
      });
        

    }

    return <Marker  key={`Marker-${promp.id}`} position={promp.position}  iconSize={[25, 41]} iconAnchor ={[19, 46]} popupAnchor ={ [0, -36]} offset= {[0, 0]}>
    <Popup>
      {propiedades()}
    </Popup>
    </Marker>   
}