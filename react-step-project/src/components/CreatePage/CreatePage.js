import React, {Component} from 'react';
import './CreatePage.scss'
let colors = ["#a4eb34","#34a8eb", "#ebd634", "#eb346b"];

class CreatePage extends Component{
    state={
        formData:{
            id: Date.now(),
            title : "",
            content: "",
            status : "actual",
            color :colors[Math.floor(Math.random() * colors.length)]
        },
            submitAuth:false,

    };

    formChangeHandler = (e) => {
        let state={...this.state.formData,[e.target.name]:e.target.value};
        this.setState({
            formData:state
        });
    };
    submitHandler = (e) => {
        let obj=this.state.formData;
        e.preventDefault();
        fetch(`${this.props.api}/notes`, {
            method: "POST",
            body: JSON.stringify(
                obj
            ),
            headers: {
                "Content-type": "application/json"}

        }).then((res) => res.json())
            .then(this.props.fetch)
    };


    render() {
        return (
            <>
                <h1 className={"header"}>Fill Data</h1>
                <form onChange={this.formChangeHandler} onSubmit={this.submitHandler}>
                    <input type="text" placeholder={"title"} name={"title"} className={"title"}/>
                    <input type="textarea" placeholder={"text"} name={"content"} className={"content"} style={{backgroundColor:this.state.formData.color}}/>
                    <input type="submit" className={"submit-button"}/>
                </form>

            </>
        );
    }
}
export default CreatePage;