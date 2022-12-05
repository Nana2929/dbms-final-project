import React, { Component } from "react";
import Header from "../components/header";
import Buttons from "../components/button.layout";
import Query from "../components/query";
import STable from "../components/static.table";
import DTable from "../components/table";
class DBApp extends Component {
    constructor(props){
        super(props) // all reatc component classes that have a constructor should have a super(props)
        this.state = {
        };
    }
    render(){
        window.state = this.state;
        return (<div id="root">
            <div class="absolute text-amber-100 bg-sky-900 top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                <div class="flex items-center"></div>
                <Header text="IIU Student Mangement System"
                    subtext="Supported by react"></Header>
                <Query></Query>
                <Buttons></Buttons>
                <STable></STable>
                <DTable></DTable>
                {/* <section className="todo-app__main">
                <input type="text" value = {this.state.inputValue} onKeyPress = {this.handlePressEnter}
                onChange = {this.handleInputChange} // setting arg from defaultValue to value acheives 'press enter and clean the input field'
                placeholder="What needs to be done today?" className="todo-app__input"></input>
                {this.renderEntries()}
                </section>
                {this.state.todos.length > 0 ? this.renderFooter(): null} */}
                </div>
            </div>
        );

    }
}
export default DBApp;