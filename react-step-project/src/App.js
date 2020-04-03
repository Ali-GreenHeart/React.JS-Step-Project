import React, {Component} from 'react';
import NoteItemWrapper from "./components/NoteItemWrapper/NoteItemWrapper";
import Header from "./components/Header/header";
import {Route} from "react-router-dom";
import Actual from "./component/Actual";
import Archive from "./component/Archive";
import Create from "./component/Create";
import Main from "./component/Main";
import CreatePage from "./components/CreatePage/CreatePage";

class FakeApp extends Component {

    state = {
        notes:[]
    };
    componentDidMount() {
        fetch("jsonserver/db.json")
            .then(r => r.json())
            .then(
                (data) => {
                    this.setState({notes: data.notes});
                },
            );

    }

    loadHome = () =>{
        return <NoteItemWrapper notes={this.state.notes}/>
    };

    loadActual = () =>{
        return <h1>Actual notes burda olmalıdı</h1>
    };

    loadArchive = () =>{
        return <h1>Archive notes burda olmalıdı</h1>
    };

    loadCreate = () =>{
        return <h1>Create burda olmalıdı</h1>
    };

    render() {
        return (
            <div>
                <Header/>
                <Route path={'/'} exact render={this.loadHome}/>
                <Route path={'/actual'} render={this.loadActual}/>
                <Route path={'/archive'} component={this.loadArchive}/>
                <Route path={'/create'} component={this.loadCreate}/>
            </div>
        );
    }
}

export default FakeApp;