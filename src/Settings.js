import React, { useState } from "react";
import SettingsContext from "./SettingsContext";
import {useContext} from "react";
import BackButton from "./backButton";

function Settings(){

  const settingsInfo = useContext(SettingsContext);
   const [val,setVal]=useState(['Explain what you just learned', 'Connect to previous topic']);
   const feynman = "Explain what you just learned";
  const elab = "Connect to previous topic";
   const handleAdd=()=>{
       const abc=[...val, [], []]
       
       setVal(abc)
   }
   const handleChange=(onChangeValue,i)=>{
    const inputdata=[...val]
    inputdata[i]=onChangeValue.target.value;
    setVal(inputdata)
   }

   console.log(val,"data-")

   const addBtnStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: '#fff',
    border:0,
    width: "60px",
    padding: "10px 10px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1rem",
    marginBottom: "20px",
  };



  const inputStyles = {
    padding: "8px 12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    width: "100%", // This will make the input take the full width available
    fontSize: "1rem",
    color: "#4f2727",
    backgroundColor: "#DDBEA3"
  };

return(
    <>
    <button onClick={()=>handleAdd()} style={addBtnStyles}>Add</button>
        {val.map((data,i)=>{
            return(
               <div>
                    <input value={data} onChange={e=>handleChange(e,i)} style={inputStyles} />
                    
               </div>
            )
            
        })}
        <div style={{textAlign:'center', marginTop:'20px'}}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </>
);
}
export default Settings;



/*
import ReactSlider from 'react-slider';
import './slider.css'
import SettingsContext from "./SettingsContext";
import {useContext} from "react";
import BackButton from "./backButton";


function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return(



  
    <div style={{textAlign:'left'}}>
      <label>work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{textAlign:'center', marginTop:'20px'}}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>

    </div>
  
  );
}

export default Settings;

*/