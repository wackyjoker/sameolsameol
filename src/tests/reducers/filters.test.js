import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter reducer',()=>{
	const state= filtersReducer(undefined,{type:'@@INIT'});

	expect(state).toEqual({
		text:'',
		sortBy:'date',
		startDate: moment().startOf('month'),
		startDateId:'123asd',
  		 endDate: moment().endOf('month'),
  	 	endDateId:'123asddd'
	});
});


test('should set sortBy to amount',()=>{
	const state= filtersReducer(undefined, { type : 'SORT_BY_AMOUNT',sortBy:'amount'});
	expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date',()=>{
	const	currentState={
		    text: '',
    sortBy: 'amount', // date or amount
    startDate: moment().startOf('month'),
    startDateId:'123asd',
    endDate: moment().endOf('month'),
    endDateId:'123asddd'
	}
	const action = {type:'SORT_BY_DATE',sortBy:'date'}
	const state= filtersReducer(currentState,action);
	
	expect(state.sortBy).toBe('date');
});


//set text filter
test('should set text filter',()=>{
	let text = 'text123';
	let action =  {
		type:'SET_TEXT_FILTER',
		text
	};
	const state= filtersReducer(undefined,action);
	expect(state.text).toBe('text123');
});
//set startDate filter
test('should set startDate filter',()=>{
	let date = moment(0);
	let action = {type:'SET_START_DATE',date};
	const state= filtersReducer(undefined,action);
	expect(state.startDate).toBe(date);
});
//set endDate filter

test('should set endDate filter',()=>{
	let date = moment(0);
	let action = {type:'SET_END_DATE',date};
	const state= filtersReducer(undefined,action);
	expect(state.endDate).toBe(date);
});