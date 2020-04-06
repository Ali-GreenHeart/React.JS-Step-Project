import React, {Component} from 'react';
import "./NoteItem.css"
import {Link} from "react-router-dom";
class NoteItem extends Component {

    headerStyle={
            backgroundColor: this.props.color,

    };
    noteStyle={
        boxShadow: `0 5px 10px ${this.props.color}`,

    };

    api=this.props.api;

    render() {
        return (
            <Link to={`notes/${this.props.id}`} onClick={()=>{this.props.getId(this.props.id)}} >
                <div className={"note"}  style={this.noteStyle}>
                            <div className="note-title" style={this.headerStyle} >
                                {this.props.title}
                            </div>
                            <div className="note-content" >
                                {this.props.content}
                            </div>
                </div>
            </Link>
        );
    }
}

export default NoteItem;