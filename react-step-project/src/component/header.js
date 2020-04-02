import React, {Component} from 'react';
import {Link,Route} from "react-router-dom";
import Create from "./Create";
import Archive from "./Archive";
import Actual from "./Actual";
import "./style.scss";

class Header extends Component {
    render() {
        return (
            <div>
                <ul className ="tabs">

                    <li><Link to={'/actual'}>Actual</Link></li>
                    <li><Link to={'/archive'}>Archive</Link></li>
                    <li><Link to={'/create'}>Create</Link></li>

                </ul>
                <Route path={'/actual'} component={Actual}/>
                <Route path={'/archive'} component={Archive}/>
                <Route path={'/create'} component={Create}/>

            </div>
        );
    }
}

export default Header;