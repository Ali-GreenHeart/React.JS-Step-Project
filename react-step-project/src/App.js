import React, {Component} from 'react';
import Main from "./component/Main";
import Header from "./component/header";
import './App.css'
import Button from "./components/Button/Button";
import CreatePage from "./components/CreatePage/CreatePage";

function save() {
    console.log("i am save clicker")
}
function edit() {
    console.log(" i am edit clicker")
}
function deleteF() {
    console.log(" i am delete clicker")
}

function App() {
  return (
    <div >
        <Header/>
        <Main/>
        <CreatePage />
    </div>
  );
}

export default App;