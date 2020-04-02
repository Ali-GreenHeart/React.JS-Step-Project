import React from 'react';


const Button = ({name,type,btnWork}) => {
    return (
        <button onClick={btnWork} type={type}>{name}</button>
    );
};




export default Button;