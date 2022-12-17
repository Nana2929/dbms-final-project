import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import Header from "../components/header";
import Query from "../components/query";
import DBTable from "../components/db_table";
import Button from "../components/button";
import {btn1, btn2, btn3} from "../components/button.style";
import {DBAppContext} from "../components/AppContext";
import {buttons} from "../components/button.layout";
import {ErrorBoundary} from "../components/error.boundary"

export default function DBApp(){
    const [entries, setEntries] = useState([]);
    const [pressedBtn, setPressedBtn] = useState('');
    const [reset, setReset] = useState(false);
    // equivalent example in class component
    // setPressedBtn = pressedBtn => {
    //     this.setState({pressedBtn: pressedBtn});
    // }

    const fetchEntries = async()=>{
        const response = await fetch('http://localhost:8000/todo')
        const entries_ = await response.json()
        setEntries(entries_.data)
    }

    useEffect(() => {
        fetchEntries()
    }, [reset])

    const handleClick=(btn_type)=>{
        axios.post('http://localhost:8000/todo',
        {'btn_type': btn_type})
        .then(response => response.data)
        .then(data => {
            console.log(data)
            setEntries(data.data);
            setPressedBtn(btn_type);
            }
        )
    }

    const handleSubmit=(query)=>{
        console.log(query)
        axios.post('http://localhost:8000/todo_q',
        {'manual_query': query})
        .then(response => response.data)
        .then(data => {
            setEntries(data.data);
            setPressedBtn('manual_query');
            }
        )
        .catch(error => {
            // fetchEntries()
            setEntries([])
            console.log(error)
            alert("Invalid Query")
        })
    }

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

    console.log('entries', entries)
    console.log('columns', Columns);
    console.log('rows', RowsList);

    return (
            <div id="root" class="pt-10 text-amber-100 bg-sky-900 overflow-hidden">
                <Header
                    text="IIU Student Management System"
                    subtext="Supported by react">
                </Header>

                <DBAppContext.Provider value= {{handleClick, handleSubmit}}>

                <Query />

                <div class="px-5 mx-12 h-56 grid grid-cols-4 gap-4 content-start">
                {
                    buttons.map(({name, styleCmpt}) =>
                    <Button name={name} StyleCmpt={styleCmpt === 'btn1' ? btn1 : (styleCmpt === 'btn2' ? btn2 : btn3)}/>)
                }

                </div>
                {/* <ErrorBoundary> */}
                <DBTable columnIndex={Columns} rowsList={RowsList}></DBTable>
                {/* </ErrorBoundary> */}
                </DBAppContext.Provider>
                </div>

            )
}