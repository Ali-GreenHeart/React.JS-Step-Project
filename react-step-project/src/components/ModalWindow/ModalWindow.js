import React from 'react';
const ModalWindow =({header,closeicon, actions,close})=> {
    return (
        <div className="mdl">
            <header>
                {header}
                {closeicon && <button onClick={close} className="close">X</button>}

            </header>
            {actions}
        </div>
    );

};

export default ModalWindow;
