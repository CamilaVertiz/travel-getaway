import React, { useState } from "react";
import Select from 'react-select';
import { data, countrySelect, timeSelect, transSelect } from '../data/data'
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

const Controls = (props) => {    
    const [isMenuOpened, setMenuOpened] = useState(true)
    const handleClick = () =>{
        setMenuOpened( prevState => !prevState)
    } 
    
    const [selectedCountry, setSelectedCountry] = useState(countrySelect[0]);
    const [selectedTime, setSelectedTime] = useState(timeSelect[1]);   
    const [selectedTrans, setSelectedTrans] = useState(transSelect[0]);   

    const onChangeSelectedC = e => {
        setSelectedCountry(e);
    };

    const onChangeSelectedT = e => {
        setSelectedTime(e);
    };

    const onChangeSelectedW = e => {
        setSelectedTrans(e);
    };   

    const onClick = () => {
        const audio = data[selectedCountry.value].audio;
        props.updateAudio(audio);
        
        const video = data[selectedCountry.value].time[selectedTime.value].way[selectedTrans.value];
        props.updateVideo(video);

        setTimeout(function(){ setMenuOpened( prevState => !prevState) }, 400);
    };

    return (
        <OffCanvas width={300} transitionDuration={300} effect={"parallax"} isMenuOpened={isMenuOpened} position={"right"} >
            <OffCanvasBody className="canvas-body" style={{ fontSize: "30px" }}>       
                <a className="canvas-open" onClick={handleClick}>🡠</a>
            </OffCanvasBody>
            <OffCanvasMenu className="canvas-menu">
                <div className="canvas-container">
                    <a className="canvas-close" onClick={handleClick}>✕</a>
                    <p>Select your journey</p>
                    <p className="mt">Destiny</p>
                    <Select options={countrySelect} onChange={onChangeSelectedC} value={selectedCountry} />
                    <p className="mt">Time</p>
                    <Select options={timeSelect} onChange={onChangeSelectedT} value={selectedTime} />
                    <p className="mt">Way</p>
                    <Select options={transSelect} onChange={onChangeSelectedW} value={selectedTrans}/>
                    <div className="text-center mt-4">
                         <button onClick={onClick} className="btn btn-info">Go</button>
                    </div>
                </div>
            </OffCanvasMenu>
        </OffCanvas>
    );
  }
  
  export default Controls;