import React, {Component} from 'react';
import NoteItemWrapper from "../components/NoteItemWrapper/NoteItemWrapper";

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

    render() {
        return (
            <div>
                <NoteItemWrapper notes = {this.state.notes}/>
            </div>
        );
    }
}

export default FakeApp;