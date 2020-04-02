import React, {Component} from 'react';
import Button from "./Button/Button";

class FakeApp extends Component {

    testFunction = () => {
        console.log("button worked!!")
    };

    render() {
        return (
            <div>
                <Button text={"button"} clicked={this.testFunction} />
            </div>
        );
    }
}

export default FakeApp;