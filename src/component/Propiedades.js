import { popupContent } from "./popupStyles";
import {get_regla_campos,get_regla_fila} from  './Reglas';
/** muestra el properties de un geo-json dinamicamente */
export const Propiedades=(props) =>{

        const properties= props.properties;
        const fila=(properties)=>{
          return   Object.keys(properties).map(function(key,id) {
           
             return(get_regla_fila(key) && <tr key={id}><td>{get_regla_campos(key)}</td><td>{properties[key]}</td></tr>)
         })
        }

        return (<div key={props.index} style={popupContent} >
                <table className="table table-sm" style={{ border: "3px solid rgb(0, 0, 0)"}}>   
                <thead>
                <tr><th>tipo</th><th>valor</th></tr>  
                </thead>
                <tbody>
                  
               { fila(properties)}
                </tbody>
                </table></div>)

     
}