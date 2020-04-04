import React, {Component} from 'react';
import NoteItemWrapper from "./components/NoteItemWrapper/NoteItemWrapper";
import Header from "./components/Header/header";
import {Route} from "react-router-dom";
import NoteItem from "./components/NoteItem/NoteItem";
import "./components/NoteItemWrapper/NoteItemWrapper.js"
// import Routes from "./component/routes";


class FakeApp extends Component {

    state = {
        notes:[],
        archived: [],
        actuals:[]
    };

    api ="http://localhost:3002";

    componentDidMount() {
        fetch(`${this.api}/notes`)
            .then(r => r.json())
            .then(
                (data) => {
                    this.setState({notes: data});
                    console.log(data);
                },
            );

    }

    loadHome = () =>{
        return    <div className={"note-item-wrapper"}>
            {
                this.state.notes.map((notes) => {
                    return <NoteItem  title={notes.title}
                                      id={notes.id}
                                      content={notes.content}
                                      color={notes.color}
                                      width={"250px"}
                                      api={this.api}

                    />


                })
            }
        </div>
    };

    loadActual = () =>{
        let actuals = this.state.notes.filter(item => item.status === "actual");
        return    <div className={"note-item-wrapper"}>
            {
                actuals.map((notes) => {
                    return <NoteItem  title={notes.title}
                                      id={notes.id}
                                      content={notes.content}
                                      color={notes.color}
                                      width={"250px"}
                                      api={this.api}
                    />


                })
            }
        </div>

    };

    loadArchive = () =>{
        let archived = this.state.notes.filter(item => item.status === "archive");
        return    <div className={"note-item-wrapper"}>
            {
                archived.map((notes) => {
                    return <NoteItem  title={notes.title}
                                      id={notes.id}
                                      content={notes.content}
                                      color={notes.color}
                                      width={"250px"}
                                      api={this.api}
                    />


                })
            }
        </div>

    };

    loadCreate = () =>{
        return <h1>Create burda olmalıdı</h1>
    };

    loadSingleNote = (id) =>{
        return <h1>Single NOte </h1>
    };


    render() {
        return (
            <div>
                <Header/>

                <Route path={'/'} exact render={this.loadHome}/>
                <Route path={'/actual'} render={this.loadActual}/>
                <Route path={'/archive'} render={this.loadArchive}/>
                <Route path={'/create'} render={this.loadCreate}/>
                <Route path={'/notes/:noteID'} render={this.loadSingleNote}/>



            </div>
        );
    }
}

export default FakeApp;