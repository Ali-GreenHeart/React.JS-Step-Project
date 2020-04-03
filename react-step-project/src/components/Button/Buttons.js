import React from 'react';
import "./button.css"

const Buttons = ({text,onClick})=> {
    return (
        <button className="btn" onClick={onClick}>{text}</button>
    );

};

export default Buttons;
