import axios from 'axios';

import React,{Component} from 'react';

class Uploading extends Component {
  
    state = {

	// Initially, no file is selected
	selectedFile: []/* null */
    ,files: [1]
	};
    
	
	// On file select (from the pop up)
	onFileChange = event => {
	
	// Update the state
	this.setState({ 
        selectedFile:[ ...this.state.selectedFile,event.target.files[0]] 
        
    });
	
	};
	addFileUpload = () => {
        console.log('xx');
        this.setState(({ 
            selectedFile:[ ...this.state.files,1] 
            
        }));
      }
	// On file upload (click the upload button)
	onFileUpload = () => {  
	
	// Create an object of formData
	const formData = new FormData();
        console.log('long' +this.state.selectedFile.length );
	// Update the formData object
/* 	formData.append(
		"upFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	
	// Details of the uploaded file
	console.log(this.state.selectedFile);
	
	// Request made to the backend api
	// Send formData object
	axios.post(" https://www.aguasdelnortesalta.com.ar:5300/api/uploads/", formData); */
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h2>File Details:</h2>
			
<p>File Name: {this.state.selectedFile.name}</p>

			
<p>File Type: {this.state.selectedFile.type}</p>

			
<p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>

		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Choose before Pressing the Upload button</h4>
		</div>
		);
	}
	};
    //fileAddComp = (i) => {return <><p key={i}> <input key={i} type="file" onChange={this.onFileChange} /></p></>}
	
	
	render() {
	
	return (
		<div>
			
			<h3>
			Seleccione los Archivos a Enviar
			</h3>
			<div>
				{/* <p><input type="file" onChange={this.onFileChange} /></p>
                <p><input type="file" onChange={this.onFileChange} /></p>
                <p><input type="file" onChange={this.onFileChange} /></p> */}
                { this.state.files.map(( a, i)=>{ return <><p key={i}> <input key={i} type="file" onChange={this.onFileChange} /></p></>})}
                <button onClick={this.addFileUpload}>
				add!
				</button>
                <button onClick={this.onFileUpload}>
				Upload!
				</button>
			</div>
		{/* this.fileData() */}
		</div>
	);
	}
}

export default Uploading;
