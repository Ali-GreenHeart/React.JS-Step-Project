import React, {Component} from 'react';
import './CreatePage.scss'
import {Redirect} from "react-router-dom";
let colors = ["#34a8eb","#ebd634","#a4eb34",  "#eb346b"];

class CreatePage extends Component{
    state={
        formData:{
            title : "",
            content: "",
            status : "actual",
            color :colors[Math.floor(Math.random() * colors.length)]
        },
        submitAuth:false,
        redirect:false

    };
    Redirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
    };


    formChangeHandler = (e) => {
        let stateData = {...this.state.formData,[e.target.name]:e.target.value};
        console.log(Object.keys(stateData).every(i => stateData[i].length > 0));
        if (Object.keys(stateData).every(i => stateData[i].length !== false))
        {
            this.setState({formData:stateData});
            this.setState({submitAuth:true})
        } else {
            this.setState({formData:stateData});
            this.setState({submitAuth:false})

        }

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
            .then(this.props.fetch);
        this.setState({
            redirect: true
        })

    };

    colorHandler = (e) =>{
        let index = e.target.getAttribute("data-id");
        let color = colors[index];
        this.setState({formData:{...this.state.formData,color:color}})
    };


    render() {
        return (
            <>
                <h1 className={"header"}>New Note</h1>
                <form onChange={this.formChangeHandler} onSubmit={this.submitHandler}>
                    <input type="text" name={"title"} className={"title"} style={{backgroundColor:this.state.formData.color}}/>
                    <textarea name={"content"} className={"content"} />

                        <div className={"color"}>
                            <span>Colors :</span>

                            <div className={'button-container'}>
                            <span data-id={0} className={'blue button'} onClick={this.colorHandler} />
                            <span data-id={1} className={'yellow button'} onClick={this.colorHandler}/>
                            <span data-id={2} className={'green button'} onClick={this.colorHandler}/>
                            <span data-id={3} className={'red button'} onClick={this.colorHandler}/>
                        </div>
                        </div>


                    <input type="submit" className={"submit-button"} disabled={!this.state.submitAuth} value={"CREATE"}/>
                </form>
                {this.Redirect()}

            </>
        );
    }
}
export default CreatePage;