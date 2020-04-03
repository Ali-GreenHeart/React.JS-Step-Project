import React from 'react';
import "./ModalWindow.scss"
const ModalWindow =({header,closeicon, actions,close})=> {
    return (
        <div className="modal">
            <header>
                {header}
                {closeicon && <button onClick={close} className="close">X</button>}

            </header>
            {actions}
        </div>
    );

};

export default ModalWindow;
