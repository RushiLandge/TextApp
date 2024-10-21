import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{ 
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleClClick = ()=>{ 
        let newText = '';
        setText(newText)
    } 
    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleChange = (event)=>{
        setText(event.target.value)
    }
    const handleExtra = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleCopy= ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    }

        
 const [text, setText] = useState('');
   return (
    <>
   <div className="container " style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtra}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
  </div>
  <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Text Summary</h1>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & {text.length} characters</p>
      <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
  </div>
  </>
  )
}
