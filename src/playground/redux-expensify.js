import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


const addExpense = ({
    description='',
    note='',
    amount=0,
    createdAt=0
    } = { }
    ) =>  ({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt  
    }
});

const removeExpense = ({id}={}) => ({
type:'REMOVE_EXPENSE',
id
});

const editExpense = (id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

const expensesReducerDefaultState = [];

const expensesReducer= (state=expensesReducerDefaultState,action)=>{
switch(action.type){
    case 'ADD_EXPENSE':
   return [
       ...state,
       action.expense
   ];
   case'REMOVE_EXPENSE':
    return state.filter(({id})=> id !== action.id);
   case 'EDIT_EXPENSE':
    return state.map((expense)=>{
        if(expense.id===action.id){
          return {...expense,...action.updates};
        } else {
            return expense;
        }
    });
    default: 
    return state;
   }
};


//SET_TEXT_FILTER
const setTextFilter = (text='')=>({
    type:'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE
const sortByDate=(sortBy='date')=>({
        type:'SORT_BY_DATE',
        sortBy
    });

//SORT_BY_AMOUNT
const sortByAmount=(sortBy='amount')=>({
    type:'SORT_BY_AMOUNT',
    sortBy
});
//SET_START_DATE
const setStartDate =(date=undefined)=>({
    type:'SET_START_DATE',
    date
});
//SET_END_DATE
const setEndDate =(date=undefined)=>({
    type:'SET_END_DATE',
    date
});
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
}


const filterReducer= (state=filterReducerDefaultState,action)=>{
switch(action.type){
    case 'SET_TEXT_FILTER':
    return {...state,text:action.text};
    case 'SORT_BY_DATE':
    return {...state,sortBy:action.sortBy};
    case 'SORT_BY_AMOUNT':
    return {...state,sortBy:action.sortBy};
    case 'SET_START_DATE':
    return {...state,startDate:action.date};
    case 'SET_END_DATE':
    return {...state,endDate:action.date};
    default: 
    return state;
   }
};

//timestamps




//Get visible expenses 
const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense) => {
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt /*1000*/ >= startDate /*1000*/ ;
            const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
            const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase());
           
            
            // figure out if expenses.description 

            return startDateMatch && endDateMatch && textMatch;
            // return true&&true&&true;
        }).sort((a,b) =>{
        	if(sortBy === 'date'){
        	return	 a.createdAt - b.createdAt  ;
        	}
        	if ( sortBy === 'amount'){
        		return b.amount - a.amount;
        	}
        	
        });   
};

//store creation
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expenseOne =  store.dispatch(addExpense({description:'rent',amount:100,createdAt : 1000}));
const expenseTwo =  store.dispatch(addExpense({description:'coffee',amount:3000,createdAt : -1000}));


// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));


// store.dispatch(setTextFilter());
// store.dispatch(setTextFilter('ff'));
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());

    // store.dispatch(setStartDate(0));
    // store.dispatch(setStartDate());
    // store.dispatch(setEndDate(1250));
    
const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}

const user= {
    name:'jenny',
    age:24
}

// console.log({
//     ...user,
//     location:'San Francisco',
//     age:26
// });

