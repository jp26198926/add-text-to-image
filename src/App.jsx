import { useState, useContext } from "react";
import { AppContext } from "./context/AppContext";
import ImageWithText from "./component/ImageWithText";
import FileUpload from "./component/FileUpload";
import sampleImage from "./assets/FPNG-Esig.png";

function App() {
  const {state} = useContext(AppContext);
  console.log(state.records);
  
  const [imgSrc, setImgSrc] = useState(sampleImage);


  return (
    <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      
      <header className="App-header text-center">  
        <FileUpload />    
        {
          state.records && state.records.map((record,idx) => (
            <ImageWithText key={idx} src={imgSrc} text={record} />
          ))
        }        
      </header>

    </div>
  )
}

export default App
