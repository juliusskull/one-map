import React, {   useEffect,useState  } from "react";
import {getTramos} from '../services/service';

import { PolylineGesp } from "./PolylineGesp";
/** muestra los tramos dado una referencia que es id_inm y el id_loc */
export const Tramos= (props)=>{
    
    const [tramos, setTramos] = useState( [] );
    const [listo, setListo] = useState(false);

    const fetchData = async () => {    
      getTramos({id_loc : props.id_loc, referencia: props.referencia}).then(a=>{
          a.forEach(element => {
            setTramos(p=> [...p, element] );
            setListo(true);
          });
       
      });

  }
   
    useEffect( ()=> {    
      fetchData()
    }, []);



/**cambio la direccion del array venia [lng,lat] a [lat, lng] que usa Polyline */
    return     listo && tramos.map((a,id)=>{     
             
        const cc= a.geometry.coordinates.map((b,index)=>{
          
          return [b[1],b[0]];
         
              
        });
    


        return <PolylineGesp   key={id}  a={a} id={id} cc={cc}/>
        
       

       })

}