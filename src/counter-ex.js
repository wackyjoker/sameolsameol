import React from 'react';
import ReactDOM from 'react-dom';


console.log('sucess');
let count = 0;
const addOne = ()=>{
    count++;
    changeCounter();
};
const minusOne = () => {
        count--;
        changeCounter();
    
};

const reSet = () =>{
    count = 0;
    changeCounter();
};

var appRoot = document.getElementById('app');

const changeCounter = () => {
    const templateTwo  = (
        <div>
        <h1> Count: {count}</h1>
        <button className="add1" onClick={addOne} >+1</button>
        <button className = "minus1" onClick={minusOne}>-1 </button>
        <button className='reset' onClick={reSet} > reset </button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};




changeCounter();