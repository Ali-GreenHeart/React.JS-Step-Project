import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./header.scss";

class Header extends Component {
    render() {
        return (

            <div className="header">
                <div className={"logo-img"}>
                    <img src={require("./logo/logo.png")} alt=""/>

                </div>
                <ul className ="tabs">

                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/actual'}>Actual</Link></li>
                    <li><Link to={'/archive'}>Archive</Link></li>
                    <li><Link to={'/create'}>Create</Link></li>

                </ul>
            </div>
        );
    }
}

export default Header;