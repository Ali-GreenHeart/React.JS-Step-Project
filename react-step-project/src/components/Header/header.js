import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./header.scss";

class Header extends Component {
    render() {
        return (

            <div className="navbar">
                <Link to={'/'}>
                    <div className={"logo-img"}>
                        <img src={require("../../logo.png")} alt="logo"/>
                    </div>
                </Link>

                <div className ="tabs">
                    <Link to={'/actual'}>Actual</Link>
                    <Link to={'/archive'}>Archive</Link>
                    <Link to={'/create'}>Create</Link>

                </div>
            </div>
        );
    }
}

export default Header;