import React from "react";
export default ({}) => (
//     <div class="ml-20 mr-20 mb-6">
//     <label for="default-input" class="block font-extrabold mb-2 text-sm font-medium text-zinc-100 dark:text-white">
//         MySQL Query</label>
//     <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
//     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
// </input></div>
    <form class="ml-20 mr-20 mb-6">
    <div class="flex items-center border-b border-teal-500 py-2">
      <input class="appearance-none bg-transparent border-none w-full font-bold text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text"
      placeholder="MySQL Query" aria-label="Query">
      </input>
      <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
        Submit
      </button>
    </div>
  </form>
)



