import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

}

export default ModalWindow;
