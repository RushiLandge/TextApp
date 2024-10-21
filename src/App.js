
import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import NoFile from './Components/NoFile';
import { BrowserRouter as Router,
   Routes,
   Route  
  } from "react-router-dom"; 


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils" aboutText= "About Us" mode={mode}  toggleMode={toggleMode}/>
    <div className="container my-3">
    <Routes>
    <Route exact path='/' element={<TextForm heading = " TextUtils-Word Counter, Character Counter, UpperCase to LowerCase and Vice Versa" mode={mode}/>} />
    <Route exact path='/about' element={<About mode={mode}/>} />
    <Route path="*" element={<NoFile/>} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
