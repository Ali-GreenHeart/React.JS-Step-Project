import React, {Component} from 'react';
import "./NoteItem.css"
class NoteItem extends Component {
    style={
        backgroundColor: this.props.color,
        width:this.props.width
    };

    render() {
        return (
            <div>
                <div className={"note"}  style={this.style}>
                            <div className="note-title">
                                {this.props.title}
                            </div>
                            <div className="note-content">
                                {this.props.content}
                            </div>
                </div>
            </div>
        );
    }
}

export default NoteItem;