import './App.css';
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
// import About from "./components/About";
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const handleMode = ()=>{
    if(mode==='light'){
      setmode("dark");
      document.body.style.backgroundColor = "#111340";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "White";
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="Text-Config" mode={mode} handleMode={handleMode}/>
      <h1><br /></h1>
      <div className="container my-3">
        {/* <Routes>
        <Route exact path="/" element={<TextArea heading="Enter Text Below" mode={mode} />}/>
        <Route path="/about" element={<About mode={mode} />}/>
        </Routes> */}
        <TextArea heading="Enter Text Below" mode={mode} />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
