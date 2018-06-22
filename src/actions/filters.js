//SET_TEXT_FILTER
export const setTextFilter = (text='')=>({
    type:'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE
export const sortByDate=(sortBy='date')=>({
        type:'SORT_BY_DATE',
        sortBy
    });

//SORT_BY_AMOUNT
export const sortByAmount=(sortBy='amount')=>({
    type:'SORT_BY_AMOUNT',
    sortBy
});
//SET_START_DATE
export const setStartDate =(date=undefined)=>({
    type:'SET_START_DATE',
    date
});
//SET_END_DATE
export const setEndDate =(date=undefined)=>({
    type:'SET_END_DATE',
    date
});