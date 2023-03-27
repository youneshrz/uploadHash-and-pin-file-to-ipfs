import React,{useState} from 'react'
import axios from 'axios';
const Moralis = require('moralis').default;

const App = ()=>{
  const [fileUrl, setFileUrl]=useState('')
  const [baseurl,setbaseurl]=useState('')

   let formData = new FormData()
      async function  convertToBase64(e) {
          //Read File 
        var selectedFile = e.target.files[0]
          //Check File is not Empty
          if (selectedFile != undefined) {
              // FileReader function for read the file.
              var fileReader = new FileReader();
              var base64;
              // Onload of file read the file content
              fileReader.onload = function(fileLoadedEvent) {
                  base64 = fileLoadedEvent.target.result;
                  // Print data in console
                  // console.log(base64);
                  setbaseurl(base64)
              };
              // Convert data to base64
              fileReader.readAsDataURL(selectedFile);
    
              const formdata={'url':baseurl}
              
             
               console.log(e.target.files[0])
               ///////////////////////
               formData.append('file', e.target.files[0])
               await axios({
                method: "post",
                url: 'http://localhost:4000/upload',
                data: formData,
                headers: { "Contetnt-Type":"multipart/form-data"  },
              })
                .then(function (response) {
                  //handle success
                  console.log(response);
                  setFileUrl(response)
                })
                .catch(function (response) {
                  //handle error
                  console.log(response);
                });
         }
       }
  return(
    
    <div>
        <h1>hi</h1>
        <input id="inputFile" type="file" onChange={convertToBase64} />
        <p>{baseurl}</p>
      </div>
  )
}
export default App