import React, {Component} from 'react';
import Main from "./component/Main";
import Header from "./component/header";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;