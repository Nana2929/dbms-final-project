import React from "react";
import dino from "../assets/dino.png";

export default function Table({columnIndex, rowsList}) {
    // parse each entry to get data rows
    // console.log('Hi', columns)
    // const tableRows = studentsDict.map((info) => {
    //     return (
    //       <tr>
    //         <td>{info.id}</td>
    //         <td>{info.item}</td>
    //         <td>{info.ssn}</td>
    //       </tr>
    //     );
    //   });
    // dynamic table generatoor
    // const columnIndex = ['id', 'item', 'ssn', 'CourseTaking Count'];
    // const StudentsDict = [
    //     ['P76114511', 'Nana', '21936423x', 3],
    //     ['P76114512', 'Lan', '21936423x', 20],
    //     ['P76114513', 'David', '21936423x', 20]]
    return (
      (rowsList.length > 0) ?
        <div class="p-5 ml-21 mr-21 m-12">
            <h1 class="text-xl font-extrabold mb-2">Query Result</h1>
            <div class="overflow-auto rounded-lg shadow">
                <table class="w-full">
                <thead class="bg-slate-300 text-zinc-500 border-b-2 border-gray-200">
                <tr>
                {columnIndex.map(col => <th
                class="w-20 p-3 text-sm font-semibold tracking-wide text-left">{col}</th>)}
              </tr>
              </thead>
          <tbody class="divide-y divide-gray-100">
            {rowsList.map(row => <tr class="bg-white divide-y divide-gray-100">
                {row.map(col =>
                            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{col}</td>)}</tr>)}
          </tbody>
          </table>
          </div>
        </div>
      :
      <div class="p-5 ml-21 mr-21 mt-10">
        <img src={dino} class="self-center" width="25%" style={{"margin": "auto"}}></img>
        <h1 class="text-center text-2xl font-mono mt-6">
          Oops... The table is empty...
        </h1>
      </div>
    )
}