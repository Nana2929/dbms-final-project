import React, { Component, useEffect, useState } from "react";
import Header from "../components/header";
import Buttons from "../components/button.layout";
import Query from "../components/query";
import STable from "../components/static.table";
import DTable from "../components/table";
import DBTable from "../components/db_table";

const DBAppContext = React.createContext({
    entries:[], fetchEntries:()=>{}
})


export default function DBApp(){
    const [entries, setEntries] = useState([]);
    const fetchEntries = async()=>{
        const response = await fetch('http://localhost:8000/todo')
        const entries_ = await response.json()
        setEntries(entries_.data) // naming entries_.data to entries
    }
    console.log('!!', entries);
    if (entries.length > 0){
        var sampledata = entries[0];
        var Columns = new Array();
        for (var key in sampledata){
            Columns.push(key);
        }
    }
    // parsing each entry to get data rows
    var RowsList = new Array();
    for (var i =0; i < entries.length;i++){
        var data = entries[i];
        var row = new Array();
        for (key in data){
            row.push(data[key]);
        }
        RowsList.push(row);
    }
    console.log('columns', Columns);
    console.log('rows', RowsList);
    useEffect(() => {
        fetchEntries()
    }, [])
    return (
            <div id="root">
            <div class="absolute text-amber-100 bg-sky-900 top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                <div class="flex items-center"></div>
                <Header text="IIU Student Mangement System"
                    subtext="Supported by react"></Header>
                <Query></Query>
                <Buttons></Buttons>
                {/* <STable></STable> */}
                {/* <DTable></DTable> */}
                <DBTable columnIndex={Columns} rowsList={RowsList}></DBTable>

                {/* {
                entries.map((row) => (
                     <RowHelper item={row.item} id={row.id} fetchTodos={fetchEntries} />
                    ))
                } */}

                {/* <section className="todo-app__main">
                <input type="text" value = {this.state.inputValue} onKeyPress = {this.handlePressEnter}
                onChange = {this.handleInputChange} // setting arg from defaultValue to value acheives 'press enter and clean the input field'
                placeholder="What needs to be done today?" className="todo-app__input"></input>
                {this.renderEntries()}
                </section>
                {this.state.todos.length > 0 ? this.renderFooter(): null} */}
                </div>
            </div>)
    }

// class DBApp extends Component {
//     constructor(props){
//         super(props) // all react component classes that have a constructor should have a super(props)
//         this.state = {
//         };
//     }
//     render(){
//         window.state = this.state;
//         return (
//         );

//     }
// }
// export default DBApp;