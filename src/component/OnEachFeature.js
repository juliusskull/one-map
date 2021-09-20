import ReactDOMServer from 'react-dom/server';
import { Propiedades } from "./Propiedades";
export const Popup = ({ feature }) => {
    let popupContent;
    if (feature.properties && feature.properties.popupContent) {
      popupContent = feature.properties.popupContent;
    }
    return (<Propiedades properties={feature.properties} index = {1}/>)
 
  };
  export const onEachFeature = (feature, layer) => {
    const popupContent = ReactDOMServer.renderToString(
      <Popup feature={feature} />
    );
    layer.bindPopup(popupContent);
  };