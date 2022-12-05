import React from "react";
import Button from "./button";
import {btn1, btn2, btn3} from "./button.style";

export default ()=>{
  const buttons = [
    {
      name: 'SELECT',
      styleCmpt: 'btn1',
    },
    {
      name: 'DELETE',
      styleCmpt: 'btn1',
    },
    {
      name: 'INSERT',
      styleCmpt: 'btn1',
    },
    {
      name: 'UPDATE',
      styleCmpt: 'btn1',
    },
    {
      name: 'IN',
      styleCmpt: 'btn2',
    },
    {
      name: 'NOT IN',
      styleCmpt: 'btn2',
    },
    {
      name: 'EXISTS',
      styleCmpt: 'btn2',
    },    {
      name: 'NOT EXISTS',
      styleCmpt: 'btn2',
    },    {
      name: 'COUNT',
      styleCmpt: 'btn3',
    },    {
      name: 'SUM',
      styleCmpt: 'btn3',
    },    {
      name: 'MAX',
      stylefCmpt: 'btn3',
    },    {
      name: 'MIN',
      styleCmpt: 'btn3',
    },
    {
      name: 'AVG',
      styleCmpt: 'btn3',
    },
    {
      name: 'HAVING',
      styleCmpt: 'btn3',
    },
  ];

  return (
    // https://tailwindcss.com/docs/align-content
    <div class="ml-20 mr-20 h-56 grid grid-cols-4 gap-4 content-start ...">

      {
        buttons.map(({name, styleCmpt}) => <Button name={name} StyleCmpt={styleCmpt === 'btn1' ? btn1 : (styleCmpt === 'btn2' ? btn2 : btn3)}/>)
      }
      {/* cyan to blue */}
      {/* <button type="button" class="font-mono text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        SELECT</button>
      <button type="button" class="font-mono text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        DELETE</button>
      <button type="button" class="font-mono text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        INSERT</button>
      <button type="button" class="font-mono text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        UPDATE</button> */}
     {/* sky to lime */}
      {/* <button type="button" class="font-mono text-gray-900 bg-gradient-to-r from-sky-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        IN</button>
      <button type="button" class="font-mono text-gray-900 bg-gradient-to-r from-sky-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        NOT IN</button>
      <button type="button" class="font-mono text-gray-900 bg-gradient-to-r from-sky-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        EXISTS</button>
      <button type="button" class="font-mono text-gray-900 bg-gradient-to-r from-sky-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        NOT EXISTS</button> */}
      {/* orange to yellow */}
      {/* <button type="button" class="text-gray-900 bg-gradient-to-r from-orange-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring--100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        COUNT </button>red
      <button type="button" class="text-gray-900 bg-gradient-to-r from-orange-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        SUM </button>
      <button type="button" class="text-gray-900 bg-gradient-to-r from-orange-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        MAX </button>
      <button type="button" class="text-gray-900 bg-gradient-to-r from-orange-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        MIN </button>
      <button type="button" class="text-gray-900 bg-gradient-to-r from-orange-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        AVG </button> */}

      {/* <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Red to Yellow</button>
      <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Red to Yellow</button>
      <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Red to Yellow</button>
      <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Red to Yellow</button>

      <button type="button" class="text-white bg-amber-200 hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-900">Red</button>
      <button type="button" class="text-white bg-orange-200 hover:bg-orange-300 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-orange-900">Yellow</button>
      <button type="button" class="text-white bg-neutral-500 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>


      <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Green</button>
<button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Red</button>
<button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Yellow</button> */}
    </div>
  );
}
