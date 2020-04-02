import React, {Component} from 'react';
import Buttons from "./Buttons";
import ModalWindow from "./ModalWindow";
import "../App.scss"

class Main extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    openModal() {
        this.setState(prevState => (
            {show: !prevState.show}))
    }

    closeModal(e) {
        if (e.target.id === "modal") {
            this.setState({show: false})
        }
    }

    render() {
        return (
            <div className="App">
                <Buttons onClick={() => this.openModal()} text="Open the modal "/>
                {this.state.show && <div id='modal' onClick={(e) => this.closeModal(e)}>
                    <ModalWindow
                        header="Do you want to delete this file?"
                        closeicon={true}
                        close={() => this.openModal()}
                        actions={[
                            <div id="btn">
                                <Buttons key={1}
                                         onClick={() => this.openModal()} text="Yes"/>
                                <Buttons key={1}
                                         onClick={() => this.openModal()} text="Cancel"/>
                            </div>
                        ]}

                    />
                </div>}


            </div>
        );
    }
}

export default Main;