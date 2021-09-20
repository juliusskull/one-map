import './App.css';
import React, {   useState  } from "react";
//import MapaPopup from "./component/MapaPopup";
import {Mapa} from './component/prueba/mapa';
import logo from  "./logo.png";
import useContext  from 'react';


import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";




export const UsuarioContext = React.createContext(1);
 function App() {
 


const error=()=>{
  return <h1>Parametros incorrectos</h1>
}
    return <Mapa></Mapa> 
 
}

export default App;
