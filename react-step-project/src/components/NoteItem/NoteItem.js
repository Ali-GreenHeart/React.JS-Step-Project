import React, {Component} from 'react';
import "./NoteItem.css"
import {Link} from "react-router-dom";
class NoteItem extends Component {
    style={
        backgroundColor: this.props.color,
        width:this.props.width
    };
    api=this.props.api;

    render() {
        return (
            <Link to={`notes/${this.props.id}`} onClick={()=>{this.props.getId(this.props.id)}}>
                <div className={"note"}  style={this.style}>
                            <div className="note-title">
                                {this.props.title}
                            </div>
                            <div className="note-content">
                                {this.props.content}
                            </div>
                </div>
            </Link>
        );
    }
}

export default NoteItem;