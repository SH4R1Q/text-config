import React,{useState} from 'react'

export default function TextArea(props) {
    const handleOnChange = (event)=>{
        toText(event.target.value);
        setcopy("Copy");
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        toText(newText);
        setcopy("Copy");
    }

    const handleDClick = ()=>{
        let newText = text.toLowerCase();
        toText(newText);
        setcopy("Copy");
    }
    const handleCopy = ()=>{
        let t = document.getElementById("textBox");
        t.select();
        navigator.clipboard.writeText(t.value);
        setcopy("Copied!")
    }
    const handleClear = ()=>{
        toText("");
        setcopy("Copy");
    }

    const [copy, setcopy] = useState("Copy")
    const [text, toText] = useState("");//text is a state variable here
    //text = "new text"; wrong way to update 
    //toText("new text"); correct way to update
  return (
    <div style={props.mode==='light'?{color: 'black'}:{color: 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={props.mode==='light'?{backgroundColor:'white',color:'black'}:{backgroundColor:'#071116',color:'white'}} value={text} onChange = {handleOnChange} id="textBox" rows="10"></textarea>
        </div>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mx-1`} onClick={handleUpClick}>To Upper Case</button>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mx-1`} onClick={handleDClick}>To Lower Case</button>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mx-1`} onClick={handleCopy}>{copy}</button>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mx-1`} onClick={handleClear}>Clear</button>
        <div className="container my-3">
           <p>{text.length} Characters and {text.length===0?0:text.trim().split(" ").length} Words</p>
        </div>
    </div>
  );
}
