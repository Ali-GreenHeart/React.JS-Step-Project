import React, {Component} from 'react';
import "./SingleNote.scss"
import Buttons from "../Button/Buttons";
import ModalWindow from "../ModalWindow/ModalWindow";
import { Redirect} from "react-router-dom";

class SingleNote extends Component {
    state={
        showModal:false,
        redirect: false,
        edit:true

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
                    this.setState({title:data.title});
                    this.setState({content:data.content});
                    this.setState({color:data.color})


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
            .then(
                this.props.fetch
            );

    };

    editNote = (e) => {
        this.setState({[e.target.name]:e.target.value});
        console.log(e.target.name);
        fetch(`${this.props.api}/notes/${this.props.id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    [e.target.name]:e.target.value
                }),
                headers: {
                    "Content-type": "application/json"}
            })
                .then(response => response.json())
                .then(
                    this.props.fetch
                );

    };
    editButtonHandle = () =>{
        this.setState({edit:!this.state.edit})
    };

    render() {
        return (
            <div className={"container"}>
                <div className={"note-item"}>
                    <input disabled={this.state.edit} name={"title"}  onChange={this.editNote} type="text" className={"note-header"} defaultValue={this.state.title} style={{backgroundColor:this.state.color}}/>
                    <textarea disabled={this.state.edit} name={"content"} onChange={this.editNote}  className={"note-body"} defaultValue={this.state.content} />
                </div>
                <div className="buttons">
                    <Buttons text={this.state.edit?"EDIT":"SAVE"} onClick={this.editButtonHandle}/>
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
