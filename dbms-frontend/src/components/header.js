import React from "react";
export default ({text, subtext}) => (
        // <header className="todo-app__header">
        // https://heroicons.com/
      <div>
        <div class="text-center px-6 md:px-12">

            <h1 class="text-5xl font-bold mt-0 mb-6">{text}</h1>
            <h4 class="text-3xl font-bold mb-8">{subtext}</h4>
            {/* <button type="button"
            class="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            Get started
          </button> */}
        </div>
        </div>
)