import React, {Component} from 'react';
import NoteItem from "../NoteItem/NoteItem";
import "./NoteItemWrapper.css"

class NoteItemWrapper extends Component {
    render() {
        return (
            <div className={"note-item-wrapper"}>
            {
                this.props.notes.map((notes) => {
                    return <NoteItem  title={notes.title}
                                      content={notes.content}
                                      color={notes.color}
                                      width={"250px"}

                        />


                })
            }
          </div>
        );
    }
}

export default NoteItemWrapper;