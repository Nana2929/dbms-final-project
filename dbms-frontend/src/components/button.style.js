import styled from 'styled-components';


//
const btn1 = styled.div.attrs({
    className: 'font-mono text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2',
    })``;

const btn2 = styled.div.attrs({
      className: "font-mono text-gray-900 bg-gradient-to-r from-sky-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
})``;
const btn3 = styled.div.attrs({
      className:"text-gray-900 bg-gradient-to-r from-orange-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring--100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    })``;
    // ``: template literals, shouldn't be forgot 

export {btn1, btn2, btn3};
