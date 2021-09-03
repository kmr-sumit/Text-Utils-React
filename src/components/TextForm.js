import React, { useState } from "react";
import PropTypes from 'prop-types';

function TextForm(props) {
  const [text, setText] = useState("");
  function handleUpper() {

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case ", "Sucess");
  }
  function handleLower() {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case ", "Sucess");
  }
  function handleClear() {

    let newText = "";
    setText(newText);
    props.showAlert("Cleared the TextArea", "Sucess");
  }
  function handleCopy(){
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied Text to Clipboard", "Sucess");
    document.getSelection().removeAllRanges(); //To remove the copy arrw from text already copied. 
  }
  function handleRemoveSpaces(){
    let newText = text.split(/[  ]+/);
    // console.log(newText);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "Sucess");
  }
  //Event Functions
   
  function handleChange(event) {
    setText(event.target.value);
  }
  

  return (
    <>
      <div className="container" style={{color: props.modePassed === "dark"?"white":"#042743"}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" style={{backgroundColor: props.modePassed==="dark"?"#13466e":"white", color:props.modePassed==="dark"?"white":"#042743"}} rows="5" onChange={handleChange} value={text} placeholder="Enter text here"></textarea>
        </div>
        <button type="button" disabled={text.length===0} onClick={handleUpper} className="btn btn-primary mx-2 my-1">
          Convert to Upper Case
        </button>
        <button type="button" disabled={text.length===0} onClick={handleLower} className="btn btn-primary mx-2 my-1">
          Convert to Lower Case
        </button>
        <button type="button" disabled={text.length===0} onClick={handleClear} className="btn btn-primary mx-2 my-1">
          Clear Text
        </button>
        <button type="button" disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-2 my-1">
          Copy Text
        </button>
        <button type="button" disabled={text.length===0} onClick={handleRemoveSpaces} className="btn btn-primary mx-2 my-1">
          Remove Extra Spaces
        </button>
        
      </div>
      <div className="container my-3" style={{color:props.modePassed==="dark"?"white":"#042743"}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{
          return element.length!==0}).length} minutes will be required to read the text</p>
        <h2> Preview</h2>
        <p>{text.length>0?text:"Nothing to preview Yet"}</p>
      </div>
    </>
  );
}
TextForm.propTypes = {
  modePassed: PropTypes.string,
  heading: PropTypes.string,
  showAlert:PropTypes.func  

}
export default TextForm;
