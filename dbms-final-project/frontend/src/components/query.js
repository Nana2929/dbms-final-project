import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { DBAppContext } from "./AppContext";


export default ({}) => {
  const {handleSubmit} = useContext(DBAppContext)
  const [query, setQuery] = useState("")

  return (
    <form class="ml-20 mr-20 mb-6">
    <div class="flex items-center border-b border-teal-500 py-2">
      <input class="appearance-none bg-transparent border-none w-full font-bold text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="MySQL Query"
        aria-label="Query"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        >
      </input>
      <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
        onClick={()=>{handleSubmit(query)}}
        >
        Submit
      </button>
    </div>
  </form>
  )
}



