import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
// import About from './components/About'
import { useState } from 'react';

function App() {
  const[Mode,setMode] =useState("light")
  // const[blueMode,setblueMode] = useState("light")
  // const[Txcolor,setTxcolor] = useState("light")
  const togglemode = ()=>{
    if(Mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  const togglemode2 =()=>{
    if(Mode!="primary"){
      setMode("primary");
      document.body.style.backgroundColor = "blue";
      document.body.style.color = "white";
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
    <>
    <Navbar title="Textbook" mode={Mode} togglemode={togglemode} togglemode2={togglemode2}/>
    <div className="container">
    <Form heading="Enter Your content Here" mode={Mode}/>
    </div>
    {/* <div className="con my-3">
    <About />
    </div> */}
    </>
  );
}

export default App;
