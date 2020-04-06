import React, {Component} from 'react';
import Header from "./components/Header/header";
import {Route} from "react-router-dom";
import NoteItem from "./components/NoteItem/NoteItem";
import SingleNote from "./components/SingleNote/SingleNote";
import CreatePage from "./components/CreatePage/CreatePage";
import "./App.scss"


class App extends Component {
    state = {
        notes:[],
        selectedId:null

    };

    api ="http://localhost:3002";

    fetchingData = () =>{
        fetch(`${this.api}/notes`)
            .then(r => r.json())
            .then(
                (data) => {
                    this.setState({notes: data});
                },
            );
        console.log("fetch");
    };

    componentDidMount() {
        this.fetchingData();
    }

    loadHome = () =>{
        return    <div className={"note-item-wrapper"}>
            {
                this.state.notes.map((notes) => {
                    return <NoteItem  title={notes.title}
                                      id={notes.id}
                                      content={notes.content}
                                      color={notes.color}
                                      api={this.api}
                                      getId={this.getId}
                                      key={notes.id}

                    />


                })
            }
        </div>
    };
    getId = (id) =>{
        this.setState({selectedId:id});
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
                                      api={this.api}
                                      getId={this.getId}
                                      key={notes.id}
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
                                      api={this.api}
                                      getId={this.getId}
                                      key={notes.id}
                    />


                })
            }
        </div>

    };

    loadCreate = () =>{
        return <CreatePage  api={this.api}
                            fetch={this.fetchingData}
        />
    };

   loadSingleNote = () =>{
       return <div>
             <SingleNote api={this.api}
                         id={this.state.selectedId}
                         fetch={this.fetchingData}
             />
           </div>


   };


    render() {
        return (
            <div className={"App"}>
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

export default App;