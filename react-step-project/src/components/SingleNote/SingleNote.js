import React, {Component} from 'react';
import "./SingleNote.scss"
import Buttons from "../Button/Buttons";
import ModalWindow from "../ModalWindow/ModalWindow";
import { Redirect} from "react-router-dom";

class SingleNote extends Component {
    state={
        noteItem:{},
        showModal:false,
        redirect: false
    };

    toggleModal=()=>{
        this.setState({showModal:!this.state.showModal})
    };

    Redirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
    };


    componentDidMount() {
        fetch(`${this.props.api}/notes/${this.props.id}`)
            .then(r => r.json())
            .then(
                (data) => {
                    this.setState({noteItem:data})
                },
            );
    }

    deleteNote = () =>{
        fetch(`${this.props.api}/notes/${this.props.id}`, {
            method: 'delete'
        })
            .then(response => response.json())
            .then(
               this.props.fetch
            );

        this.setState({
            redirect: true
        })

    };
    addArchive = () =>{
        fetch(`${this.props.api}/notes/${this.props.id}`, {
            method: "PATCH",
            body: JSON.stringify({
            status: "archive"
        }),
            headers: {
             "Content-type": "application/json"}
        })
            .then(response => response.json())
            .then(json => console.log(json));

    };


    render() {
        return (
            <div className={"container"}>
                <div className={"note-item"} style={{backgroundColor:this.state.noteItem.color}}>
                    <div className={"note-title"}>{this.state.noteItem.title}</div>
                    <div className={"note-content"}>{this.state.noteItem.content}</div>
                </div>
                <div className="buttons">
                    <Buttons text={"EDIT"} />
                    <Buttons text={"ARCHİVE"} onClick={this.addArchive}/>
                    <Buttons text={"DELETE"} onClick={this.toggleModal}/>

                </div>
                {this.Redirect()}
                {
                    this.state.showModal && <div className='modal-container' onClick={this.toggleModal}>

                        <ModalWindow
                            header="Do you want to delete this file?"
                            closeicon={true}
                            close={this.toggleModal}
                            actions={[
                                <div>
                                    <Buttons onClick={this.deleteNote} text="delete"/>
                                    <Buttons onClick={this.toggleModal} text="Cancel"/>
                                </div>
                            ]}

                        />
                    </div>
                }


            </div>
        );
    }
}

export default SingleNote;
