import React, {useState} from 'react'


export default function Form(props) {
    const [color,Setcolor] = useState({
      backgroundColor:"white",
      color:"black"
    })
    const [Text,setText] = useState("");
    const onchangehandling=(event)=>{
        // console.log("onchange");
        setText(event.target.value);
    }
    const changeToUpperCase=()=>{
            // console.log("clicked");
            let newText=Text.toUpperCase();
            setText(newText);
    }
    const changeToLowerCase = ()=>{
      let newText = Text.toLowerCase();
      setText(newText);
    }
    const Capitalise=()=>{
      let words = Text.split(" ");
      let neww = '';
      words.forEach(element=>{
        neww = neww + element.charAt(0).toUpperCase()+element.slice(1)+" ";
      })
      setText(neww);
    }
   
    const FilterEmail = ()=>{
      let arr = Text.split(" ");
      let varia = " ";
      arr.forEach(element => {
        if(element.includes("@gmail.com")){
          varia = varia + element + " "; 
          console.log(element);
        }
        setText(varia);
      });
    }
 
  return (
    <>
      <div>
  <div className="form-group my-3">
    <label htmlFor="exampleFormControlTextarea1">{props.heading}</label>
    <textarea className="form-control my-3" value={Text} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} onChange={onchangehandling} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={changeToUpperCase}>Change to UpperCase</button>
  <button className="btn btn-primary mx-2" onClick={changeToLowerCase}>Change to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={FilterEmail}>Filter Email</button>
  <button className="btn btn-primary" onClick={Capitalise}>Capitalise</button>
  </div>
  <div className="summary">
    <h2>Text Summary </h2>
    <p>The Length of Text is {Text.length} And The Numbers of Words it contains is {Text.split(" ").length-1}</p>
    
  </div>
  </>
  )
}
