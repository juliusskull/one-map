import React, {   useEffect,useState  } from "react";
import axios from 'axios';
export const Uploading =()=>{

     const [listo, setListo] = useState(false);
     const [files, setFiles] = useState([1]);
     const [loading, setLoading] = useState(false);
     const [selectedFile, setSelectedFile] = useState([]);     
     

    const addFileUpload =()=>{
        console.log(`files=>${files.length}`);
        files.push(1);
        setListo(listo?false:true);


    }
    const delteFileUpload  =()=>{
        files.pop()
        setListo(listo?false:true);
    }
    
  
const onFileUpload  =()=>{
   
    selectedFile.forEach(a=>{
        console.log('indegreso:'+a.name );
        setLoading (true);
        const formData = new FormData();
        formData.append(
            "upFile",
            a,
            a.name
        );
        axios.post("https://www.aguasdelnortesalta.com.ar:5300/api/uploads/", formData).then((response) => {
            setLoading (false);
        });
    });

}
const onFileChange = event => {
    setSelectedFile([ ...selectedFile,event.target.files[0]] );
    //selectedFile.push(event.target.files[0])
    }
  

     return !loading ? <div>
			
     <h3>
     Seleccione los Archivos a Enviar 1
     </h3>
     <div>
      
        { files.map(( a, i)=>{ return <><p key={i}> <input key={i} type="file" onChange={onFileChange} /></p></>})}
         <><button onClick={addFileUpload}>
         add!
         </button>
         <button onClick={delteFileUpload}>
         Ocultar!
         </button>
         <button onClick={onFileUpload}>
         Upload!
         </button></>
     </div>
  
 </div>: <h3>Enviando...</h3>
}