
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

import React, { useState } from 'react';

function App() {
 const [mode,setMode] = useState('light')
 const [alert,setAlert] = useState(null)

  const showAlert =(message,type)=>{//for showing alert
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

 const toggleMode =() =>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='grey'
    showAlert("Dark Mode has been Enabled","success")
  }
  else {
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Dark Mode has been Disabled","success")
   }
  }
  return (
    <>
  
    <Navbar title="TextUtils-Lalit chaudhari" AboutMe="About" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert ={alert}/>
   <div className="container mx-4">
   
   <TextForm heading="Enter The Text That Analyse Here " showAlert= {showAlert} mode={mode}/>
   <div className="container mx-4">
   <About/>
   </div>
  
   </div>
    </>
    
  )
}
export default App;
