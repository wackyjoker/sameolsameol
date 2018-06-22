import moment from 'moment';

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: moment().startOf('month'),
    startDateId:'123asd',
    endDate: moment().endOf('month'),
    endDateId:'123asddd'
}



export default (state=filtersReducerDefaultState,action)=>{
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






