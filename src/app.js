import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './style/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouters from './routers/AppRouters';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// import './utils.js';
// import anyThing,{thirtyDays,add,kiloTravel} from './utils.js';
// import isSenior ,{isAdult,canDrink} from './person.js';
// import validator from 'validator';

// console.log("app.js is running");
// console.log(thirtyDays(0.01)+"  "+add(2,5));


//  IndecisionApp.defaultProps = {
//                 options:[]
//                              };


const store = configureStore();

store.dispatch(addExpense({description:'Water Bill',amount:200,createdAt : 125}));
store.dispatch(addExpense({description:'Gas Bill',amount:100,createdAt : 1000}));
store.dispatch(addExpense({description:'Rent',amount:10900}));
// store.dispatch(setTextFilter('water'));


// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'));
// },3000);

// store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
// });

const jsx = (
   <Provider store={store}>
   <AppRouters/>
   </Provider>
);


ReactDOM.render(jsx,document.getElementById('app'));



// const jsx=(
// <div>

// <h1> wtf?</h1>
// <Header />
// <Action />
// <Option />

// <Action />
// </div>
// );

// const person = {
//     name:"moda",
//     age:18
// }

// console.log(validator.isEmail('test@gmail.com'));
// console.log(isAdult(person.age));
// console.log(canDrink(person.age));
// console.log(add(3,4));
// console.log(anyThing(5,2));

/// console.log("kilos that cost   "+ kiloTravel(350)+"km");

// console.log(isSenior(50));
