import React, { useState } from "react";//test

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    text !== '' && props.showAlert("Converted to Upper Case","Success")//first pass in app.js then get here.
  };

  const handleLowClick = () => {
    console.log("Lower Case Was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    text !== '' && props.showAlert("Converted to Lower Case","Success")//first pass in app.js then get here.
  };

  const handleClearClick = () => {
    console.log("Clear Button was" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared Successfully!","Success")//first pass in app.js then get here.
  };

  const handleOnChange = (event) => {
    setText(event.target.value); //to get all value that we are entering
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="my Box"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Upper Case
        </button>
        <button className="btn btn-primary mx-4" onClick={handleLowClick}>
          Convert To Lower Case
        </button>
        <div className="container my-3">
          <button className="btn btn-danger" onClick={handleClearClick}>
            {" "}
            Clear The Text
          </button>

          <h3>
            Our Text Summary
            <p>
                {text !== "" ? text.split(" ")?.length : 0} Word and {text?.length} characters   
            </p>
          </h3>
          <h2> Preview 
            <p>{text}</p>
            </h2>
        </div>
      </div>
    </>
  );
}
