import React from "react";
export default function Table() {
    // dynamic table generatoor
    const columnIndex = ['SSN', 'Name', 'AdvisorSSN', 'CourseTaking Count'];
    const StudentsDict = [
        ['P76114511', 'Nana', '21936423x', 3],
        ['P76114512', 'Lan', '21936423x', 20],
        ['P76114513', 'David', '21936423x', 20]]
    return <div class="p-5 ml-21 mr-21">
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
        {StudentsDict.map(row => <tr class="bg-white divide-y divide-gray-100">
            {row.map(col =>
                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{col}</td>)}</tr>)}
      </tbody>
      </table>
      </div>
    </div>
}